import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { fadeInUp, stagger } from "@/lib/motion-presets";

const items = [
  {
    text: "Fiz clareamento e o resultado superou todas as minhas expectativas. A equipe é atenciosa do primeiro contato até o pós-atendimento.",
    name: "Marina Castelli",
    treatment: "Clareamento Dental",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    text: "Coloquei um implante e nem parece! A Dra. Isabela é extremamente cuidadosa e explica cada detalhe. Recomendo de olhos fechados.",
    name: "Eduardo Prado",
    treatment: "Implante Dental",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    text: "Usei alinhadores invisíveis por 11 meses e o resultado é simplesmente incrível. Profissionalismo do início ao fim do tratamento.",
    name: "Júlia Andrade",
    treatment: "Ortodontia Invisível",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-mint py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">QUEM VIVEU, RECOMENDA</span>
          <h2 className="h2-fluid mt-4 font-display font-light text-midnight">Depoimentos</h2>
          <span className="mt-6 block"><span className="deco-line" /></span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((t) => (
            <motion.article
              key={t.name}
              variants={fadeInUp}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-soft"
            >
              <Quote className="absolute -right-3 -top-2 h-24 w-24 text-blue/10" />
              <div className="relative">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-5 font-quote text-lg italic leading-relaxed text-midnight">
                  “{t.text}”
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-midnight">{t.name}</p>
                    <p className="text-xs text-clinic-gray">{t.treatment}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-soft">
            <span className="font-display text-xl font-semibold">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <span className="h-4 w-px bg-midnight/15" />
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-medium text-midnight">4.9 · 312 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
}
