// @ts-nocheck
'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image'
import './styles.scss';
import { PageContextType } from '../../components/page-provider/types';
import { PageContext } from '../../components/page-provider/context';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export const About = () => {
  const aboutRef = useRef();
  const imgRef = useRef(null);

  const { scrollY } = useScroll();

  const { updatePageIdx } = useContext<PageContextType>(PageContext);

  const [imgYCenter, setImgYCenter] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [pin, setPin] = useState({ top: 'unset', active: false });

  const [isInView, setIsInView] = useState(false);

  const lineProgress = useTransform(scrollY, [0, imgYCenter], [0, 100]);

  const [currLineProgress, setHookedYPosition] = useState(0);
  useMotionValueEvent(lineProgress, "change", (latest) => {
    setHookedYPosition(latest);
  })

  useEffect(() => {
    if (currLineProgress === 100) {
      const top = imgRef.current.getBoundingClientRect().top;

      setTimeout(() => {
        setPin({ top, active: true });
      }, 100);
      // imgRef.current.style.position = 'fixed';
      // imgRef.current.style.top = `${top}px`;
    } else {
      // imgRef.current.style.top = `unset`;
      // imgRef.current.style.position = 'relative';

      setPin({ top: 'unset', active: false })
    }
  }, [currLineProgress])

  useEffect(() => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      setImgYCenter(rect.top + imgHeight / 2 - 75 - window.innerHeight / 2);
      setImgHeight(rect.height);
    }
  }, [imgRef.current]);

  useEffect(() => {
    const x = document.querySelector('.inner');
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        updatePageIdx(1);
        setIsInView(true)
        gsap.fromTo(aboutRef.current, { backgroundColor: '#28262C' }, { duration: 1.25, backgroundColor: '#F0F7F4' });
      } else {
        setIsInView(false)
      }
    }, {
      threshold: 0.55
    });

    observer.observe(x);

    return () => observer.unobserve(x);
  }, []);

  return (
    <div ref={aboutRef} className="relative h-[300vh] bg-raisin-black w-full flex flex-col flex-start text-center">
      <div className='inner h-screen' />

      <div id='about-content'>
        <motion.div
          id="myLine"
          className='z-0'
          style={{
            scaleY: lineProgress,
            originY: 0
          }}
          animate={{
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            type: 'tween'
          }}
        />
        <div
          // TODO: rename
          ref={imgRef}
          className={"photo z-20 w-[200px] h-[200px] rounded-md overflow-hidden"}
          style={pin.active ? { position: 'fixed', top: `${pin.top}px` } : { position: 'relative', top: 'unset' }}
        >
          <Image
            src="/me.webp"
            width={200}
            height={200}
            alt="Radoslav Naydenov"
            className="invisible opacity-0"
          />

          <motion.div
            className='absolute w-full h-full top-0 left-0 bg-black'
            animate={{ transform: pin.active ? 'scale(1)' : 'scale(0)' }}
            transition={{ duration: 0.625, ease: "backInOut", type: 'tween' }}
          />
        </div>
      </div>

    </div>
  );
};
