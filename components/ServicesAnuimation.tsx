"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, Service } from "@/data/services";

// ── Contact Modal ──────────────────────────────────────────────────────────────
interface ContactModalProps {
  plan: { name: string; price: string } | null;
  service: Service;
  onClose: () => void;
}

function ContactModal({ plan, service, onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    timeline: "",
    details: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const timelines = [
    "As soon as possible",
    "Within 1 month",
    "1 – 3 months",
    "3 – 6 months",
    "No fixed deadline",
  ];

  const set = (key: string, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          projectType: service.title,
          budget: plan?.price ?? "Not selected",
          timeline: form.timeline,
          slot: "",
          message: `[Plan: ${plan?.name ?? "—"}]\n\n${form.details}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try WhatsApp instead.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    // Backdrop
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(10,9,8,0.72)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Modal panel */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg bg-white shadow-2xl overflow-hidden"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Gold top bar */}
        <div className="h-0.5 w-full bg-gold" />

        {/* Close btn */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black transition-colors border border-stone-200 hover:border-stone-400 rounded-sm text-sm"
        >
          ✕
        </button>

        <div className="px-8 py-8">
          {submitted ? (
            // ── Success state ──
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center py-8 gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold">Enquiry sent!</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Thanks, <strong>{form.name}</strong>. We'll get back to you at{" "}
                <strong>{form.email}</strong> within 24 hours.
              </p>
              <a
                href="https://wa.me/94705089955"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-xs font-medium tracking-widest uppercase px-8 py-3 bg-[#25D366] text-white hover:bg-green-600 transition-colors"
              >
                WhatsApp for faster reply
              </a>
              <button
                onClick={onClose}
                className="text-xs text-gray-400 hover:text-black transition-colors tracking-widest uppercase"
              >
                Close
              </button>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-gold text-[10px] tracking-[3px] uppercase mb-1">
                  <span className="w-4 h-px bg-gold" />
                  {service.title}
                </div>
                <h2 className="font-serif text-2xl font-bold">
                  {plan ? `Get started with ${plan.name}` : "Request a quote"}
                </h2>
                {plan && (
                  <p className="text-sm text-gray-400 mt-1">
                    {plan.price} plan selected
                  </p>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[2px] uppercase text-gray-500">
                      Full name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Kasun Perera"
                      className="bg-stone-50 border border-stone-200 px-3.5 py-3 text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[2px] uppercase text-gray-500">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="kasun@company.lk"
                      className="bg-stone-50 border border-stone-200 px-3.5 py-3 text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[2px] uppercase text-gray-500">
                      Phone *
                    </label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="+94 77 000 0000"
                      className="bg-stone-50 border border-stone-200 px-3.5 py-3 text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[2px] uppercase text-gray-500">
                      Company
                    </label>
                    <input
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      placeholder="Optional"
                      className="bg-stone-50 border border-stone-200 px-3.5 py-3 text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[2px] uppercase text-gray-500">
                    Project timeline *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => set("timeline", t)}
                        className={`p-3 text-xs text-left border transition-all ${
                          form.timeline === t
                            ? "border-gold bg-amber-50 text-gold font-medium"
                            : "border-stone-200 bg-stone-50 text-gray-500 hover:border-stone-300"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project details */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[2px] uppercase text-gray-500">
                    Project details *
                  </label>
                  <textarea
                    required
                    value={form.details}
                    onChange={(e) => set("details", e.target.value)}
                    rows={4}
                    placeholder="Describe your project, goals, any specific features or integrations needed..."
                    className="bg-stone-50 border border-stone-200 px-3.5 py-3 text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                {error && <p className="text-xs text-red-500">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting || !form.timeline}
                  className="bg-gold text-white text-xs font-medium tracking-widest uppercase py-4 hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry →"
                  )}
                </button>

                <p className="text-[10px] text-gray-400 text-center">
                  Or{" "}
                  <a
                    href="https://wa.me/94705089955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    WhatsApp us
                  </a>{" "}
                  for instant response.
                </p>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Service Tile (grid card) ───────────────────────────────────────────────────
function ServiceTile({
  service,
  isOpen,
  onClick,
}: {
  service: Service;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: isOpen ? 0 : -2 }}
      onClick={onClick}
      className={`group relative bg-white border p-10 cursor-pointer overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-gold shadow-md"
          : "border-stone-200 hover:border-gold/40 hover:shadow-lg"
      }`}
    >
      {/* Gold bottom bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gold transition-transform duration-300 origin-left ${
          isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />

      <p
        className={`font-serif text-5xl font-bold leading-none mb-6 transition-colors ${
          isOpen ? "text-gold/30" : "text-stone-200 group-hover:text-gold/20"
        }`}
      >
        {service.num}
      </p>
      <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        {service.shortDesc}
      </p>

      <div
        className={`flex items-center gap-2 text-gold text-xs font-medium tracking-widest uppercase transition-all duration-200 ${
          isOpen ? "" : "group-hover:translate-x-0"
        }`}
      >
        {isOpen ? "Hide details" : "More details"}
        <span
          className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`}
        >
          →
        </span>
      </div>
    </motion.div>
  );
}

// ── Plans Widget (expanded below grid) ────────────────────────────────────────
function PlansWidget({
  service,
  onPlanSelect,
}: {
  service: Service;
  onPlanSelect: (plan: { name: string; price: string }) => void;
}) {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mt-0 bg-white border border-gold/30 border-t-0 overflow-hidden shadow-sm"
    >
      {/* Service header strip */}
      <div className="bg-cream px-8 md:px-12 py-8 border-b border-stone-200 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3px] uppercase mb-2">
            <span className="w-5 h-px bg-gold" />
            Service {service.num}
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
            {service.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            {service.fullDesc}
          </p>
        </div>

        {/* Deliverables + Tech — compact sidebar */}
        <div className="flex flex-col gap-4 min-w-[200px]">
          <div>
            <p className="text-[10px] tracking-[2.5px] uppercase text-gold mb-2 flex items-center gap-2">
              <span className="w-3 h-px bg-gold" />
              Deliverables
            </p>
            <ul className="flex flex-col gap-1.5">
              {service.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 text-xs text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1 flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {service.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] px-2.5 py-1 bg-amber-50 border border-amber-200/60 text-amber-700 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="px-8 md:px-12 py-8">
        <h4 className="text-[10px] tracking-[3px] uppercase text-gold mb-6 flex items-center gap-3">
          <span className="w-4 h-px bg-gold" />
          Choose a plan
        </h4>
        <div className="grid sm:grid-cols-3 gap-4">
          {service.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col border transition-all duration-200 ${
                plan.highlight
                  ? "border-gold bg-gold/5"
                  : "border-stone-200 bg-stone-50 hover:border-stone-300"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[9px] tracking-widest px-3 py-1 uppercase">
                  Popular
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-1">
                  {plan.name}
                </p>
                <p className="font-serif text-2xl font-bold text-black mb-0.5">
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
                <button
                  type="button"
                  onClick={() =>
                    onPlanSelect({ name: plan.name, price: plan.price })
                  }
                  className={`mt-auto text-center text-[11px] font-medium tracking-widest uppercase py-3 transition-colors cursor-pointer ${
                    plan.highlight
                      ? "bg-gold text-white hover:bg-amber-600"
                      : "border border-stone-300 text-gray-600 hover:border-gold hover:text-gold"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Services Section ──────────────────────────────────────────────────────
export default function ServicesAnimation() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [modal, setModal] = useState<{
    plan: { name: string; price: string } | null;
    service: Service;
  } | null>(null);

  const selectedService = services.find((s) => s.id === openId) ?? null;

  const handleTileClick = (service: Service) => {
    if (openId === service.id) {
      setOpenId(null);
    } else {
      setOpenId(service.id);
      setTimeout(() => {
        document
          .getElementById(`plans-${service.id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  };

  const handlePlanSelect = (
    service: Service,
    plan: { name: string; price: string },
  ) => {
    setModal({ plan, service });
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
              isOpen={openId === s.id}
              onClick={() => handleTileClick(s)}
            />
          ))}
        </div>

        {/* Plans widget — slides in below grid */}
        <div id={`plans-${openId}`}>
          <AnimatePresence mode="wait">
            {selectedService && (
              <PlansWidget
                key={selectedService.id}
                service={selectedService}
                onPlanSelect={(plan) => handlePlanSelect(selectedService, plan)}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {modal && (
          <ContactModal
            plan={modal.plan}
            service={modal.service}
            onClose={() => setModal(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
