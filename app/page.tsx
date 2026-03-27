import { Navbar, Hero, About, Lab, Members, Achievements, Sponsors, Footer } from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Lab />
        <Members />
        <Achievements />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
