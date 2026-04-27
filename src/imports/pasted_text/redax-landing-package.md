GPT'nin planı doğru. Opus kullanımını verimli yere harcamalıyız. Landing paketi yüksek değer üretiyor — hem tasarım yönü (Figma Make), hem implementasyon (Codex), hem SEO. Bunu tek paket halinde veriyorum.

GPT'nin verdiği prompt iyi ama benim ekleyeceğim 2 kritik nokta var: **(1)** Phase 3 framing'inde "future optional module" dili çok soft, mekanizmayı kaldırıyor — Litepaper'da güçlendirdiğimiz "subject to legal clearance" çizgisini koruyacağım. **(2)** Hero'da "Merger-as-a-Service" terimini öne çıkaracağız çünkü kategori yaratıyoruz; arama motorları ve teknik değerlendiriciler bu terimi görsün diye.

---

# REDAX HUB — LANDING PAGE PACKAGE

## 1. LANDING PAGE COPY

Section-by-section, copy-ready, edit-friendly.

---

### Hero Section

**Eyebrow tag (small, above headline):**
```
Solana-native infrastructure
```

**Headline (H1, large):**
```
Merger-as-a-Service for Solana
```

**Subheadline (paragraph, lighter weight):**
```
A campaign-based factory for token consolidation and asset migration. Projects open campaigns, holders convert old tokens into new ones, all in a single audit-ready program with precise math and atomic execution.
```

**Primary CTA button:**
```
Read the Litepaper
```
(links to `https://docs.redaxhub.com/`)

**Secondary CTA button (ghost/outline):**
```
View on GitHub
```
(links to `https://github.com/redaxhub`)

**Below the CTAs, small text:**
```
No token. Building the protocol first.
```

---

### Problem Section

**Section eyebrow:**
```
The dead-token graveyard
```

**Section headline:**
```
Solana has a structural problem that the launchpad era left behind.
```

**Body paragraph (one block):**
```
Since 2024, millions of tokens have been launched on Solana through permissionless launchpads. Only a small fraction graduate into open-market trading or sustained activity. The rest sit in user wallets and abandoned liquidity pools — illiquid, scattered, and locked.

Each project that wants to migrate its community to a new token currently has to do the same things: write a custom Rust program, pay for a dedicated audit, build a custom interface, and coordinate the rollout. This can require significant engineering, audit, interface, and coordination work. Most teams cannot afford it. So the migration never happens.
```

**Four-card row below the paragraph (each card is small, with icon + 2-line text):**

Card 1:
```
Trapped users
Holders sit on positions they cannot exit.
```

Card 2:
```
Locked liquidity
SOL stranded inside dead pools, unreachable in practice.
```

Card 3:
```
Scattered communities
Good projects with bad timing, no path to relaunch.
```

Card 4:
```
Capital cannot reform
Healthy v2 launches blocked by migration cost.
```

---

### Solution Section

**Section eyebrow:**
```
What REDAX does
```

**Section headline:**
```
Build the migration factory once. Audit it once. Let any project use it.
```

**Three-step visual (horizontal row, numbered):**

Step 1:
```
Create a campaign
A project pays 0.5 SOL, defines accepted tokens, conversion rates, and caps.
```

Step 2:
```
Holders convert
A single transaction. Old tokens are burned. New tokens are minted. Atomic, irreversible, on-chain.
```

Step 3:
```
Treasury follows policy
The campaign creator chooses how accumulated fees are handled. Locked in advance.
```

**Below the three steps, small text:**
```
Fully on-chain. No off-chain database. No centralized backend. The campaign's state, parameters, and history are all readable directly from Solana RPC.
```

---

### How REDAX Works (Architecture) Section

**Section eyebrow:**
```
Architecture
```

**Section headline:**
```
A hierarchy of program-derived addresses. Deterministic, isolated, inspectable.
```

**Two-column layout. Left column = diagram placeholder. Right column = text.**

**Diagram placeholder (left column):**
A clean architectural diagram showing:
```
ProtocolConfig (singleton)
    │
    └── Campaign (one per migration)
            ├── TokenConfig
            ├── CampaignTreasury
            └── DustAccumulator
```
With small labels. Same colors as the gradient (purple → cyan).

**Right column text:**
```
Every account is a program-derived address (PDA). Every PDA is computed deterministically from its seeds. There is no admin-managed registry, no hidden state, no off-chain authority.

Multiple campaigns run in parallel without interference. Each campaign is its own isolated state tree. The full system state is reproducible from the program ID alone.

A single conversion executes atomically: the program verifies the campaign is active, receives the legacy token, computes the conversion using u128 precision math, mints the net output to the holder, sends the fee to the campaign treasury, and emits an event. One transaction. One outcome. Irreversible.
```

---

### Burn-only MVP Section

**Section eyebrow:**
```
Phase 1
```

**Section headline:**
```
Burn-only MVP. The simplest, safest, most auditable version of the protocol.
```

**Two-column. Left = "Included" list, right = "Deferred" list.**

**Included (left column header in green/cyan accent):**
```
✓ Five PDA types and the full account hierarchy
✓ Precision Sandwich arithmetic with u128 intermediates
✓ SPL and Token-2022 support, with Transfer Fee handling and Hook allowlist
✓ Campaign lifecycle: create, configure, convert, pause, finalize
✓ Three-layer pause (global, campaign, token)
✓ Treasury policy with default Vest-and-Controlled-Execution
✓ Static frontend on Vercel, direct RPC reads
✓ Verifiable build pipeline
```

**Deferred (right column header in muted accent):**
```
○ Lock mode and crank-bot operations (Phase 3)
○ Verified tier UI and registry (Phase 2)
○ Rate update with timelock (Phase 2)
○ Custom output mint extensions (Phase 2)
○ Custom indexer beyond Helius webhooks (Phase 2)
○ DAO governance (TBD)
```

---

### Precision Sandwich Section

**Section eyebrow:**
```
The math
```

**Section headline:**
```
No floating point. No silent loss. Conservation of value, provably.
```

**Body paragraph:**
```
Solana programs operate on integers. Every token amount is a raw integer scaled by the token's decimals field. When tokens with different decimals merge, naive division produces truncation loss — fractions of value disappearing on every conversion. Across thousands of conversions, the loss can be substantial.

We solve this with a four-stage pipeline: normalize, scale, fee, denormalize. All intermediate calculations use u128. Rounding direction is explicit: floor when the user receives, ceil when the protocol receives. Any sub-unit residue is captured in a per-campaign dust accumulator.
```

**Highlighted invariant block (in monospace, with subtle gradient border):**
```
sum(legacy_tokens × rate) = sum(user_output + protocol_fee) + dust_residue
```

**Caption below the invariant:**
```
For any conversion, this invariant holds. No value is created or destroyed by the math. Every fraction is accounted for somewhere. The patterns follow Uniswap V3's FullMath, OpenZeppelin's Math.mulDiv, and the ERC-4626 rounding specification.
```

---

### Treasury Discipline Section

**Section eyebrow:**
```
Where the fees go
```

**Section headline:**
```
The campaign creator chooses how their token's fees are handled. We don't.
```

**Body intro paragraph:**
```
When the protocol takes a 1% fee on conversions, those tokens accumulate in the campaign treasury. Selling them on the open market would create sell pressure on the new token and harm the very project we just helped launch. So we don't decide. The campaign creator does, at the time the campaign opens. The choice is locked in and immutable.
```

**Four cards in a 2×2 grid:**

Card 1 — "Hold Forever"
```
REDAX never sells. Zero sell pressure. Paper revenue only from this campaign.
```

Card 2 — "Vest and Controlled Execution" (label as "Default")
```
90-day vesting cliff. Then gradual release through Solana liquidity infrastructure with MEV-aware broadcasting where supported.
```

Card 3 — "Liquidity Injection"
```
Tokens paired with SOL, added as permanent liquidity to the new token's primary AMM pool. Sell pressure: zero.
```

Card 4 — "Mixed"
```
Linear combination. For example, 50% Hold, 30% Controlled, 20% LP.
```

**Footer paragraph below cards:**
```
This policy-by-creator pattern is designed to reduce unnecessary sell pressure while giving campaign creators direct control over treasury handling decisions.
```

---

### Roadmap Section

**Section eyebrow:**
```
Roadmap
```

**Section headline:**
```
Three phases. Each gated. We delay anything that's not ready.
```

**Vertical timeline (or horizontal if space allows):**

Phase 1 — Burn-only MVP
```
Q3 2026 target
Devnet → Tier 2 audit → Tier 3 audit → guarded mainnet.
The full conversion engine, in its safest form.
```

Phase 2 — Hardening
```
Q4 2026 target
Verified tier, Token-2022 extension allowlist, timelocked rate updates, custom indexer, bug bounty program live.
```

Phase 3 — Lock and Liquidity Recovery (conditional)
```
2027 target, subject to legal clearance
Lock mode introduces a vault for legacy tokens. Crank operations could route accumulated tokens through Solana DEX infrastructure to recover SOL from low-activity pools.

Phase 3 raises legal questions we have not yet resolved. We are working with external counsel. If the legal risk is determined to be unmanageable, Phase 3 will be removed or substantially redesigned.
```

---

### Security Section

**Section eyebrow:**
```
Security
```

**Section headline:**
```
Audited in tiers. Funded in stages. Public from day one.
```

**Body paragraph:**
```
We have studied the public audit reports of established Solana auditors operating on similar program archetypes. Several common findings — strict mint validation, rent-exempt calculations, token-program interface unification, slippage guards on DEX integration — were addressed at the architectural level before any code was written.
```

**Tier list (vertical or compact horizontal):**

```
Tier 1 — Internal hardening (continuous)
checked_* arithmetic, Anchor account constraints, proptest, fuzz testing, verifiable build CI.

Tier 2 — Competitive audit (pre-mainnet)
Sherlock or Code4rena contest. Many auditors, parallel review.

Tier 3 — Boutique audit (mainnet readiness)
A focused review by a Solana-specialized firm.

Tier 4 — Premier audit (post-traction)
Full-scope audit by a top-tier firm, funded in stages as protocol traction grows.

Continuous bug bounty (post-mainnet)
Sherlock Bug Bounty or Immunefi. Reward pool funded from protocol treasury.
```

---

### Read the Litepaper CTA Section (full-width, prominent)

**Background:** subtle gradient block (purple → cyan), with the logo as a faint watermark in the corner.

**Headline:**
```
The full picture is in the Litepaper.
```

**Subtext:**
```
Architecture, math, treasury policy, audit strategy, phased rollout — all documented. We're publishing in public because we want feedback, not because we have something to hide.
```

**Single CTA button (large):**
```
Read the Litepaper →
```
(links to `https://docs.redaxhub.com/`)

---

### Footer

**Layout: 4 columns + bottom row.**

**Column 1 — Logo and tagline:**
```
[REDAX Hub logo]

Solana-native infrastructure for token consolidation and migration.
```

**Column 2 — Product:**
```
Litepaper
GitHub
Documentation
```

**Column 3 — Community:**
```
X (Twitter)
Telegram
```

**Column 4 — Contact:**
```
hello@redaxhub.com
(public contact email)
```

**Bottom row, centered, small text:**
```
© 2026 REDAX Hub. This site describes infrastructure under development and is provided for informational purposes. Not an investment offering. Not a commitment to launch any token.

v1.0 — 2026-04-26
```

---

## 2. FIGMA MAKE PROMPT

Single block, copy-paste ready into Figma Make.

```
Design a one-page landing site for "REDAX Hub" — a Solana-native Merger-as-a-Service infrastructure protocol for campaign-based token consolidation and asset migration.

Visual direction:
Premium Web3 infrastructure aesthetic. Think Jupiter, Squads, Solana Foundation — clean, serious, technical, not a meme-coin site. The audience is technical advisors, CTOs, and ecosystem operators reviewing the project before getting involved. They should feel that the team is disciplined and ready to ship.

Style:
- Dark theme. Background: deep near-black navy (#0A0E1A primary, #111827 for elevated surfaces)
- Accent gradient: purple → blue → cyan → green-cyan, taken directly from the REDAX Hub logo. Use as: gradient borders on key blocks, gradient text on the H1 brand word ("REDAX"), small gradient highlights on icons.
- Typography: clean geometric sans-serif. Inter or Space Grotesk for headings, Inter for body. H1 size around 64-72px on desktop. Body 16-18px.
- Plenty of whitespace. Each section breathes. Do not compress.
- Subtle grain or noise texture on background to avoid flat plastic look.
- No glassmorphism. No neon glows. No hard shadows. The seriousness comes from restraint.

Layout:
One-page vertical scroll. Sticky header with logo on the left and nav (Litepaper, GitHub, X) on the right. Mobile responsive — header collapses, two-column sections become single-column.

Sections, in order:
1. Hero — large headline, subheadline, two CTAs. Hero illustration on the right or centered: an abstract isometric or vector visualization of "merging tokens into one." Not a literal coin — abstract geometric shapes converging into a single form, with the gradient running through it.
2. Problem — section eyebrow, headline, paragraph, then four small icon cards in a horizontal row.
3. Solution — three numbered steps in a horizontal row.
4. How REDAX Works — two-column section. Left column: a clean architectural diagram of the PDA hierarchy (ProtocolConfig → Campaign → TokenConfig + CampaignTreasury + DustAccumulator) with subtle connector lines and gradient accents. Right column: explanatory text.
5. Phase 1 (Burn-only MVP) — two-column "Included / Deferred" list. Use gradient checkmarks for Included and muted circles for Deferred.
6. Precision Sandwich — explanatory paragraph followed by a highlighted code-style block showing the conservation invariant in monospace, with a subtle gradient border around the block.
7. Treasury Discipline — intro paragraph, then four cards in a 2x2 grid. Each card has a small icon, a label, and a 1-2 line description. The "Default" card (Vest and Controlled Execution) has a subtle gradient highlight to mark it.
8. Roadmap — vertical timeline with three phases. Each phase has a date, title, and 2-3 line description. Phase 3 has a "subject to legal clearance" badge.
9. Security — tier list (Tier 1 through Tier 4 + bug bounty), each with a one-line description.
10. Litepaper CTA — full-width section with subtle gradient background, large headline, and one prominent CTA button.
11. Footer — four-column layout (logo+tagline, product links, community links, contact), with a bottom row showing copyright and version.

Imagery:
- The REDAX Hub logo (gradient B-symbol with "REDAX Hub" text) sits in the header and footer.
- The hero illustration is abstract — converging geometric forms in the gradient palette.
- Icons throughout are line-style, monoweight, with occasional gradient strokes on key elements.
- No stock photos. No people. No literal "coins" or "money" imagery.

Tone of voice in the copy:
Technical but readable. Like a senior engineer wrote it for other senior engineers. Confident but not boastful. Concrete claims, no marketing fluff. No emojis. No exclamation points.

Mobile breakpoint: 768px. Tablet: 1024px. Desktop: 1280px+. Hero scales gracefully — illustration moves below text on mobile.

Output: Figma file with the full landing as a single artboard at desktop resolution (1440px wide), plus mobile (375px) and tablet (768px) variants of the hero and key sections.
```

---

## 3. CODEX IMPLEMENTATION BRIEF

For `redaxhub/landing` repository. Give this to Copilot/Codex/Claude Code.

```
Build the REDAX Hub landing page in the redaxhub/landing repository.

Stack:
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Static site, no backend, no database, no API routes
- No wallet connect for now
- No token launch UI
- Deploys to Vercel

Folder structure:
redaxhub/landing/
├── app/
│   ├── layout.tsx          // root layout, metadata, fonts
│   ├── page.tsx            // single landing page
│   └── globals.css         // tailwind base + custom CSS variables
├── components/
│   ├── Header.tsx          // sticky nav with logo + links
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── Architecture.tsx
│   ├── Phase1.tsx          // Burn-only MVP section
│   ├── PrecisionSandwich.tsx
│   ├── TreasuryDiscipline.tsx
│   ├── Roadmap.tsx
│   ├── Security.tsx
│   ├── LitepaperCTA.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── GradientText.tsx       // applies brand gradient to text
│       ├── GradientBorder.tsx     // wraps children in gradient border
│       ├── Card.tsx
│       ├── TimelineItem.tsx
│       └── TierItem.tsx
├── public/
│   ├── logo.svg
│   ├── icon.svg
│   ├── og-image.png        // 1200x630, generated later
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md

Tailwind config:
Add custom colors and gradient utilities:
- redax-bg: '#0A0E1A'
- redax-surface: '#111827'
- redax-text: '#F3F4F6'
- redax-text-muted: '#9CA3AF'
- redax-border: '#1F2937'
- gradient-from: '#A855F7' (purple)
- gradient-via-1: '#3B82F6' (blue)
- gradient-via-2: '#06B6D4' (cyan)
- gradient-to: '#10B981' (green)

Add a custom utility for the brand gradient:
.bg-brand-gradient {
  background: linear-gradient(135deg, #A855F7 0%, #3B82F6 33%, #06B6D4 66%, #10B981 100%);
}
.text-brand-gradient {
  background: linear-gradient(135deg, #A855F7 0%, #3B82F6 33%, #06B6D4 66%, #10B981 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

Fonts:
Use Inter for body and Space Grotesk for headings via next/font.

Component implementation notes:

Header.tsx:
- Sticky top, backdrop-blur, semi-transparent background
- Logo on the left (uses public/logo.svg)
- Right side: Litepaper link (external, opens https://docs.redaxhub.com/), GitHub link (external), X icon link
- On mobile, collapse to hamburger or just keep the icons compact

Hero.tsx:
- Two-column on desktop, single-column on mobile
- Left: eyebrow + headline (with "REDAX" wrapped in <GradientText>) + subheadline + two CTAs + footer note about no token
- Right: SVG illustration placeholder. For initial implementation, use a simple animated SVG of converging gradient lines/shapes. Mark with a TODO comment to replace with final hero artwork.

Problem.tsx:
- Section eyebrow, headline, body paragraph
- Below: four cards in a grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Each card uses the Card component from ui/

Solution.tsx:
- Three numbered steps
- Use horizontal flex on desktop, stacked on mobile
- Numbers are large, gradient-styled

Architecture.tsx:
- Two columns
- Left: SVG diagram of the PDA hierarchy (inline SVG component, can be improved later)
- Right: explanatory text

Phase1.tsx:
- Two-column "Included / Deferred" list
- Included items have a gradient checkmark icon
- Deferred items have a muted circle

PrecisionSandwich.tsx:
- Body paragraph
- Highlighted code block showing the invariant
- Use <GradientBorder> wrapping a <pre><code>

TreasuryDiscipline.tsx:
- Intro paragraph
- 2x2 grid of cards
- The "Default" card (Vest and Controlled Execution) has a subtle gradient ring

Roadmap.tsx:
- Vertical timeline
- Each <TimelineItem> has a date, title, description, and optional badge
- Phase 3 has a "subject to legal clearance" badge

Security.tsx:
- List of tiers
- Each <TierItem> has tier name, scope label, description

LitepaperCTA.tsx:
- Full-width section with subtle gradient background (use bg-brand-gradient with opacity-10 overlay)
- Large headline
- One CTA button linking to https://docs.redaxhub.com/

Footer.tsx:
- Four-column layout
- Bottom row with copyright and version

Content:
All copy text comes from the Landing Page Copy section in the project brief. Place strings inline for now — no i18n setup. Future iteration may extract to a content file.

Metadata (in app/layout.tsx):
title: 'REDAX Hub — Merger-as-a-Service for Solana'
description: 'Solana-native infrastructure for campaign-based token consolidation and asset migration. Open a campaign, convert old tokens into new ones, all in a single audit-ready program.'
openGraph:
  title: 'REDAX Hub — Merger-as-a-Service for Solana'
  description: same as above
  url: 'https://redaxhub.com'
  siteName: 'REDAX Hub'
  images: [{ url: '/og-image.png', width: 1200, height: 630 }]
twitter:
  card: 'summary_large_image'
  title: 'REDAX Hub — Merger-as-a-Service for Solana'
  description: same as above

README.md content:
# REDAX Hub Landing

Static landing page for REDAX Hub at https://redaxhub.com

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Local development
npm install
npm run dev

## Deployment
Push to main. Vercel auto-deploys.

## Content
All copy is inline in the components. To update text, edit the relevant component in /components.

## Assets
- /public/logo.svg — REDAX Hub primary logo
- /public/icon.svg — favicon-style icon
- /public/og-image.png — OpenGraph card (1200x630)

## License
All rights reserved. Content not available for reuse.

Vercel deployment:
Connect the GitHub repo to Vercel, no environment variables needed for the static site, custom domain points to redaxhub.com with the standard Vercel DNS records.

Performance budget:
- Lighthouse Performance score >90
- Initial load <100KB gzipped
- No analytics, no trackers in v1

Accessibility:
- All images have alt text
- Color contrast meets WCAG AA on the dark theme
- Focus states visible on all interactive elements
- Logical heading hierarchy (one h1, then h2s, etc.)
```

---

## 4. SEO / METADATA

```
TITLE (browser tab, 50-60 chars):
REDAX Hub — Merger-as-a-Service for Solana

META DESCRIPTION (140-160 chars):
Solana-native infrastructure for campaign-based token consolidation and asset migration. Open a campaign, convert old tokens, all in one audited program.

OPENGRAPH:
og:title       — REDAX Hub — Merger-as-a-Service for Solana
og:description — Open a token migration campaign on Solana in an afternoon, not in months. Audited factory. Precise math. Atomic conversions.
og:url         — https://redaxhub.com
og:site_name   — REDAX Hub
og:type        — website
og:image       — https://redaxhub.com/og-image.png (1200x630)

TWITTER CARD:
twitter:card        — summary_large_image
twitter:title       — REDAX Hub — Merger-as-a-Service for Solana
twitter:description — Solana-native factory for token migration. Campaign-based, audited, on-chain.
twitter:image       — https://redaxhub.com/og-image.png
twitter:site        — @redaxhub
twitter:creator     — @redaxhub

CANONICAL URL:
<link rel="canonical" href="https://redaxhub.com" />

ROBOTS:
<meta name="robots" content="index,follow" />

THEME COLOR:
<meta name="theme-color" content="#0A0E1A" />

KEYWORDS (in meta tag, low priority but useful):
solana, defi, token migration, merger as a service, token consolidation, smart contract, anchor, rust, web3 infrastructure
```

---

## 5. ASSETS NEEDED

What you already have:
- `logo.svg` — REDAX Hub primary logo (gradient version on dark, transparent version) — both already produced
- Brand color palette — extracted from logo

What you need to generate next (in priority order):

**Priority 1 — Required for first deploy:**

1. **`favicon.ico`** — 32×32 and 16×16 versions, ideally from the "B" symbol of the logo only (not the full wordmark, too small to read). Can be auto-generated by realfavicongenerator.net from a 512×512 PNG export of just the B symbol.

2. **`og-image.png`** — 1200×630 social sharing card. Layout: dark navy background, REDAX Hub logo top-left, large headline text "Merger-as-a-Service for Solana" centered, gradient accent line below. Generate this in Figma after the main design is finalized.

3. **Hero illustration (SVG)** — Abstract converging geometric shapes with the brand gradient. Animation optional. For the first deploy, use a simple placeholder: three or four geometric shapes (circles, hexagons, lines) flowing into a single central point, drawn in the brand gradient. Can be hand-drawn in Figma or generated from an SVG illustration library and recolored.

**Priority 2 — Polish for v1.1:**

4. **PDA Hierarchy Diagram (SVG)** — for the Architecture section. Clean, line-style, with the four account types as boxes connected by subtle gradient lines. Inline SVG, hand-drawn in Figma.

5. **Section icons (SVG set, line-style)** — small monoline icons for the four Problem cards (trapped users, locked liquidity, scattered communities, capital), the four Treasury cards, and the Security tiers. About 12 icons total. Use Lucide or Phosphor icons, recolored to match the brand.

**Priority 3 — Future / Nice-to-have:**

6. **Animated SVG variants** — subtle motion on the hero illustration (gentle rotation, gradient shift) and on the architectural diagram (data flow indication).

7. **Photo or rendered visual for Phase 3 section** — if Phase 3 ever ships, a more atmospheric visual to match its weight. Skip for now.

8. **Logo variations** — horizontal lockup, stacked lockup, monochrome version (single color for places where gradient isn't possible like a sticker or a fax). Skip for v1, tackle when needed.

**What NOT to generate now:**
- 3D renders. Adds polish but slows iteration.
- Stock photography of any kind. Doesn't fit the visual language.
- Mascot characters. We're infrastructure, not a meme.
- Animated explainer videos. Overhead for a landing this early.

---

# UYGULAMA SIRASI

Sen GPT'nin önerdiği sırayı takip et:

1. **Bugün/yarın:** Section 2 (Figma Make Prompt) — Figma Make'e ver, tasarımı al
2. **Sonra:** Section 3 (Codex Brief) — Codex/Copilot'a ver, `redaxhub/landing` repo'yu kur
3. **Vercel deploy:** Domain'i bağla, redaxhub.com canlı
4. **Daha sonra:** GitHub Org Profile README + repo README'leri (ayrı paket, Codex de yapabilir aslında)
5. **Yarın:** GitBook setup (Litepaper'ı sayfa sayfa yapıştır)

Bu paketle landing page için Opus'a tekrar gelmen gerekmeyecek. README'ler ve GitBook setup'ı için Codex yeterli olacak.

---

İki şey eklemem gerek:

**A) Phase 3 framing.** GPT "future optional module, subject to legal and security review" kadar yumuşatmıştı. Ben bunu **biraz güçlendirdim**: "Lock and Liquidity Recovery (conditional)" başlığı + "subject to legal clearance" badge + "if the legal risk is determined to be unmanageable, Phase 3 will be removed or substantially redesigned" cümlesi. Sebebim: Litepaper ile aynı çizgide kalmak. Eğer landing'de daha agresif yumuşatma istersen söyle, sıfırlayım.

**B) Hero illustration.** Şu an placeholder olarak "abstract converging geometric shapes" diye geçiyor. Eğer hero'da somut bir görsel istiyorsan (örn: Pak's Merge'e gönderme yapan stilize edilmiş bir illustration), söyle, prompt'u zenginleştireyim.

Bu paketle landing tamamlandı. **Bir sonraki adım nedir** — GitHub Org Profile README mi (kısa paket, Opus'a değer), yoksa Codex'in zaten yazabileceği şeyler için artık bana ihtiyaç olmayan bir noktaya mı geldik?

Söyle, devam edelim ya da burada duralım.