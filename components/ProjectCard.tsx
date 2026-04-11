// components/ProjectCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link?: string;
}

export default function ProjectCard({
  title,
  category,
  image,
  link = "#",
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-3xl overflow-hidden border border-gl hover:border-gold shadow-sm hover:shadow-xl transition-all"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-8">
        <p className="text-gold text-xs tracking-widest uppercase font-medium mb-2">
          {category}
        </p>

        <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-gold transition-colors">
          {title}
        </h3>

        <Link
          href={link}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gold transition-colors"
        >
          View Project
          <span className="material-symbols-outlined text-base">
            north_east
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
