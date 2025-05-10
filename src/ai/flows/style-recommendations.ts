'use server';

/**
 * @fileOverview AI-powered style recommendation flow for bags.
 *
 * - getStyleRecommendations - A function that returns personalized bag recommendations.
 * - StyleRecommendationsInput - The input type for the getStyleRecommendations function.
 * - StyleRecommendationsOutput - The return type for the getStyleRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StyleRecommendationsInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('The user preferences for bags, including style, color, and size.'),
  browsingHistory: z
    .string()
    .describe('The user browsing history on the website, including viewed bags and categories.'),
});
export type StyleRecommendationsInput = z.infer<typeof StyleRecommendationsInputSchema>;

const StyleRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of bag recommendations based on user preferences and browsing history.'),
});
export type StyleRecommendationsOutput = z.infer<typeof StyleRecommendationsOutputSchema>;

export async function getStyleRecommendations(input: StyleRecommendationsInput): Promise<StyleRecommendationsOutput> {
  return styleRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'styleRecommendationsPrompt',
  input: {schema: StyleRecommendationsInputSchema},
  output: {schema: StyleRecommendationsOutputSchema},
  prompt: `You are a personal stylist for bags. Based on the user's preferences and browsing history, recommend bags that match their style.

User Preferences: {{{userPreferences}}}
Browsing History: {{{browsingHistory}}}

Please provide a list of bag recommendations.`,
});

const styleRecommendationsFlow = ai.defineFlow(
  {
    name: 'styleRecommendationsFlow',
    inputSchema: StyleRecommendationsInputSchema,
    outputSchema: StyleRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
