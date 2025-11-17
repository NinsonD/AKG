"use client";
import { animationConfig } from "@/config/animationConfig";
import { charAnimation, fadeAnimation } from "@/hooks/useGsapAnimation";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useGSAP(() => {
    const timer = setTimeout(() => {
      // Global animations (always run)
      try {
        fadeAnimation();
      } catch (e) {
        console.error('fadeAnimation error:', e);
      }
      
      try {
        charAnimation();
      } catch (e) {
        console.error('charAnimation error:', e);
      }

      // Page-specific animations
      if (pathname) {
        // Root path (/) should use design-studio animations since root renders DesignStudioMain
        const animationPath = pathname === '/' ? '/design-studio' : pathname;
        const pageAnimations = animationConfig[animationPath];
        
        if (pageAnimations && Array.isArray(pageAnimations)) {
          pageAnimations.forEach((fn: () => void) => {
            try {
              fn();
            } catch (err) {
              console.error(`Animation error on ${pathname}:`, err);
            }
          });
        }
      }

      // Refresh ScrollTrigger to ensure scroll-based animations register
      try {
        if (ScrollTrigger) {
          ScrollTrigger.refresh();
        }
      } catch (e) {
        console.error('ScrollTrigger.refresh error:', e);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
};

export default AnimationWrapper;


