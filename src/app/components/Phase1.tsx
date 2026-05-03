import { Check, Circle } from "lucide-react";

export function Phase1() {
  const included = [
    "Five PDA types and the full account hierarchy",
    "Precision Sandwich arithmetic with u128 intermediates",
    "SingleProjectMigration only",
    "ProgramCreatedOutputMint only",
    "MetaplexMetadataCPI only",
    "freeze_authority = None",
    "SPL Token output only",
    "Campaign lifecycle: create, configure, convert, pause, finalize",
    "Three-layer pause (global, campaign, token)",
    "Treasury policy with default Vest-and-Controlled-Execution",
    "Static frontend on Vercel, direct RPC reads",
    "Verifiable build pipeline",
  ];

  const deferred = [
    "Lock mode and crank-bot operations (Phase 3)",
    "Verified tier UI and registry (Phase 2)",
    "Rate update with timelock (Phase 2)",
    "Token-2022 output, Transfer Fee handling, and Hook allowlists (Phase 2)",
    "ExistingOutputMint and multi-project campaign types (Phase 2)",
    "Custom indexer beyond Helius webhooks (Phase 2)",
    "DAO governance (TBD)",
  ];

  return (
    <section className="border-b border-border/40 py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 inline-block">
          <span className="text-sm font-medium text-brand-gradient">
            Phase 1
          </span>
        </div>

        <h2 className="mb-16 text-4xl font-bold sm:text-5xl">
          Burn-only MVP. The simplest, safest, most auditable version of the protocol.
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-semibold text-brand-gradient">Included</h3>
            <div className="space-y-4">
              {included.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient">
                    <Check className="h-4 w-4 text-background" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-muted-foreground">Deferred</h3>
            <div className="space-y-4">
              {deferred.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-muted-foreground/40">
                    <Circle className="h-3 w-3 text-muted-foreground/40" />
                  </div>
                  <p className="text-muted-foreground/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
