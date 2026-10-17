export function PrecisionSandwich() {
  return (
    <section className="border-b border-border/40 py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 inline-block">
          <span className="text-sm font-medium text-brand-gradient">
            The math
          </span>
        </div>

        <h2 className="mb-16 text-4xl font-bold sm:text-5xl">
          No floating point. Explicit rounding. Recorded normalization remainders.
        </h2>

        <div className="mb-12 max-w-3xl space-y-6">
          <p className="text-lg text-muted-foreground">
            Solana programs operate on integers. Token amounts are raw integers scaled by their decimals. REDAX normalizes the selected legacy amount, applies that token's fixed rational rate and rounds the gross output down to whole output units. Any decimal-normalization remainder is recorded separately in legacy-token units.
          </p>

          <p className="text-lg text-muted-foreground">
            Each conversion normalizes decimals, applies the selected legacy token's immutable rate, then splits the gross output. The protocol fee is 1% of gross output, rounded down, and the holder receives the exact rest. Arithmetic uses checked u128 operations; overflow or a holder or fee amount that cannot fit u64 rejects the conversion.
          </p>
        </div>

        <div className="mb-6 overflow-hidden rounded-lg border-2 border-transparent bg-card/50 p-8 [background-clip:padding-box,border-box] [background-image:linear-gradient(#111827,#111827),linear-gradient(135deg,#A855F7_0%,#3B82F6_33%,#06B6D4_66%,#10B981_100%)] [background-origin:border-box]">
          <pre className="overflow-x-auto whitespace-pre-wrap text-center">
            <code className="font-mono text-lg text-foreground">
              user_out + fee_out = gross_out
            </code>
          </pre>
        </div>

        <p className="max-w-3xl text-sm text-muted-foreground">
          This holds for every conversion, with fee_out = floor(gross_out × 100 / 10000): the fee split creates or loses no output unit. When a legacy token has more decimals than the output token, the sub-unit leftover of the input is burned with the rest but cannot be converted. It is recorded on that token's configuration, in legacy-token units, and is never minted, transferred or redeemable.
        </p>
      </div>
    </section>
  );
}
