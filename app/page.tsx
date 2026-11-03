import { Navigation } from "@/components/navigation/Navigation";
import { Introduction } from "@/components/portfolio/Introduction";
import { ToolMarquee } from "@/components/portfolio/ToolMarquee";
import { Profile } from "@/components/portfolio/Profile";
import { AgenticCoding } from "@/components/portfolio/AgenticCoding";
import { SupportFlow } from "@/components/portfolio/SupportFlow";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Stats } from "@/components/portfolio/Stats";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollObserver } from "@/components/portfolio/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Introduction />
        <ToolMarquee />
        <Profile />
        <SupportFlow />
        <AgenticCoding />
        <SelectedWork />
        <Stats />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
