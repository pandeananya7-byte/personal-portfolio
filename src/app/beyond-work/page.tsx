'use client';

import { Header } from '@/components/header';
import { Section, AnimatedSection } from '@/components/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from '@/lib/data';
import { ArrowRight, Globe, Users, Heart, Lightbulb, Star } from 'lucide-react';
import Link from 'next/link';

export default function BeyondWorkPage() {
  const { beyondWork } = RESUME_DATA;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32">
        <Section className="pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-primary mb-4">
              <Globe className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Beyond Work</span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6">Initiatives & Ideas</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Projects that started with curiosity, conviction, and a drive to build something meaningful.
            </p>
          </div>
        </Section>

        {/* Initiatives Grid */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beyondWork.initiatives.map((init) => (
              <Card key={init.title} className="flex flex-col h-full hover:shadow-lg transition-shadow border-border/50">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl group-hover:text-primary">{init.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed">{init.description}</p>
                </CardContent>
                {init.links && (
                  <CardFooter className="pt-4 border-t">
                    {init.links.map(link => (
                      <Button key={link.url} variant="link" asChild className="p-0 h-auto gap-2 group">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                    ))}
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Interests / Questions */}
        <AnimatedSection className="bg-card py-24 border-y border-border">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-primary mb-4">
                <Lightbulb className="h-6 w-6" />
                <h2 className="font-headline text-3xl font-bold">{beyondWork.interests.heading}</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                Themes and questions that shape how I see the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {beyondWork.interests.themes.map((theme) => (
                <div key={theme.title} className="relative pl-12">
                  <div className="absolute top-1 left-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Star className="h-4 w-4" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4">{theme.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {theme.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Mentorship CTA */}
        <Section className="py-24 text-center">
          <div className="max-w-3xl mx-auto bg-primary/5 p-12 rounded-3xl border border-primary/10">
            <Users className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="font-headline text-2xl font-bold mb-4">Mentorship & Community</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I've benefited immensely from mentors throughout my journey. I'm always happy to pay it forward, especially for early-stage founders and women in tech/fintech.
            </p>
            <Button asChild>
              <Link href="/contact">Reach Out</Link>
            </Button>
          </div>
        </Section>
      </main>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p className="font-headline text-lg font-bold text-primary mb-2">Building Communities</p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">© {new Date().getFullYear()} {RESUME_DATA.name}</p>
        </div>
      </footer>
    </div>
  );
}