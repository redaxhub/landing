import { Shield, Target, Coins, Layers, ListChecks } from "lucide-react";

export function Security() {
  const tiers = [
    {
      icon: Shield,
      tier: "Checked math",
      scope: "Conversion path",
      status: "program",
      description: "All conversion math uses checked u128 integers. An overflow rejects the conversion, and a final amount too large for an SPL token amount is refused, never truncated.",
    },
    {
      icon: Target,
      tier: "Account validation",
      scope: "Every instruction",
      status: "program",
      description: "Instructions validate their required accounts and signing authorities. PDA derivations, account identities and token authorities are checked where applicable.",
    },
    {
      icon: Coins,
      tier: "Output mint",
      scope: "Campaign setup",
      status: "program",
      description: "The output mint must have the Campaign PDA as its mint authority and no freeze authority. Token-2022 accounts are rejected.",
    },
    {
      icon: Layers,
      tier: "Bounded surface",
      scope: "Ten instructions",
      status: "program",
      description: "No instruction moves accrued fees, changes a rate after it is set or edits metadata after creation. Nothing auto-finalizes.",
    },
    {
      icon: ListChecks,
      tier: "Explicit selection",
      scope: "Each conversion",
      status: "program and app",
      description: "The program converts one selected accepted token per conversion. The app also requires the holder to choose it explicitly, with no default or first-match fallback.",
    },
  ];

  return (
    <section className="border-b border-border/40 py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 inline-block">
          <span className="text-sm font-medium text-brand-gradient">
            Security
          </span>
        </div>

        <h2 className="mb-12 text-4xl font-bold sm:text-5xl">
          Not audited. Here is what the program enforces today.
        </h2>

        <p className="mb-16 max-w-3xl text-lg text-muted-foreground">
          REDAX has not been audited, and no audit engagement is established. An external security review remains a requirement before any mainnet deployment. The controls below describe what the program and app do; they are not an assurance level.
        </p>

        <div className="space-y-6">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className="flex gap-6 rounded-lg border border-border/40 bg-card/50 p-6 transition-colors hover:border-brand-gradient/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-gradient">
                  <Icon className="h-6 w-6 text-background" />
                </div>

                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-baseline gap-3">
                    <h3 className="font-semibold">{tier.tier}</h3>
                    <span className="text-sm text-brand-gradient">{tier.scope}</span>
                    <span className="text-xs text-muted-foreground">({tier.status})</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
