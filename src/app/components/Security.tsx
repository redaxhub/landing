import { Shield, Target, Award, Trophy, Bug } from "lucide-react";

export function Security() {
  const tiers = [
    {
      icon: Shield,
      tier: "Tier 1",
      scope: "Internal hardening",
      status: "continuous",
      description: "checked_* arithmetic, Anchor account constraints, proptest, fuzz testing, verifiable build CI.",
    },
    {
      icon: Target,
      tier: "Tier 2",
      scope: "Competitive audit",
      status: "pre-mainnet",
      description: "Sherlock or Code4rena contest. Many auditors, parallel review.",
    },
    {
      icon: Award,
      tier: "Tier 3",
      scope: "Boutique audit",
      status: "mainnet readiness",
      description: "A focused review by a Solana-specialized firm.",
    },
    {
      icon: Trophy,
      tier: "Tier 4",
      scope: "Premier audit",
      status: "post-traction",
      description: "Full-scope audit by a top-tier firm, funded in stages as protocol traction grows.",
    },
    {
      icon: Bug,
      tier: "Bug Bounty",
      scope: "Continuous",
      status: "post-mainnet",
      description: "Sherlock Bug Bounty or Immunefi. Reward pool funded from protocol treasury.",
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
          Audited in tiers. Funded in stages. Public from day one.
        </h2>

        <p className="mb-16 max-w-3xl text-lg text-muted-foreground">
          We have studied the public audit reports of established Solana auditors operating on similar program archetypes. Several common findings — strict mint validation, rent-exempt calculations, token-program interface unification, slippage guards on DEX integration — were addressed at the architectural level before any code was written.
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
