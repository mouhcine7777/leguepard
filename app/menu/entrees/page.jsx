import NavMenu from "../../components/NavMenu";
import EntreesHero from "./components/EntreesHero";
import EntreesMenu from "./components/EntreesMenu";


export default function Home() {
  return (
    <main>
      <NavMenu />
      <EntreesHero />
      <EntreesMenu />
    </main>
  );
}