import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Lab from "./components/Lab";
import Members from "./components/Members";
import Achievements from "./components/Achievements";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

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
