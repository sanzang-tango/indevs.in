"use client";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-foreground">
            Claim your spot today
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Join thousands of Indian developers building their identity, showcasing projects, and growing together.
          </p>
          <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg hover:shadow-primary/25">
            <a href="/login">Start for free</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
