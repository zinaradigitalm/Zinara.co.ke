/*
 * ZINARA DIGITAL — AnimSection
 * Pure CSS animation — always plays on mount, no IntersectionObserver
 * Content is ALWAYS visible. Animation is purely cosmetic.
 */

interface AnimSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimSection({ children, className = "", delay = 0 }: AnimSectionProps) {
  return (
    <div
      className={className}
      style={{
        animationName: "fadeUp",
        animationDuration: "0.55s",
        animationTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
        animationFillMode: "both",
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
