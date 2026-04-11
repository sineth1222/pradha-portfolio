"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, Service } from "@/data/services";

/* ─── ServiceCard (grid tile) ─── */
function ServiceTile({
  service,
  onClick,
}: {
  service: Service;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      onClick={onClick}
      className="group relative bg-white border border-stone-200 p-10 cursor-pointer overflow-hidden transition-all duration-300 hover:border-gold/40 hover:shadow-lg"
    >
      {/* Gold bottom bar on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <p className="font-serif text-5xl font-bold text-stone-200 leading-none mb-6 group-hover:text-gold/20 transition-colors">
        {service.num}
      </p>
      <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        {service.shortDesc}
      </p>

      <div className="flex items-center gap-2 text-gold text-xs font-medium tracking-widest uppercase">
        See plans
        <span className="transition-transform group-hover:translate-x-1 duration-200">
          →
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Detail Drawer ─── */
function ServiceDetail({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-12 bg-white border border-stone-200 shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="bg-cream px-8 md:px-12 py-10 border-b border-stone-200 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3px] uppercase mb-3">
            <span className="w-5 h-px bg-gold" />
            Service {service.num}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            {service.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            {service.fullDesc}
          </p>
        </div>
        <button
          onClick={onClose}
          className="self-start flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors border border-stone-200 px-4 py-2 rounded-sm hover:border-stone-400 flex-shrink-0"
        >
          ✕ Close
        </button>
      </div>

      <div className="px-8 md:px-12 py-10 grid md:grid-cols-3 gap-10">
        {/* Plans */}
        <div className="md:col-span-2">
          <h4 className="text-xs tracking-[3px] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-4 h-px bg-gold" />
            Pricing Plans
          </h4>
          <div className="grid sm:grid-cols-3 gap-4">
            {service.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-sm p-6 border flex flex-col ${
                  plan.highlight
                    ? "border-gold bg-gold/5"
                    : "border-stone-200 bg-stone-50"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] tracking-widest px-3 py-1 rounded-sm uppercase">
                    Popular
                  </div>
                )}
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-1">
                  {plan.name}
                </p>
                <p className="font-serif text-2xl font-bold text-black mb-1">
                  {plan.price}
                </p>
                {plan.period && (
                  <p className="text-[11px] text-gray-400 mb-4">
                    {plan.period}
                  </p>
                )}
                <ul className="flex flex-col gap-2 mt-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs text-gray-600"
                    >
                      <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:sinethmashenka@gmail.com"
                  className={`mt-auto text-center text-[11px] font-medium tracking-widest uppercase py-3 rounded-sm transition-colors ${
                    plan.highlight
                      ? "bg-gold text-white hover:bg-amber-600"
                      : "border border-stone-300 text-gray-600 hover:border-gold hover:text-gold"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables + Tech */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-xs tracking-[3px] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-4 h-px bg-gold" />
              Deliverables
            </h4>
            <ul className="flex flex-col gap-2.5">
              {service.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[3px] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-4 h-px bg-gold" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-3 py-1.5 bg-amber-50 border border-amber-200/60 text-amber-700 rounded-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Services Section ─── */
export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  const handleSelect = (service: Service) => {
    if (selected?.id === service.id) {
      setSelected(null);
    } else {
      setSelected(service);
      // Scroll to detail after a tick
      setTimeout(() => {
        document
          .getElementById("service-detail")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section id="services" className="py-24 bg-cream px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3.5px] uppercase mb-2">
            <span className="w-6 h-px bg-gold" />
            What I offer
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Services built for your{" "}
            <em className="text-gold not-italic italic">business</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
          {services.map((s) => (
            <ServiceTile
              key={s.id}
              service={s}
              onClick={() => handleSelect(s)}
            />
          ))}
        </div>

        {/* Detail panel */}
        <div id="service-detail">
          <AnimatePresence mode="wait">
            {selected && (
              <ServiceDetail
                key={selected.id}
                service={selected}
                onClose={() => setSelected(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
