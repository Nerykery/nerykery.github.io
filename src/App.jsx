import BackgroundFX from "./components/BackgroundFX.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Domains from "./components/Domains.jsx";
import Stack from "./components/Stack.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <BackgroundFX />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Domains />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
