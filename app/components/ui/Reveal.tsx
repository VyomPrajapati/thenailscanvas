"use client";

import { useEffect, useRef, useState, memo, useCallback } from "react";

type RevealProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
};

const Reveal = memo(function Reveal({
  children,
  as: Tag = "div",
  delayMs = 0,
  className = "",
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const onIntersect = useCallback<IntersectionObserverCallback>((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;

    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15,
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [onIntersect]);

  const dirClass =
    direction === "left"
      ? "translate-x-3"
      : direction === "right"
      ? "-translate-x-3"
      : direction === "down"
      ? "-translate-y-3"
      : direction === "fade"
      ? ""
      : "translate-y-3";

  const shownDirClass =
    direction === "left" || direction === "right" ? "translate-x-0" : direction === "down" ? "translate-y-0" : "translate-y-0";

  return (
    <Tag
      ref={ref as any}
      className={`${visible ? `opacity-100 ${shownDirClass}` : `opacity-0 ${dirClass}`} transition-all duration-500 ease-out ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </Tag>
  );
});

export default Reveal;


