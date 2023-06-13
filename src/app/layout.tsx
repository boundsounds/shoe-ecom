"use client"
import { AppBar, Container, Typography, Toolbar, Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { cartItemsState } from './state'
import { CartItem } from '@/types'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shoester',
  description: 'Shoes on demand',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Retrieve cart items count from Recoil state



  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <RecoilRoot>
      <html lang="en">
        <body className={inter.className}>

          <AppBar elevation={0} position="static" sx={{ backgroundColor: '#E7E5D8', color: '#212227' }}>
            <Container maxWidth="xl">
              <Typography variant="h6" sx={{ letterSpacing: '-1.5px' }}>rent shoes, look great, without any regret</Typography>
            </Container>
          </AppBar>
          <AppBar elevation={0} position="static" sx={{ backgroundColor: '#f5f5f5', color: '#212227' }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'inter',
                    fontWeight: 700,
                    letterSpacing: '-.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Shoester
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9v-1.098l1.047-4.902h1.905l1.048 4.9v1.098c0 1.067-.933 2.002-2 2.002s-2-.933-2-2zm5 0c0 1.067.934 2 2.001 2s1.999-.833 1.999-1.9v-1.098l-2.996-5.002h-1.943l.939 4.902v1.098zm-10 .068c0 1.067.933 1.932 2 1.932s2-.865 2-1.932v-1.097l.939-4.971h-1.943l-2.996 4.971v1.097zm-4 2.932h22v12h-22v-12zm2 8h18v-6h-18v6zm1-10.932v-1.097l2.887-4.971h-2.014l-4.873 4.971v1.098c0 1.066.933 1.931 2 1.931s2-.865 2-1.932zm15.127-6.068h-2.014l2.887 4.902v1.098c0 1.067.933 2 2 2s2-.865 2-1.932v-1.097l-4.873-4.971zm-.127-3h-14v2h14v-2z" /></svg>            </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >

                  </Menu>
                </Box>

                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Shoester
                </Typography>
                <Link href='../shop'>
                  <MenuItem >
                    <Typography textAlign="center">Shop</Typography>
                  </MenuItem>
                </Link>
                <Link href='../FAQ'>
                  <MenuItem >
                    <Typography textAlign="center">FAQ</Typography>
                  </MenuItem>
                </Link>
                <Link href='../membership'>
                  <MenuItem >
                    <Typography textAlign="center">Membership</Typography>
                  </MenuItem>
                </Link>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                </Box>

                <Box flexDirection='row' sx={{ flexGrow: 0, }}>

                  <Tooltip title="Open Cart">

                    <CartButton />

                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >

                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>

          {children}
        </body>
      </html>
    </RecoilRoot>
  )
}

function CartButton() {
  // Retrieve cart items from Recoil state
  const cartItems = useRecoilValue<CartItem[]>(cartItemsState);
  // Calculate the count of cart items
  const cartItemsCount = cartItems.length;

  return (
    <Tooltip title="Open Cart">
      <Link href="../cart">
        <MenuItem>
          <div style={{ position: 'relative' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
            </svg>
            {cartItemsCount > 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'red',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {cartItemsCount}
              </div>
            )}
          </div>
        </MenuItem>
      </Link>
    </Tooltip>
  );
}
