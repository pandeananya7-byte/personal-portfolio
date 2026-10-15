'use client';

import { Header } from '@/components/header';
import { Section, AnimatedSection } from '@/components/section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from '@/lib/data';
import { ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32">
        <Section className="pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-primary mb-4">
              <Briefcase className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Experience</span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6">Work & Professional Impact</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Leading growth, partnerships, and operations across consumer fintech and SaaS ecosystems.
            </p>
          </div>
        </Section>

        {/* Case Studies */}
        <AnimatedSection>
          <div className="grid grid-cols-1 gap-12">
            {RESUME_DATA.selectedWork.map((work) => (
              <Card key={work.id} className="overflow-hidden border-none shadow-none bg-transparent">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <div className="text-sm font-bold text-primary uppercase tracking-widest">{work.category}</div>
                      <h2 className="font-headline text-3xl font-bold">{work.company}</h2>
                      <p className="text-xl font-medium text-foreground">{work.title}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{work.description}</p>
                    <Button asChild className="group">
                      <Link href={work.slug}>Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                    </Button>
                  </div>
                  <div className="lg:col-span-7 bg-card p-8 rounded-xl border border-border">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Key Results</h3>
                    <ul className="space-y-6">
                      {work.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary text-xs font-bold">
                            {idx + 1}
                          </div>
                          <span className="text-lg leading-snug">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience Timeline */}
        <AnimatedSection className="bg-card py-24 border-y border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-headline text-3xl font-bold mb-16 text-center">Career Timeline</h2>
            <div className="space-y-12">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
                  <div className="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-primary" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      {exp.date} &middot; {exp.location}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((point, pIdx) => (
                      <li key={pIdx} className="text-muted-foreground flex gap-3 text-sm leading-relaxed">
                        <span className="text-primary/50 mt-1 flex-shrink-0">●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact CTA */}
        <Section>
          <div className="bg-primary p-12 rounded-2xl text-primary-foreground text-center">
            <h2 className="font-headline text-3xl font-bold mb-4">Let's build something together</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              If you have a business challenge that needs a mix of strategy and execution, I'd love to discuss it.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </Section>
      </main>
      
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p className="font-headline text-lg font-bold text-primary mb-2">{RESUME_DATA.name}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}