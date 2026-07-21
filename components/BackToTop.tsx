"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      title="Back to Top"
      className={`fixed bottom-8 right-8 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-pink transition-all duration-300 ${
        visible ? "visible scale-100 opacity-100" : "invisible scale-0 opacity-0"
      }`}
    >
      <ArrowUp className="h-6 w-6 text-black" />
    </a>
  );
}
