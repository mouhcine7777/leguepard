import NavMenu from "../../components/NavMenu";
import AperitifsHero from "./components/AperitifsHero";
import AperitifsMenu from "./components/AperitifsMenu";


export default function Home() {
  return (
    <main>
      <NavMenu />
      <AperitifsHero />
      <AperitifsMenu />
    </main>
  );
}