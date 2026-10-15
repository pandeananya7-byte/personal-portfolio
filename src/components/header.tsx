'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, RESUME_DATA } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { MonogramLogo } from './monogram-logo';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <MonogramLogo className="h-7 w-7 text-primary transition-transform group-hover:scale-105" />
          <span className="font-headline text-lg font-bold text-foreground">
            {RESUME_DATA.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <Button variant="outline" size="sm" asChild className="hidden lg:flex gap-2">
              <a href="/resume.pdf" target="_blank">
                <FileText className="h-4 w-4" /> CV
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b animate-in slide-in-from-top-4 duration-200">
          <nav className="container mx-auto flex flex-col items-center gap-6 py-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium transition-colors',
                  pathname === link.href ? 'text-primary' : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" size="lg" asChild className="mt-4 gap-2">
              <a href="/resume.pdf" target="_blank">
                <FileText className="h-4 w-4" /> Download CV
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}