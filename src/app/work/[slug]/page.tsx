import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Section, AnimatedSection } from '@/components/section';
import { Button } from '@/components/ui/button';
import { RESUME_DATA } from '@/lib/data';
import { ArrowLeft, ArrowRight, CheckCircle2, Building, Calendar, MapPin, TrendingUp, Layers } from 'lucide-react';

interface WorkDetail {
  id: string;
  company: string;
  role: string;
  date: string;
  location: string;
  title: string;
  category: string;
  overview: string;
  problem: string;
  approach: string[];
  results: string[];
  metrics: { label: string; value: string }[];
}

const WORK_DETAILS: Record<string, WorkDetail> = {
  bharatx: {
    id: 'bharatx',
    company: 'BharatX',
    role: 'Merchant Success Lead',
    date: 'Apr 2023 - Jan 2024',
    location: 'Bangalore, IN',
    title: 'Scaling merchant lending through growth, partnerships and operations',
    category: 'Fintech Growth & Ops',
    overview: 'BharatX is an embedded credit infrastructure startup providing zero-friction consumer credit via merchant integrations. As Merchant Success Lead, I managed the entire merchant lifecycle—from integration and merchant acquisition to payment activation and portfolio operations.',
    problem: 'The startup needed to accelerate disbursals while tackling friction in merchant tech integration, high drop-off during onboarding, and maintaining tight risk parameters with minimal churn.',
    approach: [
      'Redesigned the end-to-end merchant activation lifecycle, streamlining technical SDK handoffs and slashing integration turnaround time from 1.5 days down to 30 minutes.',
      'Designed and executed Payment Gateway (PG) activation campaigns and checkout placement optimization that lifted checkout conversion by 89%.',
      'Instituted automated reconciliation, dispute resolution workflows, and high-touch merchant relationship management.',
      'Collaborated closely with risk and product engineering teams to refine credit underwriting parameters without adding user drop-off.'
    ],
    results: [
      'Scaled annual lending disbursal 100x to reach ₹100Cr+ run-rate.',
      'Expanded active merchant base 3x with an annual merchant churn rate under 1%.',
      'Shortened onboarding cycle by over 95%, enabling same-day merchant go-live.',
      'Built sustainable GTM playbooks replicated across enterprise retail partners.'
    ],
    metrics: [
      { label: 'Disbursal Scale', value: '100x' },
      { label: 'Annual Run-Rate', value: '₹100Cr+' },
      { label: 'Merchant Churn', value: '< 1%' },
      { label: 'Activation Speed', value: '30 mins' },
    ]
  },
  'super-money': {
    id: 'super-money',
    company: 'Super.money',
    role: 'Business & Growth',
    date: 'Mar 2024 - Present',
    location: 'Bangalore, IN',
    title: 'Taking lending products from launch to scale',
    category: 'Product Scaling & Ops',
    overview: 'Super.money (Flipkart Group) is a financial services app delivering high-velocity credit and digital banking experiences on UPI. Following the strategic transaction with BharatX, I joined the business and growth team to spearhead lending GTM and credit operations.',
    problem: 'Launching flagship credit products inside the Flipkart ecosystem required rigorous multi-partner technical integration (NBFCs & payment gateways), airtight collections workflows, and scalable consumer adoption mechanisms.',
    approach: [
      'Led the comprehensive BharatX technology stack migration and co-managed the Smartcoin NBFC partner integration.',
      'Drove the product launch and go-to-market rollout of superPay in 3 across Flipkart checkout surfaces.',
      'Spearheaded the zero-to-one launch of superPaylater, driving merchant alignment, marketing experimentation, and user funnel optimization.',
      'Engineered operational standard operating procedures (SOPs) for dispute management, customer experience, and Day-0 collections.'
    ],
    results: [
      'Achieved peak monthly GMV exceeding ₹25Cr for superPay in 3 on Flipkart.',
      'Generated ₹49.5L GMV in the inaugural month of the superPaylater rollout.',
      'Achieved 70% DPD0 (Days Past Due 0) debt recovery through proactive operations and behavioral nudge strategies.',
      'Established durable cross-functional operational infrastructure bridging product, compliance, and lending partners.'
    ],
    metrics: [
      { label: 'Peak Monthly GMV', value: '₹25Cr+' },
      { label: 'First Month GMV', value: '₹49.5L' },
      { label: 'DPD0 Recovery Rate', value: '70%' },
      { label: 'Ecosystem Scale', value: 'Flipkart' },
    ]
  },
  bitespeed: {
    id: 'bitespeed',
    company: 'Bitespeed',
    role: 'Founders Office - Partnerships',
    date: 'Dec 2024 - Mar 2025',
    location: 'Bangalore, IN',
    title: 'Building a repeatable partnership-led growth engine',
    category: 'SaaS Partnerships',
    overview: 'Bitespeed powers omnichannel marketing (WhatsApp & SMS automation) for leading global D2C and Shopify brands. In the Founders Office, I established the global agency and ecosystem partner program from the ground up.',
    problem: 'Customer acquisition through direct outbound was becoming saturated; the business required a scalable, referral-driven distribution channel through trusted digital agencies and complementary SaaS tools.',
    approach: [
      'Formulated partner tiers, value propositions, commission structures, and educational assets tailored to Shopify development and marketing agencies.',
      'Identified, prospected, and closed 40+ agency partners across India, Southeast Asia, and North America in under 60 days.',
      'Negotiated strategic product integrations and joint co-marketing initiatives with leading e-commerce tech stacks.',
      'Conducted live partner webinars, co-branded masterclasses, and community meetups to amplify brand presence.'
    ],
    results: [
      'Generated $76,000 in Annual Recurring Revenue (ARR) within 2 months through agency partnerships.',
      'Closed strategic tech integrations that added $150,000 in high-margin pipeline ARR.',
      'Formed an active network of 40+ agency partners continuously referring enterprise Shopify brands.',
      'Created repeatable partner onboarding and attribution playbooks that scaled the commercial team.'
    ],
    metrics: [
      { label: 'Agency ARR (2 mos)', value: '$76K' },
      { label: 'Tech Partner Pipeline', value: '$150K' },
      { label: 'Agencies Onboarded', value: '40+' },
      { label: 'Cycle Time', value: '60 Days' },
    ]
  },
  hydradb: {
    id: 'hydradb',
    company: 'HydraDB',
    role: 'Growth & Developer Ecosystem',
    date: '2023',
    location: 'Bangalore, IN',
    title: 'Building early-stage GTM and developer community initiatives',
    category: 'Developer GTM',
    overview: 'HydraDB is an open-source columnar data warehouse and analytics engine for PostgreSQL, enabling analytical SQL queries directly on production databases.',
    problem: 'Open-source infrastructure tools require deep developer trust, reproducible benchmarks, and organic technical community advocacy before enterprise commercialization can succeed.',
    approach: [
      'Executed go-to-market experimentation and market validation for early-stage positioning.',
      'Built developer onboarding materials, quickstart templates, and technical content.',
      'Engaged data engineering communities on GitHub and developer forums to gather direct UX feedback.',
      'Iterated on developer adoption funnels to bridge open-source repository stargazers into active cloud database users.'
    ],
    results: [
      'Accelerated developer discovery and validated key target use cases for columnar analytics.',
      'Streamlined early user feedback loops directly into the core engineering roadmap.',
      'Established early developer evangelism playbooks for open-source Postgres ecosystems.'
    ],
    metrics: [
      { label: 'Focus', value: 'Developer GTM' },
      { label: 'Ecosystem', value: 'PostgreSQL' },
      { label: 'Stage', value: 'Zero-to-One' },
    ]
  }
};

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = WORK_DETAILS[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32">
        <Section className="pb-8">
          <div className="max-w-4xl">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary mb-4">
              <span>{project.category}</span>
              <span>&middot;</span>
              <span>{project.company}</span>
            </div>

            <h1 className="font-headline text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-y border-border py-4 my-6">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-primary" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{project.location}</span>
              </div>
            </div>

            <p className="text-xl text-foreground/90 leading-relaxed font-medium mt-4">
              {project.overview}
            </p>
          </div>
        </Section>

        {/* Metrics Grid */}
        <AnimatedSection className="bg-card py-12 border-y border-border my-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-background border border-border">
                  <div className="text-3xl font-bold text-primary tracking-tight">{m.value}</div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Challenge & Approach */}
        <AnimatedSection className="py-12">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-3">
                <Layers className="h-4 w-4" /> The Challenge
              </div>
              <h2 className="font-headline text-2xl font-bold mb-4">Context & Core Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-3">
                <TrendingUp className="h-4 w-4" /> Strategy & Execution
              </div>
              <h2 className="font-headline text-2xl font-bold mb-6">How I Approached It</h2>
              <div className="space-y-4">
                {project.approach.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                    <div className="h-7 w-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-headline text-2xl font-bold mb-6">Key Results & Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm font-medium leading-relaxed">{res}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <Section className="py-16 text-center border-t border-border mt-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-headline text-2xl font-bold">Interested in collaborating or discussing this work?</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing growth challenges, GTM strategy, or early-stage venture building.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Button asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/work">View Other Projects</Link>
              </Button>
            </div>
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
