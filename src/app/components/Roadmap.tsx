import { Badge } from "./ui/badge";

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Burn-only MVP",
      date: "Q3 2026 target",
      description: "Devnet → Tier 2 audit → Tier 3 audit → guarded mainnet. The full conversion engine, in its safest form.",
      badge: null,
    },
    {
      phase: "Phase 2",
      title: "Hardening",
      date: "Q4 2026 target",
      description: "Verified tier, Token-2022 extension allowlist, timelocked rate updates, custom indexer, bug bounty program live.",
      badge: null,
    },
    {
      phase: "Phase 3",
      title: "Lock and Liquidity Recovery",
      date: "2027 target",
      description: "Lock mode introduces a vault for legacy tokens. Crank operations could route accumulated tokens through Solana DEX infrastructure to recover SOL from low-activity pools. Phase 3 raises legal questions we have not yet resolved. We are working with external counsel. If the legal risk is determined to be unmanageable, Phase 3 will be removed or substantially redesigned.",
      badge: "subject to legal clearance",
    },
  ];

  return (
    <section className="border-b border-border/40 py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 inline-block">
          <span className="text-sm font-medium text-brand-gradient">
            Roadmap
          </span>
        </div>

        <h2 className="mb-16 text-4xl font-bold sm:text-5xl">
          Three phases. Each gated. We delay anything that's not ready.
        </h2>

        <div className="relative space-y-12">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-[#A855F7] via-[#3B82F6] via-[#06B6D4] to-[#10B981] sm:left-12" />

          {phases.map((phase, index) => (
            <div key={index} className="relative flex gap-6 sm:gap-12">
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-xl font-bold text-background sm:h-20 sm:w-20 sm:text-2xl">
                {index + 1}
              </div>

              <div className="flex-1 pb-8">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                  {phase.badge && (
                    <Badge variant="outline" className="border-brand-gradient text-brand-gradient">
                      {phase.badge}
                    </Badge>
                  )}
                </div>
                <p className="mb-3 text-sm text-brand-gradient">{phase.date}</p>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
