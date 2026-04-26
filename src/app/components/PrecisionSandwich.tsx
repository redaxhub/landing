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
          No floating point. No silent loss. Conservation of value, provably.
        </h2>

        <div className="mb-12 max-w-3xl space-y-6">
          <p className="text-lg text-muted-foreground">
            Solana programs operate on integers. Every token amount is a raw integer scaled by the token's decimals field. When tokens with different decimals merge, naive division produces truncation loss — fractions of value disappearing on every conversion. Across thousands of conversions, the loss can be substantial.
          </p>

          <p className="text-lg text-muted-foreground">
            We solve this with a four-stage pipeline: normalize, scale, fee, denormalize. All intermediate calculations use u128. Rounding direction is explicit: floor when the user receives, ceil when the protocol receives. Any sub-unit residue is captured in a per-campaign dust accumulator.
          </p>
        </div>

        <div className="mb-6 overflow-hidden rounded-lg border-2 border-transparent bg-card/50 p-8 [background-clip:padding-box,border-box] [background-image:linear-gradient(#111827,#111827),linear-gradient(135deg,#A855F7_0%,#3B82F6_33%,#06B6D4_66%,#10B981_100%)] [background-origin:border-box]">
          <pre className="overflow-x-auto text-center">
            <code className="font-mono text-lg text-foreground">
              sum(legacy_tokens × rate) = sum(user_output + protocol_fee) + dust_residue
            </code>
          </pre>
        </div>

        <p className="max-w-3xl text-sm text-muted-foreground">
          For any conversion, this invariant holds. No value is created or destroyed by the math. Every fraction is accounted for somewhere. The patterns follow Uniswap V3's FullMath, OpenZeppelin's Math.mulDiv, and the ERC-4626 rounding specification.
        </p>
      </div>
    </section>
  );
}
