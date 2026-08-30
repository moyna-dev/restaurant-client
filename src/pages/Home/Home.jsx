import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import Features from "../../components/home/Features";
import PopularMenu from "../../components/home/PopularMenu";
import SpecialOffer from "../../components/home/SpecialOffer";
import Gallery from "../../components/home/Gallery";
import Chef from "../../components/home/Chef";
import Reservation from "../../components/home/Reservation";
import Testimonial from "../../components/home/Testimonial";
import ContactSection from "../../components/home/ContactSection";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <PopularMenu />
      <SpecialOffer />
      <Gallery />
      <Chef />
      <Reservation />
      <Testimonial />
      <ContactSection />
    </>
  );
}
export default Home;
