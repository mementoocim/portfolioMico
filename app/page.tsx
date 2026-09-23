import { Navigation } from "@/components/navigation/Navigation";
import { Introduction } from "@/components/portfolio/Introduction";
import { Profile } from "@/components/portfolio/Profile";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
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
        <Profile />
        <SelectedWork />
      </main>
      <Contact />
    </>
  );
}
