'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image'
import './styles.scss';
import { PageContextType } from '../page-provider/types';
import { PageContext } from '../page-provider/context';
import { motion, useScroll, animate, AnimationPlaybackControls } from 'framer-motion';

export const Test = () => {
  const aboutRef = useRef();
  const imgRef = useRef(null);

  const animControls = useRef<AnimationPlaybackControls>();


  useScroll().scrollYProgress.on("change", (yProgress) => {
    if (!animControls.current) return;

    animControls.current.time = yProgress * animControls.current.duration;
  });

  useEffect(() => {
    animControls.current = animate([
      [".magic-box1", { transform: 'scale(1)' }, { ease: "backInOut", duration: 2 }],
      [".magic-box2", { transform: 'scale(1)' }, { ease: "backInOut", duration: 2, at: 5.01 }],
      [".magic-box3", { transform: 'scale(1)' }, { ease: "backInOut", duration: 2, at: 8.02 }],
      [".magic-box4", { transform: 'scale(1)' }, { ease: "backInOut", duration: 2, at: 11.03 }],
      [".photo-cv", { transform: 'scale(1)', opacity: 1 }, { ease: "easeOut", duration: 0.5, at: 15.04 }],
    ]);
    // animControls.current.pause();
  }, []);

  const common = 'absolute top-0 left-0 w-full h-full';

  return (
    <div className="relative h-[300vh] bg-mint-cream w-full flex flex-col flex-start text-center">

      <div
        // TODO: rename
        ref={imgRef}
        className={"z-20 flex justify-center items-center m-auto"}
      >

        <div className='rounded-md overflow-hidden w-[200px] h-[200px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <Image
            src="/me.webp"
            width={200}
            height={200}
            alt="Radoslav Naydenov"
            className={`photo-cv z-20 ${common}`}
          />
          <motion.div className={`magic-box1 bg-black z-10 ${common}`} />
          <motion.div className={`magic-box2 bg-tomato-red z-10 ${common}`} />
          <motion.div className={`magic-box3 bg-raisin-black z-10 ${common}`} />
          <motion.div className={`magic-box3 bg-outer-space z-10 ${common}`} />
        </div>


      </div>
    </div>
  );
};
