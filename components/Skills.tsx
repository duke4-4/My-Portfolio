"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="border-b border-white/10 py-32">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 md:px-16">
        <SectionHeading>My Skill Deck</SectionHeading>

        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-12">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              className="flex flex-col items-center transition-transform hover:scale-110"
            >
              <img src={skill.icon} alt={`${skill.name} icon`} className="mb-3 h-16 w-16" />
              <span className="text-lg text-cream">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
