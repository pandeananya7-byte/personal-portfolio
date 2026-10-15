'use client';

import { Header } from '@/components/header';
import { Section, AnimatedSection } from '@/components/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, PenTool, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function WritingPage() {
  const { writing } = RESUME_DATA;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32">
        <Section className="pb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-primary mb-4">
              <PenTool className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Writing</span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              {writing.heading}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {writing.intro}
            </p>
          </div>
        </Section>

        {/* Categories */}
        <Section className="py-8">
          <div className="flex flex-wrap gap-3">
            {writing.categories.map((cat) => (
              <Badge key={cat} variant="secondary" className="px-4 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                {cat}
              </Badge>
            ))}
          </div>
        </Section>

        {/* Articles List */}
        <AnimatedSection>
          <div className="grid grid-cols-1 gap-10">
            {writing.articles.map((article) => (
              <Card key={article.slug} className="group border-none shadow-none bg-transparent hover:bg-card/50 transition-all p-6 -mx-6 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                      <span className="text-primary font-bold uppercase tracking-widest">{article.category}</span>
                      <span>&middot;</span>
                      <div className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {article.date}</div>
                      <span>&middot;</span>
                      <div className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {article.readingTime}</div>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-headline group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Button variant="link" asChild className="p-0 h-auto gap-2 group/btn">
                      <Link href={article.slug}>Read Full Article <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" /></Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Placeholder for more */}
        <Section className="py-24 text-center border-t border-border mt-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-headline text-2xl font-bold">More stories in progress.</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently working on a series of essays about the intersection of institutional power and personal narrative. Sign up to get notified when they're published.
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p className="font-headline text-lg font-bold text-primary mb-2">Thoughts & Observations</p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">© {new Date().getFullYear()} {RESUME_DATA.name}</p>
        </div>
      </footer>
    </div>
  );
}