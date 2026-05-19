/*
 * ZINARA DIGITAL — useInView hook
 * Uses CSS class-based animation so content is always visible
 * Animations are purely additive — never hides content
 */

import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use a small timeout to allow the page to render before observing
    const timer = setTimeout(() => {
      if (typeof IntersectionObserver === "undefined") {
        setInView(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        },
        { threshold, rootMargin: "0px 0px -30px 0px" }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [threshold]);

  return { ref, inView };
}
