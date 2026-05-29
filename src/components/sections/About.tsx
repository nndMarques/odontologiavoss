import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/lib/motion-presets";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[55fr_45fr] lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInLeft}
          className="relative"
        >
          <div className="overflow-hidden rounded-[28px] shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=80"
              alt="Interior moderno da clínica odontológica"
              loading="lazy"
              className="h-[560px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-2xl border-4 border-gold bg-white shadow-soft sm:h-32 sm:w-32" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInRight}
          className="flex flex-col justify-center"
        >
          <span className="eyebrow">NOSSA HISTÓRIA</span>
          <h2 className="mt-4 font-display text-4xl font-light leading-[1.1] text-midnight sm:text-5xl">
            Excelência que<br />você pode sentir<br />desde o primeiro<br />atendimento
          </h2>
          <span className="mt-6 block"><span className="deco-line-gold" /></span>

          <p className="mt-8 text-clinic-gray leading-relaxed">
            Fundada pela Dra. Isabela Voss — formada pela Universidade de São Paulo (USP) e com
            especialização em odontologia estética pela Universidade do Porto, em Portugal — a
            clínica nasceu com um propósito claro: unir ciência, arte e acolhimento.
          </p>
          <p className="mt-4 text-clinic-gray leading-relaxed">
            Há 14 anos transformando sorrisos em Santo André, nossa equipe é referência em
            reabilitação oral e estética avançada, com protocolos digitais e um atendimento
            verdadeiramente personalizado.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Ambiente climatizado e esterilizado",
              "Tecnologia digital de ponta (scanner intraoral, raio-X digital)",
              "Atendimento por hora marcada, sem espera",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-light">
                  <Check className="h-3.5 w-3.5 text-blue" />
                </span>
                <span className="text-sm text-midnight/90">{t}</span>
              </li>
            ))}
          </ul>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#equipe"
            className="mt-10 inline-flex w-fit items-center rounded-full bg-blue px-7 py-3.5 text-sm font-medium text-white shadow-soft hover:shadow-lift"
          >
            Conheça a Dra. Isabela
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
