"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Holds a child's CSS animations until it scrolls into view. Without
 * JavaScript the attribute is never set, so animations simply run on load.
 */
export function RevealOnView({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;

    el.dataset.waiting = "";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          delete el.dataset.waiting;
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
