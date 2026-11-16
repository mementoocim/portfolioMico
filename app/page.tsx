import { Navigation } from "@/components/navigation/Navigation";
import { InkFilters } from "@/components/portfolio/InkFilters";
import { Introduction } from "@/components/portfolio/Introduction";
import { Profile } from "@/components/portfolio/Profile";
import { SupportFlow } from "@/components/portfolio/SupportFlow";
import { AgenticCoding } from "@/components/portfolio/AgenticCoding";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Stats } from "@/components/portfolio/Stats";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollObserver } from "@/components/portfolio/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <InkFilters />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <div className="sheet">
        <main id="main">
          <Introduction />
          <Profile />
          <SupportFlow />
          <AgenticCoding />
          <SelectedWork />
          <Stats />
          <Skills />
        </main>
        <Contact />
      </div>
    </>
  );
}
