import { Lock, Users, Layers, TrendingDown } from "lucide-react";
import { Card } from "./ui/card";

export function Problem() {
  const problems = [
    {
      icon: Users,
      title: "Stranded holders",
      description: "Holders of a retired token often have no clear path to the project's new one.",
    },
    {
      icon: Lock,
      title: "Risk at the worst moment",
      description: "Bespoke migration code adds security surface just as holder value moves.",
    },
    {
      icon: Layers,
      title: "Repeated work",
      description: "Custom migrations can repeat work on rates, caps and conversion logic.",
    },
    {
      icon: TrendingDown,
      title: "Migrations that stall",
      description: "When the cost is too high, communities stay split across old tokens.",
    },
  ];

  return (
    <section className="border-b border-border/40 py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 inline-block">
          <span className="text-sm font-medium text-brand-gradient">
            The migration problem
          </span>
        </div>

        <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
          Token migration should not require starting from scratch.
        </h2>

        <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
          A project that wants to move its holders to a new token has to answer the same questions every time: which old tokens are accepted and at what rate, how the new token is prepared, and how conversions run safely for a community that is watching closely.
        </p>

        <p className="mb-16 max-w-3xl text-lg text-muted-foreground">
          Doing that with one-off code adds engineering work, security surface and coordination overhead at exactly the moment holder value is moving. That cost is one reason migrations that should happen often do not.
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
