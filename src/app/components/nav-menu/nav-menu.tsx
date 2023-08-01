'use client';

import useMousePosition from "@/app/hooks/use-mouse-position";
import { motion } from "framer-motion"
import { useState, useRef, RefObject, useContext, useEffect } from "react";
import { MenuItems } from "./menu-items";
import styles from './nav-menu.module.scss'
import { PageContext } from "../page-provider/context";
import { PageContextType } from "../page-provider/types";

interface NavMenuProps {
  hide?: boolean
  fixed?: boolean
  animate?: boolean
}

export const NavMenu: React.FC<NavMenuProps> = ({ hide, fixed, animate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  const { currPageIdx, lastPageIdx } = useContext<PageContextType>(PageContext)

  const ulRef: RefObject<HTMLUListElement> = useRef(null);

  const maskPos: DOMRect | undefined = ulRef.current?.getBoundingClientRect();
  const maskSizePx = isHovered ? 40 : 10;

  const flexDir: string = 'flex-' + (fixed ? 'row' : 'col');

  if (hide) {
    return null;
  }

  return (
    <motion.nav
      className={`
        font-onyx min-w-72 z-50 bg-raisin-black min-w-[150px] text-xl text-mint-cream
        ${fixed ? 'fixed w-full top-0' : 'relative mt-8'}
      `}
      onMouseEnter={() => { setIsHovered(true) }}
      onMouseLeave={() => { setIsHovered(false) }}
      animate={animate ?
        {
          height: fixed ? '75px' : '7.5vh',
          opacity: fixed ? 1 : 0,
        } :
        {}
      }
      transition={{
        type: "spring",
        duration: 0.75,
        bounce: 0.5
      }}
    >
      {
        !fixed && (
          <motion.ul
            ref={ulRef}
            className={`${styles.mask} z-50 flex ${flexDir} items-center justify-center`}
            animate={{
              WebkitMaskPosition: `${x - (maskPos?.left ?? 0) - (maskSizePx / 2)}px ${y - (maskPos?.top ?? 0) - (maskSizePx / 2)}px`,
              WebkitMaskSize: `${maskSizePx}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}

          >
            <MenuItems />
          </motion.ul>
        )
      }
      <ul className={`z-40 flex ${flexDir} items-center gap-${fixed ? 4 : 0} justify-center h-full p-4`}>
        <MenuItems />
      </ul>
    </motion.nav>
  )
}