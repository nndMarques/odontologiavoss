import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#equipe", label: "Equipe" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
      style={{ boxShadow: scrolled ? "0 8px 32px rgba(26,35,50,0.08)" : "0 1px 0 rgba(26,35,50,0.04)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-display text-3xl font-semibold tracking-[0.18em] text-midnight">VOSS</span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.32em] text-clinic-gray">Odontologia</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-midnight/80 transition-colors hover:text-blue"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="#contato"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-shadow hover:shadow-lift lg:inline-flex"
        >
          <CalendarDays className="h-4 w-4" />
          Agendar Consulta
        </motion.a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="rounded-full p-2 text-midnight lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="fixed right-0 top-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-midnight px-8 py-8 text-white"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl tracking-[0.18em]">VOSS</span>
                <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="p-2">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-12 flex flex-col gap-6">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-white/90 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue px-5 py-3 text-sm font-medium text-white"
              >
                <CalendarDays className="h-4 w-4" />
                Agendar Consulta
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
