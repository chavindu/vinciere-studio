
"use client";

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { getStyleRecommendations, type StyleRecommendationsInput, type StyleRecommendationsOutput } from '@/ai/flows/style-recommendations';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function StyleAdvisorClient() {
  const [userPreferences, setUserPreferences] = useState('');
  const [browsingHistory, setBrowsingHistory] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    if (!userPreferences.trim()) {
        toast({
            title: "Missing Information",
            description: "Please describe your style preferences.",
            variant: "destructive",
        });
        setIsLoading(false);
        return;
    }

    const input: StyleRecommendationsInput = {
      userPreferences,
      browsingHistory: browsingHistory || 'No specific browsing history provided. Focus on general preferences.',
    };

    try {
      const result: StyleRecommendationsOutput = await getStyleRecommendations(input);
      if (result.recommendations && result.recommendations.length > 0) {
        setRecommendations(result.recommendations);
      } else {
        setRecommendations(["Sorry, we couldn't find any specific recommendations based on your input. Try being more descriptive!"]);
      }
    } catch (e) {
      console.error("Error getting style recommendations:", e);
      setError('Failed to get recommendations. Please try again.');
      toast({
        title: "Error",
        description: "Could not fetch style recommendations. Please check your connection or try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center gap-2">
            <Wand2 className="w-6 h-6 text-accent" />
            Describe Your Style
          </CardTitle>
          <CardDescription>
            Tell us about your fashion preferences and we&apos;ll suggest some Vinciere bags you might love.
            Consider mentioning your favorite colors, occasions you shop for, or general aesthetics (e.g., minimalist, bohemian, classic, trendy).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="preferences" className="text-primary font-semibold">Your Style Preferences*</Label>
              <Textarea
                id="preferences"
                value={userPreferences}
                onChange={(e) => setUserPreferences(e.target.value)}
                placeholder="e.g., I love minimalist designs, neutral colors like beige and black. I need a bag for work that can fit a laptop. I also like a touch of gold hardware."
                rows={5}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="history" className="text-primary font-semibold">Recent Bags You&apos;ve Liked (Optional)</Label>
              <Textarea
                id="history"
                value={browsingHistory}
                onChange={(e) => setBrowsingHistory(e.target.value)}
                placeholder="e.g., Viewed the Classic Leather Tote, liked the Chic Crossbody in tan."
                rows={3}
                className="mt-1"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Getting Recommendations...
                </>
              ) : (
                'Get Style Recommendations'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary">Our Suggestions For You</h2>
        {isLoading && (
          <div className="flex items-center justify-center p-8 bg-secondary rounded-lg">
            <Loader2 className="h-8 w-8 text-accent animate-spin" />
            <p className="ml-3 text-muted-foreground">Finding the perfect bags...</p>
          </div>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {!isLoading && recommendations.length > 0 && (
          <Card className="bg-secondary shadow-lg">
            <CardContent className="p-6">
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                {recommendations.map((rec, index) => (
                  <li key={index} className="text-base">{rec}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
        {!isLoading && !error && recommendations.length === 0 && userPreferences && (
           <p className="text-muted-foreground p-8 bg-secondary rounded-lg text-center">
            No recommendations to show yet. Fill out your preferences and click the button!
          </p>
        )}
      </div>
    </div>
  );
}
