// @ts-nocheck
'use client';

import { useRef, useEffect, useState } from "react";
import './styles.scss';

export default function PixelatedCursor() {
  const cursorRef = useRef();
  const pixelsRef = useRef();

  const [arePixelsVisible, setArePixelsVisible] = useState(true);

  useEffect(() => {
    const cursor = cursorRef.current;
    const pixels = pixelsRef.current;

    // Create the pixel grid
    for (let i = 0; i < 4; i++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');

      // Give each pixel a random size between 5px and 30px
      const size = Math.random() * 10 + 5;
      pixel.style.width = size + 'px';
      pixel.style.height = size + 'px';

      pixels.appendChild(pixel);
    }

    // Update the position of the cursor and pixel grid on mouse move
    document.addEventListener('mousemove', e => {
      const x = e.pageX;
      const y = e.pageY;

      // TODO: Enhance performance by only updating the cursor position when it has changed
      setArePixelsVisible(!['A', 'LI', 'H1', 'P'].includes(e.target.tagName))

      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';

      Array.from(pixels.children).forEach((pixel, i) => {
        const delay = Math.random() * 1000; // Random delay up to 1 second
        const offsetX = (Math.random() - 0.5) * 20; // Random X offset between -10px and 10px
        const offsetY = (Math.random() - 0.5) * 20; // Random Y offset between -10px and 10px

        setTimeout(() => {
          pixel.style.left = x + offsetX + 'px';
          pixel.style.top = y + offsetY + 'px';
          pixel.style.opacity = 1; // Make the pixel fully visible

          // Start a timeout to make the pixel disappear after a while
          setTimeout(() => {
            pixel.style.opacity = 0; // Make the pixel fully transparent
          }, 1000 + delay);
        }, i * 10 + delay);
      });
    });
  }, []);

  return (
    <div>
      <div ref={cursorRef} className="cursor z-40"></div>
      <div ref={pixelsRef} style={{ visibility: arePixelsVisible ? 'visible' : 'hidden' }}></div>
    </div>
  );
}