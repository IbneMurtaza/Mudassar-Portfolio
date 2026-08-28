import { useEffect, useRef, useState } from "react";

/**
 * Reports whether the returned ref has scrolled into view, once, for a
 * fade/rise-in effect. Reduced-motion users still get the flag (so content
 * never stays hidden) — `globals.css` collapses the transition duration to
 * near-zero for them instead of skipping the observer here, which keeps the
 * server- and client-rendered markup identical and avoids a hydration
 * mismatch from branching on `matchMedia` during the initial render.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
