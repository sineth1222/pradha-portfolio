"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ── Data ──────────────────────────────────────────────────────────────
const projectTypes = [
  { id: "website", label: "Website / Landing Page", icon: "🌐" },
  { id: "webapp", label: "Full-Stack Web App", icon: "⚙️" },
  { id: "mobile", label: "Mobile App", icon: "📱" },
  { id: "ecommerce", label: "E-commerce Store", icon: "🛒" },
  { id: "design", label: "UI / UX Design", icon: "🎨" },
  { id: "brand", label: "Logo & Branding", icon: "✦" },
  { id: "other", label: "Other / Not sure yet", icon: "💬" },
];

const budgets = [
  { id: "b1", label: "Rs. 10k – 30k", sublabel: "Landing pages, small sites" },
  { id: "b2", label: "Rs. 30k – 75k", sublabel: "Web apps, e-commerce" },
  { id: "b3", label: "Rs. 75k – 150k", sublabel: "Complex platforms" },
  { id: "b4", label: "Rs. 150k+", sublabel: "Enterprise / custom scope" },
  { id: "b5", label: "Not sure yet", sublabel: "Let's discuss" },
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "No fixed deadline",
];

// Generate next 10 available weekday slots (Mon–Fri, 9am–5pm)
function getAvailableSlots() {
  const slots: { date: string; display: string; time: string }[] = [];
  const times = ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let d = new Date();
  d.setDate(d.getDate() + 1); // start tomorrow

  while (slots.length < 8) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      // weekday
      const time = times[slots.length % times.length];
      slots.push({
        date: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
        display: `${days[dow]}, ${d.getDate()} ${months[d.getMonth()]}`,
        time,
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return slots;
}

const availableSlots = getAvailableSlots();

// ── Step indicator ────────────────────────────────────────────────────
function StepBar({ step }: { step: number }) {
  const steps = ["Project type", "Budget & timeline", "Details & booking"];
  return (
    <div className="flex items-center gap-0 mb-12">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-0 flex-1">
          <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                i < step
                  ? "bg-gold text-white"
                  : i === step
                    ? "bg-gold text-white ring-4 ring-gold/20"
                    : "bg-stone-100 text-gray-400 border border-stone-200"
              }`}
            >
              {i < step ? (
                <svg
                  className="w-4 h-4"
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
              ) : (
                i + 1
              )}
            </div>
            <span
              className={`text-[9px] tracking-wide whitespace-nowrap hidden md:block ${i === step ? "text-gold font-medium" : "text-gray-400"}`}
            >
              {s}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`flex-1 h-px mx-2 transition-colors duration-300 ${i < step ? "bg-gold" : "bg-stone-200"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────
export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    slot: "",
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const set = (key: string, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  /*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };*/

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try WhatsApp instead.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-cream border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-end">
          <div>
            <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3.5px] uppercase mb-3">
              <span className="w-6 h-px bg-gold" />
              PraDha Solutions
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-4">
              Let's <em className="text-gold not-italic italic">talk</em>
            </h1>
            <p className="text-gray-500 text-base leading-relaxed">
              Tell us about your project. We'll respond within 24 hours with a
              clear plan and honest pricing.
            </p>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: "⚡",
                title: "24h response",
                sub: "On all weekday enquiries",
              },
              {
                icon: "💬",
                title: "Free consult",
                sub: "No commitment needed",
              },
              { icon: "🔒", title: "NDA available", sub: "On request, always" },
            ].map((t) => (
              <div
                key={t.title}
                className="bg-white border border-stone-200 rounded-sm p-5 text-center"
              >
                <div className="text-2xl mb-2">{t.icon}</div>
                <p className="text-xs font-medium">{t.title}</p>
                <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                  {t.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Layout ── */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_340px] gap-14">
          {/* ── Form ── */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center py-24 bg-cream border border-stone-200 rounded-sm px-8"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl font-bold mb-3">
                  Enquiry received!
                </h3>
                <p className="text-sm text-gray-500 max-w-sm leading-relaxed mb-8">
                  Thanks for reaching out, <strong>{form.name}</strong>. We'll
                  review your project and get back to you at{" "}
                  <strong>{form.email}</strong> within 24 hours — or sooner via
                  WhatsApp.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/94705089955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium tracking-widest uppercase px-7 py-3 bg-[#25D366] text-white rounded-sm hover:bg-green-600 transition-colors"
                  >
                    WhatsApp us now
                  </a>
                  <Link
                    href="/portfolio"
                    className="text-xs font-medium tracking-widest uppercase px-7 py-3 border border-stone-200 text-gray-600 rounded-sm hover:border-gold hover:text-gold transition-colors"
                  >
                    View our work
                  </Link>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <StepBar step={step} />

                <AnimatePresence mode="wait">
                  {/* ── Step 0: Project Type ── */}
                  {step === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="font-serif text-2xl font-bold mb-2">
                        What are you looking to build?
                      </h2>
                      <p className="text-sm text-gray-400 mb-8">
                        Select the type that best describes your project.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3 mb-10">
                        {projectTypes.map((pt) => (
                          <button
                            key={pt.id}
                            type="button"
                            onClick={() => set("projectType", pt.id)}
                            className={`flex items-center gap-4 p-5 text-left rounded-sm border transition-all ${
                              form.projectType === pt.id
                                ? "border-gold bg-amber-50 shadow-sm"
                                : "border-stone-200 hover:border-stone-300 bg-white"
                            }`}
                          >
                            <span className="text-2xl flex-shrink-0">
                              {pt.icon}
                            </span>
                            <span
                              className={`text-sm font-medium ${form.projectType === pt.id ? "text-gold" : ""}`}
                            >
                              {pt.label}
                            </span>
                            {form.projectType === pt.id && (
                              <span className="ml-auto text-gold text-lg">
                                ✓
                              </span>
                            )}
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        disabled={!form.projectType}
                        onClick={() => setStep(1)}
                        className="bg-gold text-white text-xs font-medium tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-amber-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Continue →
                      </button>
                    </motion.div>
                  )}

                  {/* ── Step 1: Budget + Timeline ── */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="font-serif text-2xl font-bold mb-2">
                        Budget & timeline
                      </h2>
                      <p className="text-sm text-gray-400 mb-8">
                        This helps us tailor the right proposal for you.
                      </p>

                      {/* Budget */}
                      <div className="mb-8">
                        <p className="text-[10px] tracking-[2.5px] uppercase text-gray-500 mb-3">
                          Approximate budget
                        </p>
                        <div className="flex flex-col gap-2.5">
                          {budgets.map((b) => (
                            <button
                              key={b.id}
                              type="button"
                              onClick={() => set("budget", b.id)}
                              className={`flex items-center justify-between p-4 text-left rounded-sm border transition-all ${
                                form.budget === b.id
                                  ? "border-gold bg-amber-50"
                                  : "border-stone-200 hover:border-stone-300 bg-white"
                              }`}
                            >
                              <div>
                                <p
                                  className={`text-sm font-medium ${form.budget === b.id ? "text-gold" : ""}`}
                                >
                                  {b.label}
                                </p>
                                <p className="text-[11px] text-gray-400 mt-0.5">
                                  {b.sublabel}
                                </p>
                              </div>
                              {form.budget === b.id && (
                                <span className="text-gold text-lg flex-shrink-0">
                                  ✓
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="mb-10">
                        <p className="text-[10px] tracking-[2.5px] uppercase text-gray-500 mb-3">
                          Preferred timeline
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {timelines.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => set("timeline", t)}
                              className={`p-4 text-sm text-left rounded-sm border transition-all ${
                                form.timeline === t
                                  ? "border-gold bg-amber-50 text-gold font-medium"
                                  : "border-stone-200 hover:border-stone-300 bg-white text-gray-600"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(0)}
                          className="text-xs font-medium tracking-widest uppercase px-8 py-4 border border-stone-200 text-gray-500 rounded-sm hover:border-stone-400 transition-colors"
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          disabled={!form.budget || !form.timeline}
                          onClick={() => setStep(2)}
                          className="bg-gold text-white text-xs font-medium tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-amber-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Continue →
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* ── Step 2: Details + Time Slot ── */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="font-serif text-2xl font-bold mb-2">
                        Your details & preferred slot
                      </h2>
                      <p className="text-sm text-gray-400 mb-8">
                        Pick a consultation slot and leave your project details.
                      </p>

                      {/* Time slots */}
                      <div className="mb-8">
                        <p className="text-[10px] tracking-[2.5px] uppercase text-gray-500 mb-3">
                          Available consultation slots (Sri Lanka Time)
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {availableSlots.map((s) => {
                            const id = `${s.date}-${s.time}`;
                            return (
                              <button
                                key={id}
                                type="button"
                                onClick={() => set("slot", id)}
                                className={`flex items-center justify-between p-4 rounded-sm border text-left transition-all ${
                                  form.slot === id
                                    ? "border-gold bg-amber-50"
                                    : "border-stone-200 hover:border-stone-300 bg-white"
                                }`}
                              >
                                <div>
                                  <p
                                    className={`text-sm font-medium ${form.slot === id ? "text-gold" : ""}`}
                                  >
                                    {s.display}
                                  </p>
                                  <p className="text-[11px] text-gray-400 mt-0.5">
                                    {s.time}
                                  </p>
                                </div>
                                {form.slot === id && (
                                  <span className="text-gold text-lg flex-shrink-0">
                                    ✓
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2">
                          All slots are 30-minute video calls via Google Meet or
                          Zoom.
                        </p>
                      </div>

                      {/* Personal details */}
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] tracking-[2px] uppercase text-gray-500">
                            Full name *
                          </label>
                          <input
                            required
                            value={form.name}
                            onChange={(e) => set("name", e.target.value)}
                            placeholder="Kasun Perera"
                            className="bg-white border border-stone-200 rounded-sm px-4 py-3.5 text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors"
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
                            className="bg-white border border-stone-200 rounded-sm px-4 py-3.5 text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="text-[10px] tracking-[2px] uppercase text-gray-500 block mb-1.5">
                          Company / Organisation
                        </label>
                        <input
                          value={form.company}
                          onChange={(e) => set("company", e.target.value)}
                          placeholder="Optional"
                          className="w-full bg-white border border-stone-200 rounded-sm px-4 py-3.5 text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      <div className="mb-8">
                        <label className="text-[10px] tracking-[2px] uppercase text-gray-500 block mb-1.5">
                          Project brief *
                        </label>
                        <textarea
                          required
                          value={form.message}
                          onChange={(e) => set("message", e.target.value)}
                          rows={5}
                          placeholder="Describe what you want to build, who it's for, any specific features or integrations needed..."
                          className="w-full bg-white border border-stone-200 rounded-sm px-4 py-3.5 text-sm text-black placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors resize-none"
                        />
                      </div>

                      <div className="flex gap-3 flex-wrap">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-xs font-medium tracking-widest uppercase px-8 py-4 border border-stone-200 text-gray-500 rounded-sm hover:border-stone-400 transition-colors"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="bg-gold text-white text-xs font-medium tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-amber-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
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
                              Submitting...
                            </>
                          ) : (
                            "Submit Enquiry →"
                          )}
                        </button>
                        {/*<button
                          type="submit"
                          className="bg-gold text-white text-xs font-medium tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-amber-600 transition-colors"
                        >
                          Submit Enquiry →
                        </button>*/}
                      </div>

                      <p className="text-[10px] text-gray-400 mt-4">
                        Prefer instant chat?{" "}
                        <a
                          href="https://wa.me/94705089955"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold hover:underline"
                        >
                          WhatsApp us directly
                        </a>{" "}
                        for the fastest response.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            )}
          </div>

          {/* ── Right sidebar ── */}
          <div className="flex flex-col gap-6">
            {/* Quick contact */}
            <div>
              <p className="text-[10px] tracking-[3px] uppercase text-gold mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-gold" />
                Quick contact
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/94XXXXXXXXX?text=Hi%20PraDha%2C%20I%27d%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-[#25D366]/6 border border-[#25D366]/25 rounded-sm hover:bg-[#25D366]/12 hover:border-[#25D366]/45 transition-all"
                >
                  <div className="w-9 h-9 rounded-sm bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4.5 h-4.5 text-white w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#075E54]">
                      WhatsApp
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5">
                      Usually replies in minutes
                    </p>
                  </div>
                  <span className="ml-auto text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </a>

                <a
                  href="mailto:sinethmashenka1222@gmail.com"
                  className="group flex items-center gap-3 p-4 bg-amber-50/60 border border-amber-200/50 rounded-sm hover:border-gold/50 transition-all"
                >
                  <div className="w-9 h-9 rounded-sm bg-gold flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">
                      sinethmashenka1222@gmail.com
                    </p>
                  </div>
                  <span className="ml-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* About PraDha */}
            <div className="bg-cream border border-stone-200 rounded-sm p-6">
              <p className="text-[10px] tracking-[3px] uppercase text-gold mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-gold" />
                About PraDha
              </p>
              <div className="flex flex-col gap-3.5">
                {[
                  {
                    dot: "bg-gold",
                    title: "Based in Sri Lanka",
                    sub: "Available for remote work worldwide",
                  },
                  {
                    dot: "bg-green-500",
                    title: "Currently taking projects",
                    sub: "Est. start: 1 – 2 weeks",
                  },
                  {
                    dot: "bg-gold",
                    title: "24h response",
                    sub: "Weekdays, guaranteed",
                  },
                  {
                    dot: "bg-stone-400",
                    title: "NDA available",
                    sub: "On request, no questions asked",
                  },
                ].map((i) => (
                  <div key={i.title} className="flex items-start gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${i.dot} mt-1.5 flex-shrink-0`}
                    />
                    <div>
                      <p className="text-xs font-medium">{i.title}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {i.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-2">
              {[
                { l: "GitHub", href: "#", sub: "github.com/sineth" },
                { l: "LinkedIn", href: "#", sub: "linkedin.com/in/sineth" },
                {
                  l: "Portfolio",
                  href: "https://www.sinethmashenka.shop",
                  sub: "sinethmashenka.shop",
                },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 border border-stone-200 rounded-sm hover:border-gold/40 transition-all"
                >
                  <span className="text-xs font-medium">{s.l}</span>
                  <span className="text-[10px] text-gray-400 group-hover:text-gold transition-colors">
                    {s.sub} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
