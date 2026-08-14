"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icon";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 left-1/2 z-50 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary-light ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon name="arrowUp" className="h-5 w-5" />
    </button>
  );
}
