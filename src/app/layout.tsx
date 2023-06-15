import { AppBar, Container, Typography, Toolbar, Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import { RecoilRoot} from 'recoil'
import CartButton from './components/CartButton'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shoester',
  description: 'Shoes on demand',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
          {children}
        </body>
      </html>
    
  )
}
