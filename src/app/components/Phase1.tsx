import { Check, Circle } from "lucide-react";

export function Phase1() {
  const included = [
    "Ten on-chain instructions and three program-owned state account types",
    "Precision Sandwich arithmetic with u128 intermediates",
    "SingleProjectMigration only",
    "A fresh output mint per campaign, with the Campaign PDA as its only mint authority",
    "Token name, symbol and metadata URI set once via Metaplex, with no update path",
    "freeze_authority = None",
    "SPL Token output only",
    "Campaign lifecycle: create, configure, convert, pause, finalize",
    "Per-campaign pause and unpause; a protocol emergency authority can also pause",
    "A 1% protocol fee, rounded down and accrue-only",
    "Static frontend on Vercel, direct RPC reads",
    "Curated public campaign list; listing is not review or endorsement",
  ];

  const deferred = [
    "Token-2022 tokens",
    "Batch conversion",
    "Reusing an existing output mint",
    "Migrations across unrelated projects",
    "Changing a rate after it is set",
    "On-chain review, verification or endorsement of campaigns",
    "Any sale, swap, vesting or liquidity use of accrued fees",
    "Lock, vault or crank mechanisms",
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
          Phase 1: classic SPL token migration.
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
            <h3 className="mb-6 text-xl font-semibold text-muted-foreground">Not in Phase 1</h3>
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
