import { Infinity, Clock, Droplet, Palette } from "lucide-react";
import { Card } from "./ui/card";

export function TreasuryDiscipline() {
  const policies = [
    {
      icon: Infinity,
      title: "Hold Forever",
      description: "REDAX never sells. Zero sell pressure. Paper revenue only from this campaign.",
      isDefault: false,
    },
    {
      icon: Clock,
      title: "Vest and Controlled Execution",
      description: "90-day vesting cliff. Then gradual release through Solana liquidity infrastructure with MEV-aware broadcasting where supported.",
      isDefault: true,
    },
    {
      icon: Droplet,
      title: "Liquidity Injection",
      description: "Tokens paired with SOL, added as permanent liquidity to the new token's primary AMM pool. Sell pressure: zero.",
      isDefault: false,
    },
    {
      icon: Palette,
      title: "Mixed",
      description: "Linear combination. For example, 50% Hold, 30% Controlled, 20% LP.",
      isDefault: false,
    },
  ];

  return (
    <section className="border-b border-border/40 py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 inline-block">
          <span className="text-sm font-medium text-brand-gradient">
            Where the fees go
          </span>
        </div>

        <h2 className="mb-12 text-4xl font-bold sm:text-5xl">
          The campaign creator chooses how their token's fees are handled. We don't.
        </h2>

        <p className="mb-16 max-w-3xl text-lg text-muted-foreground">
          When the protocol takes a 1% fee on conversions, those tokens accumulate in the campaign treasury. Selling them on the open market would create sell pressure on the new token and harm the very project we just helped launch. So we don't decide. The campaign creator does, at the time the campaign opens. The choice is locked in and immutable.
        </p>

        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <Card
                key={index}
                className={`relative border p-6 ${
                  policy.isDefault
                    ? "border-transparent bg-card/50 [background-clip:padding-box,border-box] [background-image:linear-gradient(#111827,#111827),linear-gradient(135deg,#A855F7_0%,#3B82F6_33%,#06B6D4_66%,#10B981_100%)] [background-origin:border-box]"
                    : "border-border/40 bg-card"
                }`}
              >
                {policy.isDefault && (
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-brand-gradient px-3 py-1 text-xs font-medium text-background">
                      Default
                    </span>
                  </div>
                )}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gradient">
                  <Icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="mb-2 font-semibold">{policy.title}</h3>
                <p className="text-sm text-muted-foreground">{policy.description}</p>
              </Card>
            );
          })}
        </div>

        <p className="max-w-3xl text-sm text-muted-foreground">
          This policy-by-creator pattern is designed to reduce unnecessary sell pressure while giving campaign creators direct control over treasury handling decisions.
        </p>
      </div>
    </section>
  );
}
