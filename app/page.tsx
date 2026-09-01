import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import CaseStudies from "@/components/CaseStudies";
import Flexure from "@/components/Flexure";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0a0a0a]">
      <Nav />
      <Hero />
      <Philosophy />
      <CaseStudies />
      <Flexure />
      <Footer />
    </main>
  );
}