import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Specialties from "@/components/sections/Specialties";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Dra. Isabela Voss — Odontologia de Excelência" },
      {
        name: "description",
        content:
          "Odontologia de alto padrão em Santo André: implantes, clareamento, ortodontia, estética e mais. 14 anos cuidando do seu sorriso.",
      },
      { property: "og:title", content: "Clínica Dra. Isabela Voss — Odontologia de Excelência" },
      {
        property: "og:description",
        content:
          "Tecnologia de ponta e atendimento humano. Agende sua consulta com a equipe Voss em Santo André.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-midnight">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Team />
        <BeforeAfter />
        <Testimonials />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
