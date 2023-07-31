
'use client';

import { useEffect, useRef, useState } from "react";
import Cursor from "../cursor/cursor";
import gsap from 'gsap';
import { motion } from 'framer-motion';
import useMousePosition from "../../hooks/use-mouse-position";


export const Index = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });


  // useEffect(() => {
  //   const cursor = document.querySelector('.cursor');

  //   document.querySelectorAll('li').forEach((li) => {
  //     li.addEventListener('mouseover', () => {
  //       setHoveredItem(li);
  //       gsap.to(cursor, { scale: 5, duration: 0.25, ease: 'power2.inOut' });
  //     });
  //     li.addEventListener('mouseout', () => {
  //       setHoveredItem(null);
  //       gsap.to(cursor, { scale: 1, duration: 0.25, ease: 'power2.inOut' });
  //     });
  //   });

  //   document.addEventListener('mousemove', (e) => {
  //     if (hoveredItem) {
  //       const rect = hoveredItem.getBoundingClientRect();
  //       setMaskPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  //     }
  //   });
  // }, [hoveredItem]);

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 40 : 10;

  // useEffect(() => {
  //   if (hoveredItem) {
  //     hoveredItem.style.webkitMaskImage = `radial-gradient(circle 50px at ${maskPosition.x}px ${maskPosition.y}px, black 100%, black 100%)`;
  //     hoveredItem.style.maskImage = `radial-gradient(circle 50px at ${maskPosition.x}px ${maskPosition.y}px, black 100%, black 100%)`;  
  //   }
  // }, [hoveredItem, maskPosition]);

  const ulRef = useRef(null);

  const rect = ulRef.current?.getBoundingClientRect();

  return (<>
    <div className="bg-raisin-black w-full h-screen flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Radoslav Naydenov
        </h1>
        <p className="text-xl">Full-stack Developer</p>
      </div>

      <nav className="mt-8 relative"
        onMouseEnter={() => { setIsHovered(true) }}
        onMouseLeave={() => { setIsHovered(false) }}
      >
        <motion.ul
          ref={ulRef}
          className="mask w-full z-50 text-2xl"
          animate={{
            WebkitMaskPosition: `${x - rect?.left - (size / 2)}px ${y - rect?.top - (size / 2)}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}

        >
          <li className="text-black">
            <a
              href="#about"
              className="transition duration-300"
            >
              About
            </a>
          </li>
          <li className="text-black">
            <a
              href="#work"
              className="transition duration-300"
            >
              Work
            </a>
          </li>
          <li className="text-black">
            <a
              href="#contact"
              className="transition duration-300"
            >
              Contact
            </a>
          </li>
        </motion.ul>

        <ul className="flex flex-col justify-center z-40 w-full text-2xl">
          <li className="text-black">
            <a
              href="#about"
              className="text-white  hover:text-gray-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li className="text-black">
            <a
              href="#work"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Work
            </a>
          </li>
          <li className="text-black">
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
  </>
  )
};