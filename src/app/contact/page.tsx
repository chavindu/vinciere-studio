
"use client"; // For form handling

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { CartSheet } from '@/components/cart/CartSheet';

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartSheet />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question about our products, an order, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 bg-secondary p-8 rounded-lg shadow-md">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-6">Our team is available to assist you during business hours.</p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary">Email Us</h3>
                <a href="mailto:support@vinciere.com" className="text-muted-foreground hover:text-accent">support@vinciere.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary">Call Us</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary">Our Studio</h3>
                <p className="text-muted-foreground">123 Vinciere Lane, Fashion City, FC 54321</p>
                <p className="text-sm text-muted-foreground">(By appointment only)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-primary">Full Name</Label>
                <Input id="name" type="text" placeholder="Your Name" required className="mt-1"/>
              </div>
              <div>
                <Label htmlFor="email" className="text-primary">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" required className="mt-1"/>
              </div>
              <div>
                <Label htmlFor="subject" className="text-primary">Subject</Label>
                <Input id="subject" type="text" placeholder="Reason for contacting" required className="mt-1"/>
              </div>
              <div>
                <Label htmlFor="message" className="text-primary">Message</Label>
                <Textarea id="message" placeholder="Write your message here..." rows={5} required  className="mt-1"/>
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
