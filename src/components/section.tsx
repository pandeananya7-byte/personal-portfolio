
"use client";

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">{children}</div>
    </section>
  );
}

export function AnimatedSection({ id, className, children }: SectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn('py-16 md:py-24', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">{children}</div>
    </motion.section>
  );
};


type SectionHeadingProps = {
  icon?: React.ElementType;
  children: ReactNode;
};

export function SectionHeading({ icon: Icon, children }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-center gap-4">
      {Icon && <Icon className="h-8 w-8 text-accent" />}
      <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {children}
      </h2>
    </div>
  );
}

    