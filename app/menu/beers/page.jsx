import NavMenu from "../../components/NavMenu";
import BeersHero from "./components/BeersHero";
import BeersMenu from "./components/BeersMenu";


export default function Home() {
  return (
    <main>
      <NavMenu />
      <BeersHero />
      <BeersMenu />
    </main>
  );
}