import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { fadeIn, stagger } from "@/lib/motion-presets";

const cases = [
  {
    before: "https://images.unsplash.com/photo-1581585095852-6cdb45c6becc?w=800&q=80",
    after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
    treatment: "Clareamento + Facetas em Resina",
    duration: "3 sessões · 4 semanas",
  },
  {
    before: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=800&q=80",
    after: "https://images.unsplash.com/photo-1612224330446-d2b78d9c2bbe?w=800&q=80",
    treatment: "Implante Unitário + Coroa",
    duration: "5 meses",
  },
  {
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    after: "https://images.unsplash.com/photo-1581585504054-ec0bedcfecb1?w=800&q=80",
    treatment: "Alinhadores Invisíveis",
    duration: "11 meses",
  },
];

function Slider({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const clipPath = useTransform(x, (v) => `inset(0 ${(1 - v) * 100}% 0 0)`);
  const left = useTransform(x, (v) => `${v * 100}%`);
  const [dragging, setDragging] = useState(false);

  const updateFromClient = (clientX: number) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    const v = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    x.set(v);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-72 w-full select-none overflow-hidden rounded-2xl"
      onPointerDown={(e) => {
        setDragging(true);
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        updateFromClient(e.clientX);
      }}
      onPointerMove={(e) => dragging && updateFromClient(e.clientX)}
      onPointerUp={() => setDragging(false)}
    >
      <img src={before} alt="Antes" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <motion.img
        src={after}
        alt="Depois"
        loading="lazy"
        style={{ clipPath }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-midnight">
        Antes
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-midnight">
        Depois
      </span>
      <motion.div
        style={{ left }}
        className="absolute top-0 bottom-0 z-10 -translate-x-1/2 cursor-ew-resize"
      >
        <div className="h-full w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]" />
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-midnight shadow-lift">
          <span className="text-xs">◀ ▶</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-midnight py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold">TRANSFORMAÇÕES</span>
          <h2 className="h2-fluid mt-4 font-display font-light">
            Antes e depois
          </h2>
          <span className="mt-6 block"><span className="deco-line-gold" /></span>
          <p className="mt-6 text-white/70">Resultados reais que transformam vidas e autoestima.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {cases.map((c, i) => (
            <motion.div key={i} variants={fadeIn} className="rounded-2xl bg-white/[0.04] p-4 backdrop-blur">
              <Slider before={c.before} after={c.after} />
              <div className="mt-5 px-1">
                <p className="font-sub font-semibold">{c.treatment}</p>
                <p className="mt-1 text-xs text-white/50">{c.duration}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-xs text-white/40">
          Resultados fictícios para fins ilustrativos de portfólio.
        </p>
      </div>
    </section>
  );
}
