'use client';

import { useContext, useEffect, useRef } from "react";
import { NavMenu } from "../nav-menu/nav-menu";
import { PageContext } from "../page-provider/context";
import { PageContextType } from "../page-provider/types";

export const Index = () => {
  const indexRef = useRef(null);

  const { updatePageIdx } = useContext<PageContextType>(PageContext);

  // TODO: Externalize nav
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // The callback will be called once the element enters the viewport
      // and once it exits the viewport, so we check if it is currently
      // intersecting to avoid triggering the animation twice
      if (entries[0].isIntersecting) {
        // TODO: Enums for page indexes
        updatePageIdx(0);
      }

      // else {
      //   gsap.to(navRef.current, { opacity: 0, duration: 0.625, ease: 'power2.inOut' });
      // }
    }, {
      threshold: 0.5// This means "when 10% of the target element is visible"
    });

    observer.observe(indexRef?.current);


    // Cleanup function to avoid memory leaks
    return () => observer.unobserve(indexRef?.current);
  }, []);

  return (
    <div className="bg-raisin-black w-full h-screen flex flex-col items-center justify-center text-center" ref={indexRef}>
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Radoslav Naydenov
        </h1>
        <p className="text-xl">Full-stack Developer</p>
      </div>

      <NavMenu />
    </div>
  )
};