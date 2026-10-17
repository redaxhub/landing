import { FileText, RefreshCw, Settings } from "lucide-react";

export function Solution() {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Create a campaign",
      description: "A project prepares a fresh output token, opens a campaign, adds accepted legacy tokens with fixed rates and optional caps, sets the metadata once and activates it. No protocol fee is currently charged to open a campaign.",
    },
    {
      number: "2",
      icon: RefreshCw,
      title: "Holders convert",
      description: "A single transaction. Old tokens are burned. New tokens are minted. Atomic, irreversible, on-chain.",
    },
    {
      number: "3",
      icon: Settings,
      title: "Fees accrue",
      description: "Each conversion mints 1% of the gross output, rounded down, into REDAX's protocol fee vault. The program has no instruction that sells, swaps, vests or distributes it.",
    },
  ];

  return (
    <section className="border-b border-border/40 py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 inline-block">
          <span className="text-sm font-medium text-brand-gradient">
            What REDAX does
          </span>
        </div>

        <h2 className="mb-16 text-4xl font-bold sm:text-5xl">
          Build the migration infrastructure once, so each project doesn't have to write its own.
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient text-3xl font-bold text-background">
                    {step.number}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/40">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg border border-border/40 bg-card/50 p-6">
          <p className="text-center text-sm text-muted-foreground">
            Campaign rules and state live on-chain and can be read directly from Solana. The Devnet app is a static web frontend, and only an approved team wallet can create campaigns in it. Token metadata files are hosted off-chain: their address is fixed on-chain, but Solana does not guarantee their content or availability.
          </p>
        </div>
      </div>
    </section>
  );
}
