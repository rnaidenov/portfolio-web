'use client';

import { useState } from "react";
import { PageContext } from "./context"
import { NavMenu } from "../nav-menu/nav-menu";

export const PageProvider = ({ children }: { children: any }) => {
  const [currPageIdx, setCurrPageIdx] = useState<number>(0);
  const [lastPageIdx, setLastPageIdx] = useState<number>(0);

  const updatePageIdx = (newPageIdx: number) => {
    setLastPageIdx(currPageIdx);
    setCurrPageIdx(newPageIdx);
  }

  return (
    <PageContext.Provider value={{ currPageIdx, lastPageIdx, updatePageIdx }}>
      <NavMenu
        animate
        hide={currPageIdx === 0}
        fixed={currPageIdx > 0}
      />
      {children}
    </PageContext.Provider>
  )
};
