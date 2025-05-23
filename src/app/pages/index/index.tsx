'use client';

import { useContext, useEffect, useRef, useState } from "react";
import { NavMenu } from "../../components/nav-menu/nav-menu";
import { PageContext } from "../../components/page-provider/context";
import { PageContextType } from "../../components/page-provider/types";
import { smoothTransitionClass } from "../../consts";
import { Info } from "@/app/components/info/info";

export const Index = () => {
  const indexRef = useRef(null);

  const [isNavHovered, setIsNavHovered] = useState(false);
  const { updatePageIdx } = useContext<PageContextType>(PageContext);

  // TODO: Externalize nav
  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     // The callback will be called once the element enters the viewport
  //     // and once it exits the viewport, so we check if it is currently
  //     // intersecting to avoid triggering the animation twice
  //     if (entries[0].isIntersecting) {
  //       // TODO: Enums for page indexes
  //       updatePageIdx(0);
  //     }

  //     // else {
  //     //   gsap.to(navRef.current, { opacity: 0, duration: 0.625, ease: 'power2.inOut' });
  //     // }
  //   }, {
  //     threshold: 0.5// This means "when 10% of the target element is visible"
  //   });

  //   observer.observe(indexRef?.current);

  //   // Cleanup function to avoid memory leaks
  //   return () => observer.unobserve(indexRef?.current);
  // }, []);

  return (
    <div className={`${isNavHovered ? 'bg-wenge text-raisin-black' : 'bg-raisin-black'} w-full h-screen flex flex-col items-center justify-center text-center ${smoothTransitionClass}`} ref={indexRef}>
      <div className="relative">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-vt323 mb-2 text-mint-cream">
            Radoslav Naydenov
          </h1>
          <p className="text-md uppercase text-mint-cream">Full-stack dev</p>
        </div>

        <NavMenu onMouseOver={setIsNavHovered} />
      </div>

      <Info isNavHovered={isNavHovered} />
    </div>
  )
};