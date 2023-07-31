'use client';

import useMousePosition from "@/app/hooks/use-mouse-position";
import { motion } from "framer-motion"
import { useState, useRef, RefObject, useContext } from "react";
import { MenuItems } from "./menu-items";
import styles from './nav-menu.module.scss'
import { PageContext } from "../page-provider/context";
import { PageContextType } from "../page-provider/types";

interface NavMenuProps {
  forceShow?: boolean
}

export const NavMenu: React.FC<NavMenuProps> = ({ forceShow, col }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  const { currPageIdx } = useContext<PageContextType>(PageContext)
  console.log("🚀 ~ file: nav-menu.tsx:20 ~ currPageIdx:", currPageIdx)

  const ulRef: RefObject<HTMLUListElement> = useRef(null);

  const maskPos: DOMRect | undefined = ulRef.current?.getBoundingClientRect();
  const maskSizePx = isHovered ? 40 : 10;

  const flexDir: string = 'flex-' + (currPageIdx === 0 ? 'col' : 'row');

  if ((typeof currPageIdx !== 'number' || currPageIdx === 0) && !forceShow) {
    return null;
  }

  // TODO: OBserver

  return (
    <nav
      className={`
        mt-8 font-onyx min-w-72 z-50 bg-raisin-black min-w-[150px] text-xl text-mint-cream
        ${currPageIdx === 0 ? 'relative' : 'fixed'}
      `}
      onMouseEnter={() => { setIsHovered(true) }}
      onMouseLeave={() => { setIsHovered(false) }}
    >
      <motion.ul
        ref={ulRef}
        className={`${styles.mask} z-50 flex ${flexDir} items-center justify-center p-8`}
        animate={{
          WebkitMaskPosition: `${x - (maskPos?.left ?? 0) - (maskSizePx / 2)}px ${y - (maskPos?.top ?? 0) - (maskSizePx / 2)}px`,
          WebkitMaskSize: `${maskSizePx}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}

      >
        <MenuItems />
      </motion.ul>

      <ul className={`z-40 flex ${flexDir} items-center justify-center p-8`}>
        <MenuItems />
      </ul>
    </nav>
  )
}