import { Dispatch, SetStateAction } from "react";

export interface PageContextType {
  currPageIdx: number;
  setCurrPageIdx: Dispatch<SetStateAction<number>>;
}