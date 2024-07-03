import MapArea from "@/components/MapArea/MapArea";
import Header from "../components/Header/Header";
import Banner from "@/components/Banner/Banner";
import HowWeWorship from "@/components/HowWeWorship/HowWeWorship";
import About from "@/components/AboutSoj/About";
import Give from "@/components/GiveComponent/Give";
import Contact from "@/components/ContactComponent/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <MapArea />
      <HowWeWorship />
      <About />
      <Give />
      <Contact />
      <Footer />
    </>
  );
}
