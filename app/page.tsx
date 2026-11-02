import { Navigation } from "@/components/navigation/Navigation";
import { Introduction } from "@/components/portfolio/Introduction";
import { Profile } from "@/components/portfolio/Profile";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
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
        <Profile />
        <SelectedWork />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
