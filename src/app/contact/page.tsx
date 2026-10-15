'use client';

import { Header } from '@/components/header';
import { Section, AnimatedSection } from '@/components/section';
import { ContactForm } from '@/components/contact-form';
import { RESUME_DATA } from '@/lib/data';
import { Mail, Linkedin, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32">
        <Section className="pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-primary mb-4">
              <Send className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Connect</span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Have something interesting in mind?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I'm always open to conversations about business, early-stage ventures, collaborations, writing and ideas worth exploring.
            </p>
          </div>
        </Section>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm">
                <h2 className="font-headline text-2xl font-bold mb-8">Send a Message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <h2 className="font-headline text-xl font-bold uppercase tracking-widest text-muted-foreground/60">Contact Details</h2>
                <div className="space-y-4">
                  <a 
                    href={`mailto:${RESUME_DATA.contact.email}`} 
                    className="flex items-center gap-4 group p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                      <p className="font-medium text-lg">{RESUME_DATA.contact.email}</p>
                    </div>
                  </a>

                  <a 
                    href={`https://${RESUME_DATA.contact.linkedin}`} 
                    target="_blank"
                    className="flex items-center gap-4 group p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">LinkedIn</p>
                      <p className="font-medium text-lg">ananya-pande</p>
                    </div>
                  </a>

                  <a 
                    href="/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-4 group p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Resume</p>
                      <p className="font-medium text-lg">Download PDF</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-muted p-8 rounded-2xl">
                <h3 className="font-headline font-bold mb-4">Availability</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I typically respond within 24-48 hours. If it's urgent, please reach out via LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="py-12 border-t border-border mt-24">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">© {new Date().getFullYear()} {RESUME_DATA.name}</p>
        </div>
      </footer>
    </div>
  );
}