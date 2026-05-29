import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import { fadeInUp, stagger } from "@/lib/motion-presets";

const team = [
  {
    name: "Dra. Isabela Voss",
    role: "Implantodontia & Estética",
    cro: "CRO-SP 98.234",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80",
  },
  {
    name: "Dr. Rafael Mendes",
    role: "Ortodontia",
    cro: "CRO-SP 112.567",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80",
  },
  {
    name: "Dra. Carolina Lima",
    role: "Odontopediatria",
    cro: "CRO-SP 87.341",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80",
  },
];

export default function Team() {
  return (
    <section id="equipe" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">PROFISSIONAIS</span>
          <h2 className="h2-fluid mt-4 font-display font-light text-midnight">
            Uma equipe que ama<br />o que faz
          </h2>
          <span className="mt-6 block"><span className="deco-line" /></span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeInUp}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
              className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-soft"
            >
              <div className="relative">
                <div className="h-36 w-36 overflow-hidden rounded-full ring-4 ring-blue-light">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
              <h3 className="mt-6 font-sub text-lg font-semibold text-midnight">{p.name}</h3>
              <p className="mt-1 text-sm text-blue">{p.role}</p>
              <p className="mt-1 text-xs text-clinic-gray">{p.cro}</p>
              <div className="mt-5 flex gap-3">
                <a aria-label="Instagram" href="#" className="rounded-full bg-blue-light p-2 text-blue transition-colors hover:bg-blue hover:text-white">
                  <Instagram className="h-4 w-4" />
                </a>
                <a aria-label="LinkedIn" href="#" className="rounded-full bg-blue-light p-2 text-blue transition-colors hover:bg-blue hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
