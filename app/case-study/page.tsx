// app/case-study/page.tsx
import Link from "next/link";
import { projects, testimonials } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — How We Solve Real Problems",
  description:
    "In-depth case studies from PraDha Solutions. See how we reduced load times by 81%, built offline-first POS systems, and scaled SaaS platforms for 10,000+ users.",
  alternates: {
    canonical: "https://www.pradha.xyz/case-study",
  },
  openGraph: {
    title: "Case Studies | PraDha Solutions",
    description:
      "Real results from real projects — performance metrics, technical breakdowns, and client outcomes.",
    url: "https://www.pradha.xyz/case-study",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const featured = projects.filter((p) => p.featured);

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < n ? "text-gold" : "text-stone-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-cream border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3.5px] uppercase mb-3">
              <span className="w-6 h-px bg-gold" />
              PraDha Solutions
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Case <em className="text-gold not-italic italic">Studies</em>
            </h1>
          </div>
          <p className="text-gray-500 text-base leading-relaxed">
            A transparent look at how we approach problems — from the first
            brief to final results. Real clients, real challenges, measurable
            outcomes.
          </p>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-20 px-6 md:px-10 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3.5px] uppercase mb-3">
            <span className="w-6 h-px bg-gold" />
            How we work
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-tight mb-14">
            Our <em className="text-gold not-italic italic">Process</em>
          </h2>

          <div className="grid md:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We start by understanding your business, users, and goals — not just the feature list. A clear brief prevents expensive rework later.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Wireframes → Figma prototype → your approval. We design with your real content, not placeholder text, so there are no surprises at handoff.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Iterative development with weekly demos. You see progress every week — not a big reveal at the end. Clean code, documented and tested.",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "We handle deployment, performance testing, and browser QA. Every project includes post-launch support so you're never left stranded.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white p-8 md:p-10 group hover:bg-cream transition-colors"
              >
                <p className="font-serif text-5xl font-bold text-stone-200 leading-none mb-4 group-hover:text-gold/20 transition-colors">
                  {s.step}
                </p>
                <h3 className="font-serif text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Deep-Dives ── */}
      <section className="py-20 px-6 md:px-10 bg-cream border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3.5px] uppercase mb-3">
            <span className="w-6 h-px bg-gold" />
            Featured cases
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-tight mb-14">
            Project <em className="text-gold not-italic italic">Deep-Dives</em>
          </h2>

          <div className="flex flex-col gap-px bg-stone-200 border border-stone-200">
            {featured.map((p, i) => (
              <div key={p.id} className="bg-white">
                <div className="grid md:grid-cols-[60px_1fr_1fr] gap-0">
                  {/* Index number */}
                  <div className="hidden md:flex items-start justify-center pt-10 border-r border-stone-200 pb-10">
                    <span className="font-serif text-3xl font-bold text-stone-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Challenge + Solution */}
                  <div className="p-8 md:p-10 border-r border-stone-200">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[10px] font-medium tracking-[2px] uppercase"
                        style={{ color: p.accentColor }}
                      >
                        {p.industry}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {p.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-6">
                      {p.title}
                    </h3>

                    <div className="mb-5">
                      <p className="text-[10px] tracking-[2px] uppercase font-medium text-gold mb-2">
                        Challenge
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {p.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[2px] uppercase font-medium text-gold mb-2">
                        Solution
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {p.solution}
                      </p>
                    </div>
                  </div>

                  {/* Outcome + Results + CTA */}
                  <div className="p-8 md:p-10 flex flex-col">
                    <div className="mb-6">
                      <p className="text-[10px] tracking-[2px] uppercase font-medium text-gold mb-2">
                        Outcome
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
                        {p.outcome}
                      </p>
                    </div>

                    {/* Results grid */}
                    <div className="grid grid-cols-2 gap-3 p-4 bg-stone-50 border border-stone-100 rounded-sm mb-6">
                      {p.results.map((r) => (
                        <div key={r.label}>
                          <p
                            className="font-serif text-xl font-bold leading-none"
                            style={{ color: p.accentColor }}
                          >
                            {r.value}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                            {r.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2.5 py-1 bg-amber-50 border border-amber-100 text-amber-700 rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-3 flex-wrap">
                      <Link
                        href={`/portfolio/${p.id}`}
                        className="text-[10px] font-medium tracking-widest uppercase px-5 py-3 bg-gold text-white rounded-sm hover:bg-amber-600 transition-colors"
                      >
                        Full Story →
                      </Link>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-medium tracking-widest uppercase px-5 py-3 border border-stone-200 text-gray-500 rounded-sm hover:border-gold hover:text-gold transition-colors"
                        >
                          Live Site ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-6 md:px-10 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3.5px] uppercase mb-3">
            <span className="w-6 h-px bg-gold" />
            Client voices
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-tight mb-14">
            What clients <em className="text-gold not-italic italic">say</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-cream border border-stone-200 rounded-sm p-8 flex flex-col gap-5 hover:border-gold/30 transition-colors"
              >
                <Stars n={t.rating} />
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-stone-200">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {t.role} · {t.company}
                  </p>
                  <p className="text-[10px] text-gold mt-1">{t.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-0 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { n: "10+", l: "Projects delivered" },
              { n: "100%", l: "On-time delivery" },
              { n: "3+", l: "Years experience" },
              { n: "5★", l: "Average client rating" },
            ].map((s) => (
              <div key={s.l} className="bg-black py-14 text-center">
                <p className="font-serif text-5xl font-bold text-gold mb-2">
                  {s.n}
                </p>
                <p className="text-[10px] tracking-widest uppercase text-gray-500">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-10 bg-cream border-t border-stone-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Ready to be our next{" "}
            <em className="text-gold not-italic italic">success story?</em>
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-sm mx-auto">
            Every project here started with a conversation. Let's have ours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-white px-10 py-4 text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-amber-600 transition-colors"
          >
            Book a Free Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
