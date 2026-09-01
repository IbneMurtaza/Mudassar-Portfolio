"use client";

import { useEffect, useId } from "react";

declare global {
  interface Window {
    particlesJS?: (tagId: string, params: Record<string, unknown>) => void;
  }
}

const CONFIG = {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 900 } },
    color: { value: "#ece7df" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true, anim: { enable: false } },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 140, color: "#e5ac4c", opacity: 0.35, width: 1 },
    move: { enable: true, speed: 0.6, direction: "none", random: true, straight: false, out_mode: "out", bounce: false },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: false }, resize: true },
    modes: { grab: { distance: 160, line_linked: { opacity: 0.6 } } },
  },
  retina_detect: true,
};

/** Subtle animated dot-and-line canvas background. Skipped entirely for prefers-reduced-motion. */
export function ParticlesBackground({ className }: { className?: string }) {
  const containerId = `particles-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    import("particles.js").then(() => {
      if (cancelled || !window.particlesJS) return;
      window.particlesJS(containerId, CONFIG);
    });

    return () => {
      cancelled = true;
      document.querySelector(`#${containerId} > canvas`)?.remove();
    };
  }, [containerId]);

  return <div id={containerId} aria-hidden="true" className={className} />;
}
