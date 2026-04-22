import NavMenu from "../../components/NavMenu";
import PlatsHero from "./components/PlatsHero";
import PlatsMenu from "./components/PlatsMenu";


export default function Home() {
  return (
    <main>
      <NavMenu />
      <PlatsHero />
      <PlatsMenu />
    </main>
  );
}