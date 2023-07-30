'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const About = () => {
  const aboutRef = useRef();
  const navRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // The callback will be called once the element enters the viewport
      // and once it exits the viewport, so we check if it is currently
      // intersecting to avoid triggering the animation twice
      if (entries[0].isIntersecting) {
        gsap.fromTo(navRef.current, { height: '100vh' }, { height: '50px', duration: 0.5, ease: 'power2.inOut' });
      }
    }, {
      threshold: 0.25 // This means "when 10% of the target element is visible"
    });

    observer.observe(aboutRef.current);

    // Cleanup function to avoid memory leaks
    return () => observer.unobserve(aboutRef.current);
  }, []);

  return (
    <div ref={aboutRef} className="bg-mint-cream w-full h-screen flex flex-col items-center justify-center text-center">
      <nav ref={navRef} className="bg-raisin-black h-12 w-full fixed top-0">
        <ul className="flex gap-8 h-full justify-center items-center">
          <li>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
