import { motion } from "framer-motion";
import { CalendarDays, ShieldCheck, Star } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";
import { fadeInLeft, fadeInRight, fadeIn, stagger } from "@/lib/motion-presets";
import heroClinic from "@/assets/hero-clinic.jpg";


function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { ref, inView } = useScrollAnimation<HTMLDivElement>(0.4);
  const n = useCountUp(value, 1600, inView);
  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-display text-3xl font-semibold text-blue">
        {n.toLocaleString("pt-BR")}
        {suffix}
      </span>
      <span className="mt-1 text-xs uppercase tracking-[0.18em] text-clinic-gray">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-white pt-28 lg:pt-32">
      {/* Decorative blob */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-20 h-[520px] w-[520px] opacity-60"
        viewBox="0 0 600 600"
      >
        <defs>
          <linearGradient id="blobGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#EBF3FB" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blobGrad)"
          d="M421,322Q379,394,304,419Q229,444,160,400Q91,356,90,278Q89,200,148,140Q207,80,289,90Q371,100,420,165Q469,230,421,322Z"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 lg:grid-cols-2 lg:px-10 lg:pb-32">
        {/* Left */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div
            variants={fadeInLeft}
            className="inline-flex items-center gap-2 rounded-full bg-blue-light px-4 py-1.5"
          >
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue">
              Clínica Premiada · Santo André, SP
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInLeft}
            className="h1-fluid mt-6 font-display font-light text-midnight"
          >
            Seu sorriso<br />
            merece o<br />
            <span className="relative inline-block font-semibold">
              melhor cuidado.
              <svg
                aria-hidden
                viewBox="0 0 300 18"
                className="absolute -bottom-3 left-0 h-3 w-full text-gold"
              >
                <path
                  d="M2 12 C 60 2, 150 18, 298 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p variants={fadeInLeft} className="lead-fluid mt-8 max-w-lg text-clinic-gray">
            Combinamos tecnologia de ponta com um atendimento verdadeiramente humano.
            Aqui, cada sorriso é tratado como único.
          </motion.p>

          <motion.div variants={fadeInLeft} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-medium text-white shadow-soft hover:shadow-lift"
            >
              <CalendarDays className="h-4 w-4" />
              Agendar Minha Consulta
            </motion.a>
            <motion.a
              href="#sobre"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center rounded-full border border-midnight px-7 py-3.5 text-sm font-medium text-midnight transition-colors hover:bg-midnight hover:text-white"
            >
              Conheça a Clínica
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-12 flex items-center gap-6 sm:gap-10"
          >
            <Stat value={2400} suffix="+" label="Pacientes" />
            <div className="h-10 w-px bg-midnight/15" />
            <Stat value={14} label="Anos de experiência" />
            <div className="h-10 w-px bg-midnight/15" />
            <Stat value={98} suffix="%" label="Satisfação" />
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div initial="hidden" animate="visible" variants={fadeInRight} className="relative">
          <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_80px_-30px_rgba(46,109,164,0.45)]">
            <img
              src={heroClinic}
              alt="Ambiente moderno e sofisticado da Clínica Dra. Isabela Voss"
              className="h-[560px] w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lift sm:-left-8"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-light">
              <ShieldCheck className="h-5 w-5 text-blue" />
            </div>
            <div>
              <p className="text-sm font-semibold text-midnight">Ambiente 100% Esterilizado</p>
              <p className="text-xs text-clinic-gray">Protocolos rigorosos de biossegurança</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="absolute -top-5 right-4 rounded-2xl bg-white px-4 py-3 shadow-lift"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-1 text-xs font-semibold text-midnight">4.9 no Google</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
