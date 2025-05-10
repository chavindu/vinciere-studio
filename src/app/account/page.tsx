
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, ShoppingBag, Heart, LogOut } from 'lucide-react';
import Link from 'next/link';
import { CartSheet } from '@/components/cart/CartSheet';

export default function AccountPage() {
  // This is a placeholder page. In a real app, you'd fetch user data.
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    joinDate: 'Joined January 2023',
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartSheet />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">My Account</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <Card className="md:col-span-1 h-fit">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <User className="w-10 h-10 text-accent p-2 bg-accent/10 rounded-full"/>
                <div>
                  <CardTitle className="text-xl">{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-accent hover:bg-accent/10">
                <User className="w-5 h-5" /> Profile Information
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-accent hover:bg-accent/10">
                <ShoppingBag className="w-5 h-5" /> Order History
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-accent hover:bg-accent/10">
                <Heart className="w-5 h-5" /> Wishlist
              </Button>
               <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-accent hover:bg-accent/10">
                <MapPin className="w-5 h-5" /> Saved Addresses
              </Button>
              <Button variant="destructive" className="w-full justify-start gap-2 mt-4">
                <LogOut className="w-5 h-5" /> Logout
              </Button>
            </CardContent>
          </Card>

          {/* Main Content Area */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Welcome back, {user.name.split(' ')[0]}!</CardTitle>
                <CardDescription>{user.joinDate}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  This is your account dashboard. Here you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Recent Activity (Placeholder)</h3>
                  <p className="text-muted-foreground">No recent orders. <Link href="/shop" className="text-accent hover:underline">Start shopping!</Link></p>
                </div>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Dummy MapPin icon if not imported from lucide-react
const MapPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
