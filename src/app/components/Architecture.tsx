export function Architecture() {
  return (
    <section className="border-b border-border/40 py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 inline-block">
          <span className="text-sm font-medium text-brand-gradient">
            Architecture
          </span>
        </div>

        <h2 className="mb-16 text-4xl font-bold sm:text-5xl">
          A hierarchy of program-derived addresses. Deterministic, isolated, inspectable.
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 300 400" className="h-full w-full max-w-md">
              <defs>
                <linearGradient id="archGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="33%" stopColor="#3B82F6" />
                  <stop offset="66%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>

              <rect x="75" y="20" width="150" height="60" rx="8" fill="#1F2937" stroke="url(#archGradient)" strokeWidth="2" />
              <text x="150" y="55" textAnchor="middle" fill="#F3F4F6" fontSize="14" fontWeight="600">
                ProtocolConfig
              </text>

              <line x1="150" y1="80" x2="150" y2="120" stroke="url(#archGradient)" strokeWidth="2" />

              <rect x="50" y="120" width="200" height="60" rx="8" fill="#1F2937" stroke="url(#archGradient)" strokeWidth="2" />
              <text x="150" y="155" textAnchor="middle" fill="#F3F4F6" fontSize="14" fontWeight="600">
                Campaign
              </text>

              <line x1="80" y1="180" x2="80" y2="220" stroke="url(#archGradient)" strokeWidth="2" />
              <line x1="150" y1="180" x2="150" y2="220" stroke="url(#archGradient)" strokeWidth="2" />
              <line x1="220" y1="180" x2="220" y2="220" stroke="url(#archGradient)" strokeWidth="2" />

              <rect x="10" y="220" width="140" height="60" rx="8" fill="#1F2937" stroke="url(#archGradient)" strokeWidth="2" />
              <text x="80" y="255" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="500">
                TokenConfig
              </text>

              <rect x="10" y="300" width="140" height="60" rx="8" fill="#1F2937" stroke="url(#archGradient)" strokeWidth="2" />
              <text x="80" y="335" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="500">
                CampaignTreasury
              </text>

              <rect x="160" y="260" width="130" height="60" rx="8" fill="#1F2937" stroke="url(#archGradient)" strokeWidth="2" />
              <text x="225" y="295" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="500">
                DustAccumulator
              </text>
            </svg>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg text-muted-foreground">
              Every account is a program-derived address (PDA). Every PDA is computed deterministically from its seeds. There is no admin-managed registry, no hidden state, no off-chain authority.
            </p>

            <p className="text-lg text-muted-foreground">
              Multiple campaigns run in parallel without interference. Each campaign is its own isolated state tree. The full system state is reproducible from the program ID alone.
            </p>

            <p className="text-lg text-muted-foreground">
              A single conversion executes atomically: the program verifies the campaign is active, receives the legacy token, computes the conversion using u128 precision math, mints the net output to the holder, sends the fee to the campaign treasury, and emits an event. One transaction. One outcome. Irreversible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
