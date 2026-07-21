"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 md:px-16">
        <SectionHeading>Get in Touch</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-[700px]"
        >
          <p className="text-muted">
            Are you looking for a fast-performing, mobile-friendly and
            user-friendly website to represent your product or business? Feel
            free to reach out. The quickest way to reach me is via email.
          </p>
          <a
            href="mailto:dr.duke260@gmail.com"
            className="relative mt-6 inline-block border border-pink px-10 py-3 transition-colors hover:bg-pink"
          >
            dr.duke260@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
