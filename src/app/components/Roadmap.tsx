import { Badge } from "./ui/badge";

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Single-project migration",
      date: "Current · Solana Devnet",
      description: "Burn-and-mint migration with an accrue-only 1% fee, running on Solana Devnet with a public Devnet app. Not audited and not on mainnet.",
      badge: null,
    },
    {
      phase: "Readiness",
      title: "Before any mainnet",
      date: "No date set",
      description: "An external security review and multisig custody for the protocol fee authority remain requirements before any mainnet deployment. Neither is complete.",
      badge: null,
    },
    {
      phase: "Later",
      title: "Future directions",
      date: "Not scheduled",
      description: "Token-2022 support, reuse of existing output mints, consent signals from legacy projects, migrations beyond a single project, and handling of accrued fees beyond accrual may be evaluated. None is implemented, scheduled or committed, and no order is implied.",
      badge: "non-binding",
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
          What exists today. What is not promised.
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
                    <Badge variant="outline" className="border-brand-gradient text-foreground">
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
