"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-b border-white/10 py-32">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 md:px-16">
        <SectionHeading>About Me</SectionHeading>

        <div className="mt-16 flex flex-col-reverse items-center gap-12 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:flex-[0_0_38%]"
          >
            <p className="text-muted">
              Tashinga is a freelance UI/UX designer and software developer based in
              Harare, Zimbabwe. Being the go-to designer and developer is the goal. I
              love to turn complex problems into simple, beautiful and intuitive
              designs and websites. When I&rsquo;m not designing or writing code, you
              are sure to find me at the gym or logged onto EA playing FIFA.
            </p>
            <a
              href="/Duke-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="relative mt-6 inline-block border border-pink px-10 py-3 transition-colors hover:bg-pink"
            >
              My Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:flex-1"
          >
            <img
              src="/images/duke-profile.jpg"
              alt="Tashinga Duke Chizengwe"
              className="mx-auto max-w-sm rounded-sm border border-white/10 grayscale md:mx-0 md:ml-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
