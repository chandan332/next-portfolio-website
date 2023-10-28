import HeroSection from "@/components/hero/HeroSection";
import Contact from "@/components/contact/Contact";
import About from "@/components/about/About";
import Animation from "@/components/animation/Animation";

export default function Home() {
  return (
    <>
      <Animation />
      <HeroSection />
      <About />
      <Contact />
    </>
  );
}
