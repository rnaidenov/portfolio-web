'use client';

import { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image'
import './styles.scss';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageContextType } from '../page-provider/types';
import { PageContext } from '../page-provider/context';

gsap.registerPlugin(ScrollTrigger);


export const About = () => {
  const aboutRef = useRef();
  const navRef = useRef();

  const { setCurrPageIdx } = useContext<PageContextType>(PageContext);

  // TODO: Externalize nav
  useEffect(() => {

    const x = document.querySelector('.inner');
    const observer = new IntersectionObserver(entries => {
      // The callback will be called once the element enters the viewport
      // and once it exits the viewport, so we check if it is currently
      // intersecting to avoid triggering the animation twice
      if (entries[0].isIntersecting) {
        // TODO: Enums for page indexes

        setCurrPageIdx(1);
        console.log("🚀 ~ file: about.tsx:32 ~ observer ~ setCurrPageIdx:", 'setCurrPageIdx(1)')

        gsap.fromTo(navRef.current, { height: '7.5vh', opacity: 0, }, { height: '50px', duration: 0.625, ease: 'power2.inOut', opacity: 1, });
        gsap.fromTo(aboutRef.current, { backgroundColor: '#28262C' }, { duration: 1.25, backgroundColor: '#F0F7F4' });
      }

      // else {
      //   gsap.to(navRef.current, { opacity: 0, duration: 0.625, ease: 'power2.inOut' });
      // }
    }, {
      threshold: 0.9 // This means "when 10% of the target element is visible"
    });

    observer.observe(x);



    // Cleanup function to avoid memory leaks
    return () => observer.unobserve(x);
  }, []);



  useEffect(() => {
    if (aboutRef.current === null) return;

    const x = document.querySelector('.inner');


    const imageElement = document.querySelector('img'); // Replace 'img' with a more specific selector if needed
    const imageRect = imageElement.getBoundingClientRect();
    const imageOffsetTop = imageRect.top;
    const imageHeight = imageElement.offsetHeight;

    gsap.to("#myLine", {
      // height: `${imageOffsetTop - x.getBoundingClientRect().top + imageHeight / 2}px`, // The line ends at the center of the image
      height: '50vh',
      scrollTrigger: {
        trigger: x,
        start: 'top top', // When the top of the element hits the center of the viewport
        end: 'bottom center', // When the bottom of the element hits the center of the viewport
        scrub: true,
      },
    });

    gsap.to('#about-content', {
      scrollTrigger: {
        trigger: imageElement,
        start: 'center center', // When the top of the image hits the center of the viewport
        pin: true, // Pin the image when it hits the start position
      }
    });
  }, [aboutRef.current]);

  return (
    <div ref={aboutRef} className="relative h-[300vh] bg-raisin-black w-full flex flex-col flex-start text-center">
      <div className='inner h-screen' />

      <div id='about-content'>
        <div id="myLine" className='z-0' />
        <Image src="/me.webp" width={200} height={200} alt="Radoslav Naydenov" className='TODO: ml-[17%] z-20 rounded-md' />
      </div>

    </div>
  );
};
