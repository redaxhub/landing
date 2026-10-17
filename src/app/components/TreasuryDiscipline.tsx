import { Coins, Clock, Droplet, KeyRound } from "lucide-react";
import { Card } from "./ui/card";

export function TreasuryDiscipline() {
  const policies = [
    {
      icon: Coins,
      title: "Accrue only",
      description: "The REDAX program has no instruction that withdraws, sells, swaps, vests or distributes accrued fees.",
    },
    {
      icon: Clock,
      title: "Nothing scheduled",
      description: "No sale, vesting, liquidity provision, disbursement or timing is committed for accrued fees.",
    },
    {
      icon: Droplet,
      title: "No liquidity routing",
      description: "Phase 1 adds no liquidity and routes nothing through DEXs or AMMs.",
    },
    {
      icon: KeyRound,
      title: "Custody today",
      description: "On Devnet, the protocol fee authority is a single operational authority. Multisig custody for production is a future requirement and is not in place.",
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
          In Phase 1, protocol fees only accrue.
        </h2>

        <p className="mb-16 max-w-3xl text-lg text-muted-foreground">
          Each conversion mints 1% of the gross output, rounded down, into REDAX's protocol fee vault for that campaign's token. The vault is held by REDAX's protocol fee authority, not by the campaign or the project, and it is not the project's treasury. A project's own treasury stays off-protocol: the REDAX program has no field for it and no authority over it.
        </p>

        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <Card
                key={index}
                className="relative border border-border/40 bg-card p-6"
              >
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
          Handling accrued fees beyond accrual may be evaluated in the future. Nothing about it is committed, and campaign creators do not choose a fee policy.
        </p>
      </div>
    </section>
  );
}
