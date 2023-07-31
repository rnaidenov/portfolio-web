'use client';

import { useState } from "react";
import { PageContext } from "./context"

export const PageProvider = ({ children }: { children: any }) => {
  const [currPageIdx, setCurrPageIdx] = useState<number>(0);

  return (
    <PageContext.Provider value={{ currPageIdx, setCurrPageIdx }}>
      {children}
    </PageContext.Provider>
  )
};
