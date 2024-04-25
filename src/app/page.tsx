import { Hero } from "./components/home/Hero";
import { Description } from "./components/home/Description";
import { MainProducts } from "./components/home/MainProducts";

export default function Home() {
  return (
    <main>
      <h1>
        <Hero />
        <Description />
        <MainProducts />
      </h1>
    </main>
  );
}
