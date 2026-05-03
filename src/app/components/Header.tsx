import { Github } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="https://redaxhub.com/"
          className="flex items-center gap-2"
          aria-label="REDAX Hub Home"
        >
          <img
            src="/brand/redaxhub-logo-transparent.png"
            alt="REDAX Hub"
            className="h-14 w-auto sm:h-16"
          />
        </a>

        <nav className="flex items-center gap-6">
          <a
            href="https://docs.redaxhub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Litepaper
          </a>
          <a
            href="https://github.com/redaxhub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
