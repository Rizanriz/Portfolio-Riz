import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Project";
import Skills from "@/components/main/Skills";
import Text from "@/components/main/Text";
import Slider from "@/components/sub/Slider";

export default function Home() {
  
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
          <Hero/>
          <About/>  
          <Skills/>
          <Text/>
          {/* <Encryption/> */}
          <Projects/>
          <Slider/>
          <Contact/>
          <hr />
          <Footer/>
      </div>
    </main>
  );
}
