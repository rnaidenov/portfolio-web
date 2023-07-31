'use client';

import { Context, createContext } from 'react';
import { PageContextType } from './types';

export const PageContext: Context<PageContextType> = createContext({} as PageContextType);
