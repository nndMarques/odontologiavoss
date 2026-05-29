import { motion } from "framer-motion";
import {
  Sparkles,
  Smile,
  Microscope,
  Baby,
  ShieldCheck,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { fadeInUp, stagger } from "@/lib/motion-presets";

const items = [
  {
    icon: Wrench,
    title: "Implantodontia",
    desc: "Reabilitação oral com implantes de titânio de última geração, devolvendo função e estética com naturalidade.",
  },
  {
    icon: Sparkles,
    title: "Clareamento Dental",
    desc: "Protocolos clínicos e caseiros para um sorriso até 8 tons mais claro com total segurança.",
  },
  {
    icon: Smile,
    title: "Ortodontia",
    desc: "Aparelhos metálicos, cerâmicos e alinhadores invisíveis para o sorriso que você sempre quis.",
  },
  {
    icon: Microscope,
    title: "Odontologia Estética",
    desc: "Lentes de contato dental, facetas e resinas para transformar o seu sorriso completamente.",
  },
  {
    icon: Baby,
    title: "Odontopediatria",
    desc: "Atendimento especializado e acolhedor para crianças, formando hábitos saudáveis desde cedo.",
  },
  {
    icon: ShieldCheck,
    title: "Prevenção & Limpeza",
    desc: "Consultas de rotina, profilaxia e orientação para manter sua saúde bucal sempre em dia.",
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">O QUE FAZEMOS</span>
          <h2 className="h2-fluid mt-4 font-display font-light text-midnight">
            Cuidado completo para<br />o seu sorriso
          </h2>
          <span className="mt-6 block">
            <span className="deco-line" />
          </span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((it) => (
            <motion.article
              key={it.title}
              variants={fadeInUp}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-soft"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-blue transition-transform duration-300 group-hover:scale-x-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-light">
                <it.icon className="h-6 w-6 text-blue" />
              </div>
              <h3 className="mt-6 font-sub text-xl font-semibold text-midnight">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-clinic-gray">{it.desc}</p>
              <a
                href="#contato"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-blue transition-all hover:gap-2"
              >
                Saiba mais
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contato"
            className="inline-flex items-center rounded-full border border-blue px-7 py-3 text-sm font-medium text-blue transition-colors hover:bg-blue hover:text-white"
          >
            Ver Todas as Especialidades
          </motion.a>
        </div>
      </div>
    </section>
  );
}
