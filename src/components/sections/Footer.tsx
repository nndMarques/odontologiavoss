import { Instagram, Facebook, Linkedin } from "lucide-react";

const quick = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#equipe", label: "Equipe" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl font-semibold tracking-[0.18em]">VOSS</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-white/60">Odontologia</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
              Odontologia de excelência em Santo André, unindo tecnologia, arte e acolhimento em cada atendimento.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="Rede social" className="rounded-full border border-white/15 p-2 text-white/80 transition-colors hover:border-gold hover:text-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">Navegação</p>
            <ul className="mt-5 space-y-3 text-sm">
              {quick.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/80 transition-colors hover:text-[#EBF3FB]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">Contato</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Av. Industrial, 1200 · Sala 304</li>
              <li>Santo André · SP</li>
              <li>(11) 4444-4444</li>
              <li>contato@vossodonto.com.br</li>
              <li className="pt-2">Seg–Sex 8h–19h · Sáb 8h–13h</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-white/15" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-white/50 md:flex-row md:items-center">
          <p>
            © 2025 Voss Odontologia. Desenvolvido por{" "}
            <span className="font-medium text-blue" style={{ color: "#7FB3E0" }}>Fernando</span>.
          </p>
          <p>Responsável Técnica: Dra. Isabela Voss · CRO-SP 98.234</p>
        </div>
      </div>
    </footer>
  );
}
