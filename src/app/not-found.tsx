import Link from 'next/link';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-32 pb-16 px-6">
        <div className="max-w-md text-center space-y-6">
          <div className="text-6xl font-headline font-bold text-primary">404</div>
          <h1 className="text-2xl font-bold font-headline">Page Not Found</h1>
          <p className="text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="pt-2">
            <Button asChild>
              <Link href="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Return Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="py-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ananya Pande
      </footer>
    </div>
  );
}
