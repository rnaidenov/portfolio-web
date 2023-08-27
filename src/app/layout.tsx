import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Cursor from './components/cursor/cursor'
import { NavMenu } from './components/nav-menu/nav-menu'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  // TODO:
  title: 'Rado - FS Dev',
  description: 'Radoslav Naydenov - Full-stack Developer',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-scrn">
        {children}
        <Cursor />
      </body>
    </html>
  )
}
