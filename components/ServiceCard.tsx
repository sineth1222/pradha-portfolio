// components/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function ServiceCard({ icon, title, desc }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
      className="group bg-white p-10 rounded-3xl border border-gl hover:border-gold transition-all duration-300 flex flex-col h-full"
    >
      <div className="text-6xl text-gold mb-8 group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <h3 className="font-serif text-3xl font-semibold mb-4 group-hover:text-gold transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed flex-grow">{desc}</p>

      <div className="mt-8 pt-6 border-t border-gl group-hover:border-gold transition-colors">
        <span className="text-gold text-sm font-medium flex items-center gap-2">
          Learn More
          <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition">
            arrow_forward
          </span>
        </span>
      </div>
    </motion.div>
  );
}
