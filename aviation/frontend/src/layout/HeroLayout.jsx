import Hero from "../pages/Hero";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Navigation from "../components/Navigation";
const HeroLayout = () => {
  return (
    <>
      <div>
        <Navigation />
        <Hero />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default HeroLayout;
