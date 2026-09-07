import { Navigation } from "@/components/navigation/Navigation";
import { Introduction } from "@/components/portfolio/Introduction";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Profile } from "@/components/portfolio/Profile";
import { Contact } from "@/components/portfolio/Contact";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Introduction />
        <SelectedWork />
        <Profile />
      </main>
      <Contact />
    </>
  );
}
