import { motion } from "framer-motion";
import { Award, Users, Star, Stethoscope } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation";
import { fadeInUp, stagger } from "@/lib/motion-presets";

const stats = [
  { icon: Award, value: 14, suffix: "", label: "Anos", desc: "De experiência comprovada no mercado" },
  { icon: Users, value: 2400, suffix: "+", label: "Pacientes", desc: "Transformados e satisfeitos" },
  { icon: Star, value: 98, suffix: "%", label: "Satisfação", desc: "Em pesquisa interna" },
  { icon: Stethoscope, value: 8, suffix: "", label: "Especialidades", desc: "Toda odontologia em um só lugar" },
];

function StatCard({ s, i }: { s: typeof stats[number]; i: number }) {
  const { ref, inView } = useScrollAnimation<HTMLDivElement>(0.3);
  const n = useCountUp(s.value, 1500, inView);
  return (
    <motion.div ref={ref} variants={fadeInUp} className="flex flex-col items-center text-center" custom={i}>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-light">
        <s.icon className="h-6 w-6 text-blue" />
      </div>
      <span className="mt-5 font-display text-5xl font-semibold text-gold">
        {n.toLocaleString("pt-BR")}{s.suffix}
      </span>
      <p className="mt-2 font-sub text-base font-semibold text-midnight">{s.label}</p>
      <p className="mt-2 max-w-[200px] text-sm text-clinic-gray">{s.desc}</p>
    </motion.div>
  );
}

export default function WhyUs() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EBF3FB 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">POR QUE NOS ESCOLHER</span>
          <h2 className="h2-fluid mt-4 font-display font-light text-midnight">
            Números que falam<br />por si só
          </h2>
          <span className="mt-6 block"><span className="deco-line" /></span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <StatCard key={s.label} s={s} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
