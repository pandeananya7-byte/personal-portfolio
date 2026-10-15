'use client';

import Link from 'next/link';
import { ArrowRight, FileText, Star, Quote } from 'lucide-react';
import { AnimatedSection, Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from '@/lib/data';
import { Header } from '@/components/header';
import { BackToTop } from '@/components/back-to-top';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <Section className="pb-16 md:pb-24">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1]"
            >
              {RESUME_DATA.heroHeadline}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-3xl"
            >
              {RESUME_DATA.heroCopy}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/work">Explore My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/writing">Read My Writing</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild className="gap-2">
                <a href="/resume.pdf" target="_blank"><FileText className="h-4 w-4" /> Download CV</a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 pt-8 border-t border-border flex flex-wrap gap-x-8 gap-y-4"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Business Strategy</span>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Growth</span>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Product & Operations</span>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Partnerships</span>
            </motion.div>
          </div>
        </Section>

        {/* Selected Impact (Metrics) */}
        <AnimatedSection className="bg-card/50 py-20 border-y border-border">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {RESUME_DATA.metrics.map((metric) => (
              <div key={metric.label} className="space-y-4">
                <div className="text-4xl font-bold tracking-tighter text-primary">{metric.value}</div>
                <div className="space-y-2">
                  <h3 className="font-headline text-lg font-bold">{metric.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Selected Work */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
              <p className="text-muted-foreground text-lg">
                Building products and processes across fintech and early-stage ventures.
              </p>
            </div>
            <Button variant="link" asChild className="p-0 h-auto gap-2 group">
              <Link href="/work">View all projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESUME_DATA.selectedWork.map((project) => (
              <Card key={project.id} className="group border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="text-sm font-bold text-primary uppercase tracking-widest mb-2">{project.category}</div>
                  <CardTitle className="text-2xl font-headline group-hover:text-primary transition-colors">{project.company}</CardTitle>
                  <CardDescription className="text-lg mt-2 text-foreground font-medium">{project.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 flex-shrink-0">●</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button variant="link" asChild className="p-0 gap-2 group/btn">
                    <Link href={project.slug}>Read Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* How I Work (Capabilities) */}
        <AnimatedSection className="bg-card py-24 border-y border-border">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
            <p className="text-muted-foreground text-lg">
              Combining strategy with execution to navigate zero-to-one challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {RESUME_DATA.capabilities.map((cap) => (
              <div key={cap.title} className="p-8 border rounded-lg bg-background hover:shadow-md transition-shadow">
                <h3 className="font-headline text-xl font-bold mb-4 text-primary">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonial Highlight */}
        <AnimatedSection className="py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 text-primary/20 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-headline text-foreground leading-snug mb-10">
              "{RESUME_DATA.testimonials[0].quote}"
            </blockquote>
            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-lg">{RESUME_DATA.testimonials[0].name}</span>
              <span className="text-muted-foreground text-sm uppercase tracking-widest">{RESUME_DATA.testimonials[0].role}</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact CTA */}
        <AnimatedSection className="bg-primary/5 py-24 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Have something interesting in mind?</h2>
            <p className="text-muted-foreground text-lg mb-10">
              I'm always open to conversations about business, early-stage ventures, collaborations, writing and ideas worth exploring.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`mailto:${RESUME_DATA.contact.email}`}>Send an Email</a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-headline text-lg font-bold text-primary mb-2">Building Growth Stories that Scale</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">© {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" className="text-sm font-medium hover:text-primary transition-colors">LinkedIn</a>
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-sm font-medium hover:text-primary transition-colors">Email</a>
            <Link href="/writing" className="text-sm font-medium hover:text-primary transition-colors">Writing</Link>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}