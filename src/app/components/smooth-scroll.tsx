'use client';

import { useEffect } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

export default ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = document.querySelector('[data-scroll-container]');

    // Initialize locomotive-scroll
    const scroll = new LocomotiveScroll({
      el,
      smooth: true,
    });

    scroll.on('scroll', ScrollTrigger.update);

    // Use locomotive-scroll's scroll position for ScrollTrigger
    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    // Refresh ScrollTrigger and locomotive-scroll on resize
    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.refresh();
  })

  return (
    <div data-scroll-container>
      {children}
    </div>
  )
}