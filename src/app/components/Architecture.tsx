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

              <line x1="150" y1="80" x2="150" y2="120" stroke="#3B82F6" strokeWidth="2" />

              <rect x="50" y="120" width="200" height="60" rx="8" fill="#1F2937" stroke="url(#archGradient)" strokeWidth="2" />
              <text x="150" y="155" textAnchor="middle" fill="#F3F4F6" fontSize="14" fontWeight="600">
                Campaign
              </text>

              <line x1="80" y1="180" x2="80" y2="220" stroke="#3B82F6" strokeWidth="2" />

              <rect x="10" y="220" width="140" height="60" rx="8" fill="#1F2937" stroke="url(#archGradient)" strokeWidth="2" />
              <text x="80" y="255" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="500">
                TokenConfig
              </text>

              <line x1="225" y1="180" x2="225" y2="220" stroke="#6B7280" strokeWidth="2" strokeDasharray="4 4" />

              <rect x="160" y="220" width="130" height="60" rx="8" fill="#1F2937" stroke="#6B7280" strokeWidth="2" strokeDasharray="6 4" />
              <text x="225" y="247" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="500">
                Output mint
              </text>
              <text x="225" y="264" textAnchor="middle" fill="#9CA3AF" fontSize="10">
                Mint account
              </text>

              <line x1="225" y1="280" x2="225" y2="300" stroke="#6B7280" strokeWidth="2" strokeDasharray="4 4" />

              <rect x="160" y="300" width="130" height="60" rx="8" fill="#1F2937" stroke="#6B7280" strokeWidth="2" strokeDasharray="6 4" />
              <text x="225" y="327" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="500">
                Protocol fee vault
              </text>
              <text x="225" y="344" textAnchor="middle" fill="#9CA3AF" fontSize="10">
                Token account
              </text>

              <text x="150" y="388" textAnchor="middle" fill="#9CA3AF" fontSize="10">
                Solid: REDAX state · Dashed: SPL accounts
              </text>
            </svg>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg text-muted-foreground">
              REDAX has three program-owned state account types: ProtocolConfig, Campaign and TokenConfig. Each campaign accepts up to ten legacy tokens, each with its own TokenConfig. The output mint is a classic SPL mint account, and the protocol fee vault is a classic SPL associated token account. Both are prepared before init_campaign; the program validates them rather than creating them.
            </p>

            <p className="text-lg text-muted-foreground">
              Each campaign has its own state and accepted-token configurations, readable from its on-chain accounts. Campaigns share protocol configuration; the curated directory and hosted metadata files are separate from that on-chain state.
            </p>

            <p className="text-lg text-muted-foreground">
              A single conversion executes atomically. Before any token moves, the program enforces the campaign's active status and any configured deadline and caps, and computes the output with checked u128 math: it normalizes the legacy amount's decimals, applies that token's fixed rate and rounds the gross output down, then takes REDAX's 1% fee from that gross output, also rounded down. It then burns the holder's legacy tokens, mints the holder's share to their output token account, mints any non-zero fee into the protocol fee vault and emits one event. The Campaign PDA is the output mint's mint authority; the fee vault's token authority is REDAX's protocol fee authority, not the campaign. A project's own treasury is off-protocol: the program has no field for it and no authority over it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
