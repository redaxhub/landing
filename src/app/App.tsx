import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Architecture } from "./components/Architecture";
import { Phase1 } from "./components/Phase1";
import { PrecisionSandwich } from "./components/PrecisionSandwich";
import { TreasuryDiscipline } from "./components/TreasuryDiscipline";
import { Roadmap } from "./components/Roadmap";
import { Security } from "./components/Security";
import { LitepaperCTA } from "./components/LitepaperCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Architecture />
        <Phase1 />
        <PrecisionSandwich />
        <TreasuryDiscipline />
        <Roadmap />
        <Security />
        <LitepaperCTA />
      </main>
      <Footer />
    </div>
  );
}