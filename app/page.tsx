import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Devices from "@/components/Devices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Values />
        <Devices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
