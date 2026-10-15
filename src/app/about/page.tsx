'use client';

import { Header } from '@/components/header';
import { Section, AnimatedSection } from '@/components/section';
import { RESUME_DATA } from '@/lib/data';
import { GraduationCap, Briefcase, User, PenTool, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const { about } = RESUME_DATA;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32">
        <Section className="pb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-primary mb-4">
              <User className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-widest">About Me</span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
              A business operator who thinks in systems and stories.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-medium">
              {about.intro}
            </p>
          </div>
        </Section>

        {/* Detailed Bio / Experience */}
        <AnimatedSection className="bg-card py-24 border-y border-border">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="font-headline text-2xl font-bold sticky top-32">Professional Journey</h2>
              </div>
              <div className="md:col-span-8 space-y-10">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My work is driven by a curiosity about how things work—and how they can work better. Whether it's scaling a lending product at Flipkart's Super.money or building a partner ecosystem for a SaaS brand like Bitespeed, I focus on the intersection of strategic clarity and operational excellence.
                </p>
                <div className="space-y-8">
                  {RESUME_DATA.experience.slice(0, 3).map((exp, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{exp.company}</h3>
                        <span className="text-sm font-medium text-muted-foreground">{exp.date}</span>
                      </div>
                      <p className="text-primary font-medium mb-3">{exp.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description[0]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Intellectual Foundation */}
        <AnimatedSection className="py-24">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="font-headline text-2xl font-bold sticky top-32">Intellectual Foundation</h2>
              </div>
              <div className="md:col-span-8 space-y-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <GraduationCap className="h-6 w-6" />
                    <h3 className="font-headline text-xl font-bold">Education</h3>
                  </div>
                  {RESUME_DATA.education.map((edu, idx) => (
                    <div key={idx} className="pl-9 border-l-2 border-primary/10 py-2">
                      <p className="font-bold text-lg">{edu.degree}</p>
                      <p className="text-muted-foreground">{edu.institution} &middot; {edu.date}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <PenTool className="h-6 w-6" />
                    <h3 className="font-headline text-xl font-bold">Writing & Research</h3>
                  </div>
                  <div className="pl-9 border-l-2 border-primary/10 py-2">
                    <p className="text-muted-foreground leading-relaxed">
                      My background in Media Studies, Economics, and Political Science informs my writing. I explore questions of power, institutional integrity, and the human stories behind data.
                    </p>
                    <Link href="/writing" className="text-primary font-bold inline-block mt-4 hover:underline">Explore Writing →</Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Globe className="h-6 w-6" />
                    <h3 className="font-headline text-xl font-bold">Global Perspective</h3>
                  </div>
                  <div className="pl-9 border-l-2 border-primary/10 py-2">
                    <p className="text-muted-foreground leading-relaxed">
                      Through The Honest Critique and other international initiatives, I've developed a deep interest in how global forces impact local realities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Approach */}
        <Section className="bg-primary py-24 text-primary-foreground rounded-t-[3rem]">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-headline text-4xl font-bold mb-12">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Connecting the dots</h3>
                <p className="text-primary-foreground/80 leading-relaxed text-lg">
                  I don't believe in siloing functions. Growth depends on product, product depends on ops, and everything depends on clear communication.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Practical optimism</h3>
                <p className="text-primary-foreground/80 leading-relaxed text-lg">
                  Navigating ambiguity requires a conviction that a solution exists, combined with the pragmatism to build it step by step.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-12 border-t border-border bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs uppercase tracking-widest font-bold opacity-60">© {new Date().getFullYear()} {RESUME_DATA.name}</p>
        </div>
      </footer>
    </div>
  );
}