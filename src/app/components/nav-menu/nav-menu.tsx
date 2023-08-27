'use client';

import useMousePosition from "@/app/hooks/use-mouse-position";
import { motion } from "framer-motion"
import { useState, useRef, RefObject, useContext, useEffect } from "react";
import { MenuItems } from "./menu-items";
import styles from './nav-menu.module.scss'
import { PageContext } from "../page-provider/context";
import { PageContextType } from "../page-provider/types";
import { smoothTransitionClass } from "../../consts";

interface NavMenuProps {
  hide?: boolean
  fixed?: boolean
  animate?: boolean
  onMouseOver: (hoverState: boolean) => void
}

export const NavMenu: React.FC<NavMenuProps> = ({ hide, fixed, animate, onMouseOver }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const { x, y } = useMousePosition();

  const navRef: RefObject<HTMLUListElement> = useRef(null);
  const maskRef: RefObject<HTMLUListElement> = useRef(null);
  const ulRef: RefObject<HTMLUListElement> = useRef(null);

  const maskPos: DOMRect | undefined = maskRef.current?.getBoundingClientRect();
  const maskSizePx = isHovered ? 125 : 10;

  const flexDir: string = 'flex-' + (fixed ? 'row' : 'col');

  if (hide) {
    return null;
  }

  useEffect(() => {
    onMouseOver(isHovered);
  }, [isHovered])

  useEffect(() => {
    if (!navRef.current) {
      return;
    }

    const navHeight = navRef.current.offsetHeight
    setNavHeight(navHeight * 3);
  }, [navRef.current])

  // TODO: As you leave hovered: fade out.
  return (
    <motion.nav
      ref={navRef}
      className={`
        uppercase z-50 ${isHovered ? 'bg-wenge' : 'bg-raisin-black'} ${smoothTransitionClass} min-w-[150px] text-xl text-mint-cream
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
          <motion.div
            ref={maskRef}
            style={{ minHeight: `${navHeight}px`, top: `-${Math.round(navHeight / 3)}px` }}
            className={`${styles.mask} z-50 flex ${flexDir} items-center justify-center absolute top-0 left-[50%] translate-x-[-50%]`}
            animate={{
              WebkitMaskPosition: `${x - (maskPos?.left ?? 0) - (maskSizePx / 2)}px ${y - (maskPos?.top ?? 0) - (maskSizePx / 2)}px`,
              WebkitMaskSize: `${maskSizePx}px`,
              opacity: isHovered ? 1 : 0,
              // animate the under construction text
            }}
            // TODO: ease
            transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
          >
            Under <br /> construction.
          </motion.div>
        )
      }
      <ul ref={ulRef} className={`z-40 flex ${flexDir} items-center gap-${fixed ? 4 : 0} justify-center h-full font-computer`}>
        <MenuItems />
      </ul>
    </motion.nav>
  )
}