import NavMenu from "../../components/NavMenu";
import DessertHero from "./components/DessertHero";
import DessertsMenu from "./components/DessertsMenu";


export default function Home() {
  return (
    <main>
      <NavMenu />
      <DessertHero />
      <DessertsMenu />
    </main>
  );
}