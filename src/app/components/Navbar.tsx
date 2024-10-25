"use client"
import { AppBar, Container, Typography, Toolbar, Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { RecoilRoot } from 'recoil'
import CartButton from './CartButton'
import { AnimatePresence, motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

const carouselTexts = [
  "rent shoes, look great, without any regret",
  "sustainable fashion for your feet",
  "try before you buy, wear what you love",
  "new styles every month, endless possibilities"
];

export default function Navbar() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % carouselTexts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
      <AppBar elevation={0} position="static" sx={{ backgroundColor: '#E7E5D8', color: '#212227', overflow: 'hidden' }}>
        <Container maxWidth="xl">
          <Box sx={{ position: 'relative', height: '40px', display: 'flex', alignItems: 'center' }}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentTextIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'absolute' }}
              >
                <Typography variant="h6" sx={{ letterSpacing: '-1.5px' }}>
                  {carouselTexts[currentTextIndex]}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9v-1.098l1.047-4.902h1.905l1.048 4.9v1.098c0 1.067-.933 2.002-2 2.002s-2-.933-2-2zm5 0c0 1.067.934 2 2.001 2s1.999-.833 1.999-1.9v-1.098l-2.996-5.002h-1.943l.939 4.902v1.098zm-10 .068c0 1.067.933 1.932 2 1.932s2-.865 2-1.932v-1.097l.939-4.971h-1.943l-2.996 4.971v1.097zm-4 2.932h22v12h-22v-12zm2 8h18v-6h-18v6zm1-10.932v-1.097l2.887-4.971h-2.014l-4.873 4.971v1.098c0 1.066.933 1.931 2 1.931s2-.865 2-1.932zm15.127-6.068h-2.014l2.887 4.902v1.098c0 1.067.933 2 2 2s2-.865 2-1.932v-1.097l-4.873-4.971zm-.127-3h-14v2h14v-2z" /></svg>
              </IconButton>
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
              <MenuItem>
                <Typography textAlign="center">Shop</Typography>
              </MenuItem>
            </Link>
            <Link href='../FAQ'>
              <MenuItem>
                <Typography textAlign="center">FAQ</Typography>
              </MenuItem>
            </Link>
            <Link href='../membership'>
              <MenuItem>
                <Typography textAlign="center">Membership</Typography>
              </MenuItem>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            </Box>

            <Box flexDirection='row' sx={{ flexGrow: 0 }}>
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
    </RecoilRoot>
  )
}