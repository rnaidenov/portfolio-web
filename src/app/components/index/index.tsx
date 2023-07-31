
'use client';

import { useEffect, useState } from "react";
import Cursor from "../cursor/cursor";
import gsap from 'gsap';

export const Index = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    document.querySelectorAll('li').forEach((li) => {
      li.addEventListener('mouseover', () => {
        setHoveredItem(li);
        gsap.to(cursor, { scale: 5, duration: 0.25, ease: 'power2.inOut' });
      });
      li.addEventListener('mouseout', () => {
        setHoveredItem(null);
        gsap.to(cursor, { scale: 1, duration: 0.25, ease: 'power2.inOut' });
      });
    });

    document.addEventListener('mousemove', (e) => {
      if (hoveredItem) {
        const rect = hoveredItem.getBoundingClientRect();
        setMaskPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    });
  }, [hoveredItem]);

  useEffect(() => {
    if (hoveredItem) {
      hoveredItem.style.webkitMaskImage = `radial-gradient(circle at ${maskPosition.x}px ${maskPosition.y}px, black, white)`;
      hoveredItem.style.maskImage = `radial-gradient(circle at ${maskPosition.x}px ${maskPosition.y}px, black, white)`;
    }
  }, [hoveredItem, maskPosition]);

  return (<>
    <div className="bg-raisin-black w-full h-screen flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Radoslav Naydenov
        </h1>
        <p className="text-xl">Full-stack Developer</p>
      </div>

      <nav className="mt-8">
        <ul className="flex flex-col justify-center z-50">
          <li>
            <a
              href="#about"
              className="text-white  hover:text-gray-300 transition duration-300"
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
  </>
  )
};