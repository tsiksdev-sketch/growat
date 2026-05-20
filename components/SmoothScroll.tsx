"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const smootherRef = useRef<ScrollSmoother | null>(null);
  const footerTriggerRef = useRef<ScrollTrigger | null>(null);
  const autoTweenRef = useRef<gsap.core.Tween | null>(null);
  const roRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const BASE_SMOOTH = 1.2;
    const SLOW_SMOOTH = 4;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: BASE_SMOOTH,
      effects: true,
      normalizeScroll: true,
    });

    smootherRef.current = smoother;

    const setupFooterTrigger = () => {
      footerTriggerRef.current?.kill();

      const footer = document.querySelector("footer");
      if (!footer) return;

      footerTriggerRef.current = ScrollTrigger.create({
        trigger: footer,
        start: "top bottom-=10%",
        end: "bottom bottom",
        onEnter: () => {
          autoTweenRef.current?.kill();

          gsap.to(smoother, {
            smooth: SLOW_SMOOTH,
            duration: 0.6,
            ease: "power2.out",
          });

          autoTweenRef.current = gsap.delayedCall(0.9, () => {
            const max = ScrollTrigger.maxScroll(window);

            gsap.to(smoother, {
              scrollTop: max,
              duration: 1.1,
              ease: "power3.inOut",
              onComplete: () => {
                gsap.to(smoother, { smooth: BASE_SMOOTH, duration: 0.4 });
              },
            });
          }) as unknown as gsap.core.Tween;
        },
        onLeaveBack: () => {
          autoTweenRef.current?.kill();
          gsap.killTweensOf(smoother);

          gsap.to(smoother, {
            smooth: BASE_SMOOTH,
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });
    };

    const refresh = () => {
      ScrollTrigger.refresh();
      setupFooterTrigger();
    };

    setupFooterTrigger();

    // Refresh when images load
    const onImgLoad = () => refresh();
    const imgs = Array.from(document.images);

    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", onImgLoad, { once: true });
    });

    window.addEventListener("load", refresh);

    const content = document.getElementById("smooth-content");
    if (content) {
      roRef.current = new ResizeObserver(() => refresh());
      roRef.current.observe(content);
    }

    return () => {
      autoTweenRef.current?.kill();
      footerTriggerRef.current?.kill();

      window.removeEventListener("load", refresh);
      roRef.current?.disconnect();

      smootherRef.current?.kill();
      smootherRef.current = null;
    };
  }, []);

  // Refresh after App Router navigation
  useEffect(() => {
    if (!smootherRef.current) return;

    // Let the new route paint first
    requestAnimationFrame(() => {
      try {
        smootherRef.current?.scrollTo(0, false);
      } catch {
        // ignore
      }

      ScrollTrigger.refresh();
      setTimeout(() => ScrollTrigger.refresh(), 300);
    });
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}