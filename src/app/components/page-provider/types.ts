import { Dispatch, SetStateAction } from "react";

export interface PageContextType {
  currPageIdx: number;
  lastPageIdx: number;
  updatePageIdx: (newPageIdx: number) => void;
}