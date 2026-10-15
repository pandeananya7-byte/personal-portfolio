import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Section, AnimatedSection } from '@/components/section';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from '@/lib/data';
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen } from 'lucide-react';

interface ArticleDetail {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string[];
}

const ARTICLES_DATA: Record<string, ArticleDetail> = {
  'future-of-credit': {
    slug: 'future-of-credit',
    title: 'The Future of Credit in India',
    category: 'Work & Business',
    date: 'Oct 2024',
    readingTime: '6 min',
    excerpt: 'An analysis of how UPI, account aggregators, and digital lending infrastructure are reshaping consumer behavior and institutional access.',
    content: [
      'Credit in India has historically been constrained not by demand, but by verifiable documentation. For decades, traditional banking rails evaluated creditworthiness using formal payroll records, income tax returns, and collateral—mechanisms that excluded hundreds of millions of freelancers, gig workers, small merchants, and Tier-2/Tier-3 consumers.',
      'The past five years have catalyzed a tectonic shift. With UPI scaling beyond 14 billion monthly transactions and the rapid rollout of Credit on UPI, credit is decoupling from physical plastic cards and becoming an ambient utility integrated into the checkout flow itself.',
      'Embedded finance changes the psychology of borrowing. When credit is contextualized—offered precisely at the moment of intent—conversion barriers evaporate. However, frictionless distribution without disciplined underwriting introduces compounding default risks.',
      'The winning platforms in the coming decade will not just be those with superior marketing funnels, but those that master three pillars: real-time behavioral data ingestion via Account Aggregators, agile collections operations that prioritize early borrower contact (DPD0/DPD1), and alignment with evolving RBI guidelines on digital lending and synthetic credit guarantees.',
      'As financial services continue to move from standalone banking apps into day-to-day transaction surfaces, the boundary between commerce, payments, and credit will dissolve entirely.'
    ]
  },
  'on-ambiguity': {
    slug: 'on-ambiguity',
    title: 'On Ambiguity and Startups',
    category: 'Essays & Opinion',
    date: 'Aug 2024',
    readingTime: '4 min',
    excerpt: 'Reflections on navigating early-stage chaos, avoiding paralysis through action, and finding structure where none exists.',
    content: [
      'Every early-stage venture begins in fog. Unlike established corporations where problems arrive packaged with historical benchmarks, standard operating procedures, and clear ownership, startup challenges are almost entirely underspecified.',
      'When you are tasked with building a partnership motion from scratch or taking an unproven fintech product to market, the first instinct is often to seek blueprints. But blueprints only describe problems that have already been solved by someone else under different constraints.',
      'Navigating ambiguity requires two seemingly contradictory muscles: high intellectual humility and aggressive bias toward action. Humility allows you to discard pet hypotheses the moment customer data disagrees. Action prevents analysis paralysis—because in the zero-to-one phase, learning velocity is directly proportional to how fast you test hypotheses in the wild.',
      'Structure is not something you wait for; it is an artifact of disciplined iteration. By breaking down nebulous goals into daily measurable experiments, ambiguity transforms from a source of anxiety into the greatest unfair advantage an operator can have.'
    ]
  }
};

export default async function WritingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES_DATA[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32">
        <Section className="pb-8">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/writing" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all essays
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary mb-4">
              <span className="flex items-center gap-1.5"><Tag className="h-3.5 w-3.5" /> {article.category}</span>
              <span>&middot;</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {article.date}</span>
              <span>&middot;</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {article.readingTime}</span>
            </div>

            <h1 className="font-headline text-3xl md:text-5xl font-bold mb-8 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4 py-1 mb-10">
              {article.excerpt}
            </p>
          </div>
        </Section>

        {/* Content Body */}
        <AnimatedSection className="py-8">
          <div className="max-w-3xl mx-auto px-6 space-y-8">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-foreground/90 leading-relaxed font-normal">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>

        {/* Author Bio Footer */}
        <Section className="py-16 mt-12 border-t border-border">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 bg-card p-8 rounded-2xl border border-border">
            <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl flex-shrink-0">
              AP
            </div>
            <div className="space-y-2 text-center sm:text-left flex-grow">
              <h3 className="font-headline font-bold text-lg">{RESUME_DATA.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {RESUME_DATA.title}. Writes about fintech, growth operations, and institutions.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/writing">More Essays</Link>
            </Button>
          </div>
        </Section>
      </main>

      <footer className="py-12 border-t border-border bg-card">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} {RESUME_DATA.name}
          </p>
        </div>
      </footer>
    </div>
  );
}
