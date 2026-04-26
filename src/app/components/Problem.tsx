import { Lock, Users, Layers, TrendingDown } from "lucide-react";
import { Card } from "./ui/card";

export function Problem() {
  const problems = [
    {
      icon: Users,
      title: "Trapped users",
      description: "Holders sit on positions they cannot exit.",
    },
    {
      icon: Lock,
      title: "Locked liquidity",
      description: "SOL stranded inside dead pools, unreachable in practice.",
    },
    {
      icon: Layers,
      title: "Scattered communities",
      description: "Good projects with bad timing, no path to relaunch.",
    },
    {
      icon: TrendingDown,
      title: "Capital cannot reform",
      description: "Healthy v2 launches blocked by migration cost.",
    },
  ];

  return (
    <section className="border-b border-border/40 py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 inline-block">
          <span className="text-sm font-medium text-brand-gradient">
            The dead-token graveyard
          </span>
        </div>

        <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
          Solana has a structural problem that the launchpad era left behind.
        </h2>

        <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
          Since 2024, millions of tokens have been launched on Solana through permissionless launchpads. Only a small fraction graduate into open-market trading or sustained activity. The rest sit in user wallets and abandoned liquidity pools — illiquid, scattered, and locked.
        </p>

        <p className="mb-16 max-w-3xl text-lg text-muted-foreground">
          Each project that wants to migrate its community to a new token currently has to do the same things: write a custom Rust program, pay for a dedicated audit, build a custom interface, and coordinate the rollout. This can require significant engineering, audit, interface, and coordination work. Most teams cannot afford it. So the migration never happens.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="border-border/40 bg-card p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gradient">
                  <Icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="mb-2 font-semibold">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
