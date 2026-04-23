import NavMenu from "../../components/NavMenu";
import ChampagneHero from "./components/ChampagneHero";
import ChampagneMenu from "./components/ChampagneMenu";


export default function Home() {
  return (
    <main>
      <NavMenu />
      <ChampagneHero />
      <ChampagneMenu />
    </main>
  );
}