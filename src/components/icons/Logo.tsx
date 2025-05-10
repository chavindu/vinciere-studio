
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`text-3xl font-bold text-primary hover:text-primary/80 transition-colors ${className}`}>
      VINCIERE
    </Link>
  );
}
