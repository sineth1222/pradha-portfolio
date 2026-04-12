/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project, projects } from "@/data/projects";

/* ─── Browser Mockup ─── */
function BrowserMock({ color }: { color: string }) {
  return (
    <div className={`w-full h-full ${color} flex items-center justify-center`}>
      <div className="w-[82%] bg-white rounded-md border border-stone-200 shadow-sm overflow-hidden">
        <div className="bg-stone-100 px-3 py-2 flex items-center gap-1.5 border-b border-stone-200">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 bg-stone-200 rounded-sm h-3 ml-2" />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <div className="h-1.5 w-2/5 bg-gold/40 rounded-sm" />
          <div className="h-1.5 w-11/12 bg-stone-200 rounded-sm" />
          <div className="h-1.5 w-4/5 bg-stone-200 rounded-sm" />
          <div className="h-1.5 w-3/5 bg-stone-200 rounded-sm" />
        </div>
      </div>
    </div>
  );
}

//update1234
/* ─── Single Project Card ─── */
export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white border border-stone-200 overflow-hidden cursor-pointer hover:shadow-xl hover:border-stone-300 transition-all duration-300"
      onClick={onClick}
    >
      {/* Thumb */}
      <div className="h-44 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <BrowserMock color={project.color} />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-[10px] tracking-[2.5px] uppercase text-gold font-medium mb-2">
          {project.category}
        </p>
        <h3 className="font-serif text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <div className="flex gap-1.5 flex-wrap">
            {project.tech.slice(0, 2).map((t) => (
              <span
                key={t}
                className="text-[10px] px-2.5 py-1 bg-amber-50 border border-amber-200/60 text-amber-700 rounded-sm"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 2 && (
              <span className="text-[10px] px-2.5 py-1 bg-stone-100 text-gray-400 rounded-sm">
                +{project.tech.length - 2}
              </span>
            )}
          </div>

          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] px-3 py-1.5 border border-stone-200 text-gray-500 hover:border-stone-400 hover:text-black transition-colors rounded-sm"
              >
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] px-3 py-1.5 bg-gold text-white hover:bg-amber-600 transition-colors rounded-sm font-medium"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Project Detail Panel ─── */
function ProjectDetail({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mt-10 bg-white border border-stone-200 shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div
        className="px-6 md:px-12 py-8 md:py-10 border-b border-stone-200 flex flex-col gap-4"
        style={{ backgroundColor: "#f5f2ec" }}
      >
        <div>
          <div className="flex items-center gap-2 text-gold text-[10px] tracking-[3px] uppercase mb-3">
            <span className="w-4 h-px bg-gold" />
            {project.category}
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
            {project.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            {project.description}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-full md:w-auto flex items-center justify-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-black border border-stone-200 hover:border-stone-400 px-4 py-2.5 rounded-sm transition-colors"
        >
          ✕ Close
        </button>
      </div>

      {/* Body */}
      <div className="px-6 md:px-12 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {/* Preview */}
        <div className="md:col-span-2">
          <div className="w-full h-44 md:h-56 rounded-sm overflow-hidden border border-stone-200">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <BrowserMock color={project.color} />
            )}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-[10px] tracking-[3px] uppercase text-gold mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-gold" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-3 py-1.5 bg-amber-50 border border-amber-200/60 text-amber-700 rounded-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[3px] uppercase text-gold mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-gold" />
              Links
            </h4>
            <div className="flex flex-col gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm px-4 py-3 bg-gold text-white rounded-sm hover:bg-amber-600 transition-colors"
                >
                  View Live Site
                  <span>↗</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm px-4 py-3 border border-stone-200 text-gray-600 rounded-sm hover:border-gold hover:text-gold transition-colors"
                >
                  View Source Code
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Selected Works Section ─── */
export default function SelectedWorks() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.slice(0, 6);

  const handleSelect = (project: Project) => {
    if (selected?.id === project.id) {
      setSelected(null);
    } else {
      setSelected(project);
      setTimeout(() => {
        document
          .getElementById("project-detail")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-10 "
      style={{ backgroundColor: "#f5f2ec" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-14">
          <div>
            <div className="flex items-center gap-3 text-gold text-[10px] tracking-[3.5px] uppercase mb-2">
              <span className="w-6 h-px bg-gold" />
              Portfolio
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
              Selected <em className="text-gold not-italic italic">Works</em>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:flex items-center gap-2 text-gold text-xs font-medium tracking-widest uppercase hover:gap-3 transition-all"
          >
            View All <span>→</span>
          </Link>
        </div>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onClick={() => handleSelect(p)}
            />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-widest uppercase border border-gold/40 px-6 py-3 rounded-sm hover:bg-gold hover:text-white transition-all"
          >
            View All Works →
          </Link>
        </div>

        {/* Detail panel */}
        <div id="project-detail">
          <AnimatePresence mode="wait">
            {selected && (
              <ProjectDetail
                key={selected.id}
                project={selected}
                onClose={() => setSelected(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
