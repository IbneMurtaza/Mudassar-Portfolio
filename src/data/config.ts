/**
 * Small site-level toggles carried over from the original design's
 * configurable props. Flip these instead of hunting through components.
 */
export const siteConfig = {
  /** Animate the Record section's stat numbers counting up on scroll. */
  animateCounters: true,
  /** "stacked": one project card per row. "grid": two columns on wide screens. */
  projectLayout: "stacked" as "stacked" | "grid",
};
