import { useEffect, useRef, useState } from "react";

/**
 * Animates `targets` from 0 to their final value with a cubic ease-out once
 * the returned ref scrolls into view. Runs once. Skips the animation and
 * jumps straight to final values when the user prefers reduced motion.
 */
export function useCountUp(targets: number[], enabled: boolean) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [values, setValues] = useState<number[]>(() => (enabled ? targets.map(() => 0) : targets));
  const startedRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const run = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValues(targets);
        return;
      }
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValues(targets.map((v) => v * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !startedRef.current) {
          startedRef.current = true;
          run();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  return { ref, values };
}
