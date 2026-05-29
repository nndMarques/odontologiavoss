import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/lib/motion-presets";

const inputCls =
  "w-full rounded-xl border border-midnight/10 bg-white px-4 py-3 text-sm text-midnight placeholder:text-clinic-gray focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20 transition";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
        {/* Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInLeft}
        >
          <span className="eyebrow">AGENDE SUA CONSULTA</span>
          <h2 className="mt-4 font-display text-4xl font-light leading-[1.1] text-midnight sm:text-5xl">
            Dê o primeiro<br />passo para o<br />sorriso ideal
          </h2>
          <span className="mt-6 block"><span className="deco-line" /></span>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <label className="text-xs font-medium uppercase tracking-wider text-clinic-gray">Nome completo</label>
              <input required type="text" placeholder="Seu nome" className={`${inputCls} mt-2`} />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-clinic-gray">E-mail</label>
              <input required type="email" placeholder="voce@email.com" className={`${inputCls} mt-2`} />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-clinic-gray">WhatsApp</label>
              <input required type="tel" placeholder="(11) 99999-9999" className={`${inputCls} mt-2`} />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-clinic-gray">Especialidade</label>
              <select className={`${inputCls} mt-2`} defaultValue="">
                <option value="" disabled>Selecione...</option>
                <option>Implantodontia</option>
                <option>Clareamento Dental</option>
                <option>Ortodontia</option>
                <option>Odontologia Estética</option>
                <option>Odontopediatria</option>
                <option>Prevenção & Limpeza</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-clinic-gray">Data preferida</label>
              <input type="date" className={`${inputCls} mt-2`} />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium uppercase tracking-wider text-clinic-gray">Período</label>
              <div className="mt-2 flex gap-3">
                {["Manhã", "Tarde"].map((p) => (
                  <label key={p} className="flex flex-1 cursor-pointer items-center gap-2 rounded-xl border border-midnight/10 bg-white px-4 py-3 text-sm text-midnight transition hover:border-blue">
                    <input type="radio" name="periodo" className="accent-[var(--blue)]" />
                    {p}
                  </label>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium uppercase tracking-wider text-clinic-gray">Mensagem</label>
              <textarea rows={4} placeholder="Conte-nos um pouco sobre o que procura..." className={`${inputCls} mt-2 resize-none`} />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue px-7 py-4 text-sm font-medium text-white shadow-soft hover:shadow-lift"
            >
              <CalendarDays className="h-4 w-4" />
              {sent ? "Recebemos seu agendamento ✓" : "Confirmar Agendamento"}
            </motion.button>
            <p className="sm:col-span-2 text-center text-xs text-clinic-gray">
              Responderemos em até 2h no horário comercial.
            </p>
          </form>
        </motion.div>

        {/* Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInRight}
          className="flex flex-col"
        >
          <div className="rounded-2xl bg-offwhite p-8 shadow-soft">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-light">
                <MapPin className="h-5 w-5 text-blue" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-clinic-gray">Endereço</p>
                <p className="mt-1 text-midnight">Av. Industrial, 1200 · Sala 304 · Santo André, SP</p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-light">
                <Clock className="h-5 w-5 text-blue" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-clinic-gray">Horários</p>
                <p className="mt-1 text-midnight">Seg–Sex 8h–19h · Sáb 8h–13h</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a href="https://wa.me/5511999999999" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue px-4 py-3 text-sm font-medium text-white">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="tel:+551144444444" className="inline-flex items-center justify-center gap-2 rounded-full border border-midnight/15 px-4 py-3 text-sm font-medium text-midnight hover:bg-midnight hover:text-white transition-colors">
                <Phone className="h-4 w-4" /> Ligar
              </a>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-2xl bg-blue-light shadow-soft">
            <iframe
              title="Mapa Santo André"
              src="https://www.google.com/maps?q=Santo+Andr%C3%A9+SP&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />
          </div>
          <a
            href="https://www.google.com/maps?q=Santo+Andr%C3%A9+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue px-5 py-2.5 text-sm font-medium text-blue transition-colors hover:bg-blue hover:text-white"
          >
            Abrir no Google Maps <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
