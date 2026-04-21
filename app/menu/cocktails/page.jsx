import NavMenu from "../../components/NavMenu";
import CocktailsHero from "./components/CocktailsHero";
import CocktailsMenu from "./components/CocktailsMenu";


export default function Home() {
  return (
    <main>
      <NavMenu />
      <CocktailsHero />
      <CocktailsMenu />
    </main>
  );
}