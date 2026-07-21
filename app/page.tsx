import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import TabFocusHandler from "@/components/TabFocusHandler";

export default function Home() {
  return (
    <>
      <TabFocusHandler />
      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
