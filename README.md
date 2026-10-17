
# REDAX Hub Landing

Vite React landing page for REDAX Hub.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build output directory: `dist`

## Vercel Settings

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

## Public Docs Link

- Litepaper / Docs: https://docs.redaxhub.com/

## Production URLs

- Landing: https://redaxhub.com/
- Docs: https://docs.redaxhub.com/
- Devnet app: https://app.redaxhub.com/ (separate repository: https://github.com/redaxhub/app)
- Token metadata: https://metadata.redaxhub.com/metadata/v1/

## Published Token Metadata

Files under `public/metadata/v1/` are published token-metadata payloads served at
https://metadata.redaxhub.com/metadata/v1/. Each filename carries the SHA-256 of its exact bytes.
Never edit, re-encode, rename, move or delete them. Every deployment of this site must keep serving
each of them byte-for-byte. The hash in a filename identifies the bytes; it does not make the hosted
copy immutable. Do not roll the site back to a deployment made before these files were added, because
that deployment does not serve them.
  