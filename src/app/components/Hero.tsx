import { ArrowRight, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gradient-via-1)_0%,_transparent_50%)] opacity-20" />

      <div className="container relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-block">
              <span className="rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-medium text-background">
                Solana-native infrastructure
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-brand-gradient">Merger-as-a-Service</span>
              <br />
              <span className="text-foreground">for Solana</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              A campaign-based factory for token consolidation and asset migration. Projects open campaigns, holders convert old tokens into new ones, all in a single audit-ready program with precise math and atomic execution.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://redax-hub.gitbook.io/redax-hub-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-gradient px-8 py-3 font-medium text-background transition-opacity hover:opacity-90"
              >
                Read the Litepaper
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/redaxhub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3 font-medium transition-colors hover:bg-accent"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              No token. No fundraising round. Building the protocol first.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-md">
              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                <img
                  src="/brand/redaxhub-logo-transparent.png"
                  alt="REDAX Hub logo"
                  className="h-14 w-auto opacity-75 drop-shadow-[0_0_12px_rgba(59,130,246,0.35)]"
                />
              </div>
              <svg viewBox="0 0 400 400" className="h-full w-full">
                <defs>
                  <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="33%" stopColor="#3B82F6" />
                    <stop offset="66%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>

                <circle cx="100" cy="120" r="40" fill="url(#brandGradient)" opacity="0.6">
                  <animate attributeName="cx" values="100;200;100" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="120;200;120" dur="8s" repeatCount="indefinite" />
                </circle>

                <circle cx="300" cy="120" r="35" fill="url(#brandGradient)" opacity="0.5">
                  <animate attributeName="cx" values="300;200;300" dur="7s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="120;200;120" dur="7s" repeatCount="indefinite" />
                </circle>

                <circle cx="100" cy="280" r="30" fill="url(#brandGradient)" opacity="0.4">
                  <animate attributeName="cx" values="100;200;100" dur="9s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="280;200;280" dur="9s" repeatCount="indefinite" />
                </circle>

                <circle cx="300" cy="280" r="38" fill="url(#brandGradient)" opacity="0.55">
                  <animate attributeName="cx" values="300;200;300" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="280;200;280" dur="6s" repeatCount="indefinite" />
                </circle>

                <circle cx="200" cy="200" r="60" fill="url(#brandGradient)" opacity="0.8" />

                <path
                  d="M 100 120 Q 150 160 200 200"
                  stroke="url(#brandGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                >
                  <animate attributeName="d" values="M 100 120 Q 150 160 200 200;M 100 120 Q 100 200 200 200;M 100 120 Q 150 160 200 200" dur="8s" repeatCount="indefinite" />
                </path>

                <path
                  d="M 300 120 Q 250 160 200 200"
                  stroke="url(#brandGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                >
                  <animate attributeName="d" values="M 300 120 Q 250 160 200 200;M 300 120 Q 300 200 200 200;M 300 120 Q 250 160 200 200" dur="7s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
