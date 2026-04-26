import { Github, Twitter, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/brand/redaxhub-logo-transparent.png"
              alt="REDAX Hub"
              className="mb-4 h-7 w-auto opacity-90"
            />
            <p className="text-sm text-muted-foreground">
              Solana-native infrastructure for token consolidation and migration.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://redax-hub.gitbook.io/redax-hub-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Litepaper
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/redaxhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://redax-hub.gitbook.io/redax-hub-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://x.com/redaxhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Twitter className="h-4 w-4" />
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/redaxhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Send className="h-4 w-4" />
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <p className="text-sm text-muted-foreground">
              <a className="hover:text-foreground" href="mailto:hello@redaxhub.com">
                hello@redaxhub.com
              </a>
              <br />
              <span className="text-xs">(activation in progress)</span>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-xs text-muted-foreground">
          <p className="mb-2">
            © 2026 REDAX Hub. This site describes a protocol under development. Not a fundraising prospectus. Not an investment offering. Not a commitment to launch any token.
          </p>
          <p>v1.0 — 2026-04-26</p>
        </div>
      </div>
    </footer>
  );
}
