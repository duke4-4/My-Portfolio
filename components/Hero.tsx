"use client";

import { motion } from "framer-motion";
import Nav from "./Nav";
import { socialLinks } from "@/lib/data";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-black"
    >
      <Nav />

      <div className="relative flex flex-1 items-center justify-center">
        <div className="relative flex w-full max-w-[1400px] items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pointer-events-none relative z-0 w-full select-none text-center font-jost font-normal leading-[0.85] text-cream"
          >
            <span className="block text-huge">TASHINGA</span>
            <span className="block text-huge">CHIZENGWE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="pointer-events-none absolute z-10 flex h-[65vh] max-w-[45vw] items-end justify-center sm:h-[75vh]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/duke-profile.jpg"
              alt="Tashinga Duke Chizengwe"
              className="h-full w-auto object-contain object-bottom grayscale"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 flex flex-col gap-6 px-6 pb-10 sm:flex-row sm:items-end sm:justify-between sm:px-10 md:px-16"
      >
        <div className="flex flex-col gap-4">
          <p className="max-w-xs font-jost text-lg text-muted sm:max-w-sm">
            Software Developer based in Harare, Zimbabwe.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                title={social.name}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-pink"
              >
                <img src={social.icon} alt={social.name} className="h-4 w-4 invert" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <span className="font-jost text-lg text-muted">
            Available for freelance work
          </span>
          <a
            href="#contact"
            className="relative inline-block border border-pink bg-pink px-10 py-3 font-jost transition-colors hover:bg-transparent"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </header>
  );
}
