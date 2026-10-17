import { ArrowRight } from "lucide-react";

export function LitepaperCTA() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 py-24">
      <div className="absolute inset-0 bg-brand-gradient opacity-5" />
      <div className="pointer-events-none absolute right-2 top-2 hidden opacity-20 md:block">
        <img
          src="/brand/redaxhub-logo-transparent.png"
          alt=""
          className="h-14 w-auto"
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
          The full picture is in the Litepaper.
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
          How campaigns work, the conversion math, the fee model, trust boundaries and what Phase 1 does not do. The technical specification is public on GitHub. We publish openly because we want feedback.
        </p>

        <a
          href="https://docs.redaxhub.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-gradient px-12 py-4 text-lg font-medium text-background transition-opacity hover:opacity-90"
        >
          Read the Litepaper
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
