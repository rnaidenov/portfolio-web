import useMousePosition from "@/app/hooks/use-mouse-position";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface InfoProps {
  isNavHovered: boolean
}

export const Info: React.FC<InfoProps> = ({ isNavHovered }) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const maskRef = useRef(null);

  const { x, y } = useMousePosition();

  const handleMouseLeave = () => {
    setHovered(null);
  }

  const handleMouseEnter = (e: any) => {
    setHovered(e.currentTarget.id);
  }

  // @ts-ignore
  const maskPos: DOMRect | undefined = maskRef.current?.getBoundingClientRect();
  const maskSizePx = hovered === 'work' ? 125 : 0;

  useEffect(() => {
    if (!shouldShow && isNavHovered) {
      setShouldShow(true);
    }

  }, [isNavHovered, shouldShow])

  return (
    <div className={`h-1/2 overflow-hidden md:h-unset flex justify-between items-end absolute ${shouldShow ? 'visible' : 'invisible'} uppercase w-full bottom-0 left-0 pb-4 px-8`}>
      <div className="flex gap-8">
        <p className={`flex gap-2 relative ${isNavHovered ? 'text-flamy-orange' : 'text-mint-cream'}`}>
          Work:
        </p>
        <ul className={`relative flex flex-col items-start md:flex-row md:items-center gap-2 ${isNavHovered ? 'text-mint-cream' : 'text-flamy-orange'}`}>
          <motion.ul
            id='work'
            className={`flex-col items-start md:flex-row md:items-center mask absolute flex items-center gap-2 ${isNavHovered ? 'text-mint-cream' : 'text-flamy-orange'}`}
            ref={maskRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{
              WebkitMaskPosition: `${(x ?? 0) - (maskPos?.left ?? 0) - (maskSizePx / 2)}px ${(y ?? 0) - (maskPos?.top ?? 0) - (maskSizePx / 2)}px`,
              WebkitMaskSize: `${maskSizePx}px`,
              opacity: 1,
            }}>
            <li>
              <a href="https://fest-with-me.deno.dev/" target="_blank">FestWithMe</a>
            </li>
            <span className="hidden md:inline-block"> | </span>
            <li>
              <a href="https://mintvalentine.xyz/" target="_blank">mintvalentine.xyz</a>
            </li>
            <span className="hidden md:inline-block"> | </span>
            <li>
              <a href="https://kremenarov.com/" target="_blank">kremenarov.com</a>
            </li>
            <span className="hidden md:inline-block"> | </span>
            <li>
              <a href="https://forest-wedding.vercel.app/invitation/dearestportfolioguest" target="_blank">Forest Wedding</a>
            </li>
          </motion.ul>

          <li>
            FestWithMe
          </li>
          <span className="hidden md:inline-block"> | </span>
          <li>
            mintvalentine.xyz
          </li>
          <span className="hidden md:inline-block"> | </span>
          <li>
            kremenarov.com
          </li>
          <span className="hidden md:inline-block"> | </span>
          <li>
            <a href="https://forest-wedding.vercel.app/invitation/dearestportfolioguest" target="_blank">Forest Wedding</a>
          </li>
        </ul>
      </div>

      <div className="flex relative items-end w-6 h-24">
        <p className='-rotate-90 absolute top-0 bottom-0 left-0 text-mint-cream pt-2'>
          Contacts:
        </p>
        <motion.div
          className={`absolute bottom-full right-0 flex flex-col items-end gap-8 pb-4`}
          initial={{ opacity: 0, y: 20, rotate: 0 }}
          animate={shouldShow ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 20, rotate: 0 }}
          transition={{ 
            duration: 0.35, 
            delay: 0.1, 
            type: "spring",
            stiffness: 125,
            damping: 15
          }}
        >
          <div className="relative">
            <a
              id='calendar'
              href="https://calendly.com/radonaydenov"
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`block transition rotate-[25deg] transition-all transition-1000 ${(hovered == 'calendar' || isNavHovered) ? 'text-outer-space scale-110' : 'text-flamy-orange scale-125'}`}
            >
              <img src="/calendar2.png" alt="Calendar" />
            </a>
            <motion.div
              className="absolute bottom-full right-0 mb-2 p-1 bg-black text-mint-cream text-xs font-mono whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: hovered === 'calendar' ? 1 : 0, scale: hovered === 'calendar' ? 1 : 0.9 }}
              transition={{ duration: 0.15 }}
            >
              book a meeting
            </motion.div>
          </div>

          <div className="relative">
            <a
              id='email'
              href="mailto:radonaydenov@gmail.com"
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`block transition -rotate-[15deg] transition-all transition-1000 ${(hovered == 'email' || isNavHovered) ? 'text-outer-space scale-110' : 'text-flamy-orange scale-125'}`}
            >
              <img src="/email3.png" alt="Email" />
            </a>
            <motion.div
              className="absolute bottom-full right-0 mb-2 p-1 bg-black text-mint-cream text-xs font-mono whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: hovered === 'email' ? 1 : 0, scale: hovered === 'email' ? 1 : 0.9 }}
              transition={{ duration: 0.15 }}
            >
              send me an email
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
};