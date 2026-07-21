"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="border-b border-white/10 py-32">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 md:px-16">
        <SectionHeading>My Work</SectionHeading>

        <div className="mt-16 flex flex-col gap-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col gap-10 md:flex-row md:items-center ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:flex-[0_0_32%]">
                <h3 className="font-jost text-3xl text-cream">{project.title}</h3>
                <p className="my-6 text-muted">{project.description}</p>
                <ul className="mb-8 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="flex items-center gap-6">
                  {project.siteUrl && (
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative inline-block border-b border-pink pb-1 transition-colors hover:text-pink"
                    >
                      Visit Site <span className="pl-2">&rarr;</span>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="View Source Code"
                      className="transition-transform hover:scale-110"
                    >
                      <img src="/images/github.svg" alt="GitHub" className="h-7 invert" />
                    </a>
                  )}
                </div>
              </div>

              <div className="md:flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-sm border border-white/10"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
