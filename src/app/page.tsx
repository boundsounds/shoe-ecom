/* eslint-disable @next/next/no-img-element */
"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Avatar, Box, Button, Card, CardContent, CardHeader, Container, Grid, IconButton, List, ListItem, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import sneaker1 from '../../public/noun-sneaker-3971532.svg';
import sneaker2 from '../public/noun-sneaker-3971534.svg';
import sneaker3 from '../public/noun-sneaker-3971536.svg';
import sneaker4 from '../public/noun-sneaker-3971537.svg';
import sneaker5 from '../public/noun-sneaker-3971544.svg';


export default function Home() {

  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent='start' padding="2rem" height='40vw' sx={{ backgroundColor: '#E7E5D8' }}>


        <Box sx={{ flex: '1 0 50%', justifyContent: 'center' }}>
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
            alt="shoes"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '32px' }}
          />
        </Box>
        <Container sx={{ display: 'flex', marginTop: '1rem', flexDirection: 'column' }}>
          <Typography variant="h1" sx={{ letterSpacing: '-4.0px' }}>welcome to the future of shoes <span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M24 12l-9-8v6h-15v4h15v6z" /></svg></span></Typography>
          <Typography variant="h6" sx={{ letterSpacing: '-1.5px' }}>rent shoes, look great, without any regret</Typography>
          <Box justifyContent='center' alignItems='center'>
            <Link href={'./shop'}>
              <Button variant="contained" sx={{ backgroundColor: 'black', borderRadius: '32px', width: '80%', height: '60px', color: '#f5f5f5' }}>
                Get started
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
      <Box display='flex' flexDirection='column' justifyContent='center' sx={{ padding: '4rem' }}>
        <Box display="flex" alignItems="start" justifyContent='start' padding="2rem" flexDirection='column'>
          <Typography variant="h1" sx={{}}>find your style<span><svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z" fillRule="nonzero" /></svg></span></Typography>
          <Typography variant="h6" sx={{ letterSpacing: '-1.5px' }}>we have tons of brands and sizes for any shoe lover, and new items everyday!</Typography>
          <Box flexDirection='row'>
            <img src='brandlist.png' style={{ width: '80%' }} />
          </Box>
        </Box>
        <Box display="flex" alignItems="end" justifyContent='start' padding="2rem" flexDirection='column'>
          <Typography variant="h1" sx={{}}>find your time<span><svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z" fillRule="nonzero" /></svg></span></Typography>
          <Typography variant="h6" sx={{ letterSpacing: '-1.5px' }}>whether you need them for a day, a week or a month we have options tailored for your lifestyle</Typography>
          <Box display='flex' flexDirection='row' sx={{ gap: '24px' }}>
            <Card variant="outlined" sx={{ width: '400px', height: '200px', backgroundColor: '#E7E5D8' }}>
              <CardHeader>
                1 week
              </CardHeader>
              <CardContent>
                <Typography variant="h6" sx={{ letterSpacing: '-1.5px' }}></Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ width: '400px', height: '200px', backgroundColor: '#E7E5D8' }}>
              2 weeks
            </Card>
            <Card variant="outlined" sx={{ width: '400px', height: '200px', backgroundColor: '#E7E5D8' }}>
              1 month
            </Card>
          </Box>
        </Box>
        <Box display="flex" justifyContent='start' padding="2rem" flexDirection='column'>
          <Typography variant="h1" sx={{}}>send them back<span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M24 12l-9-8v6h-15v4h15v6z" /></svg></span></Typography>
          <Typography variant="h6" sx={{ letterSpacing: '-1.5px' }}>Once you are done with them, send them back for free</Typography>
          <Box display='flex' flexDirection='row' sx={{ gap: '24px' }}>
            <Card variant="outlined" sx={{ width: '200px', height: '200px', backgroundColor: '#E7E5D8' }}>
              1 week
            </Card>
            <Card variant="outlined" sx={{ width: '200px', height: '200px', backgroundColor: '#E7E5D8' }}>
              2 weeks
            </Card>
            <Card variant="outlined" sx={{ width: '200px', height: '200px', backgroundColor: '#E7E5D8' }}>
              1 month
            </Card>
          </Box>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent='center' padding="2rem" flexDirection='column' sx={{ backgroundColor: '#f5f5f5' }}>
        <Typography variant="h1" sx={{ letterSpacing: '-4.0px' }}>any other questions?<span><svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z" fillRule="nonzero" /></svg></span></Typography>
        <Typography variant="h6" sx={{ letterSpacing: '-1.5px' }}>check out our FAQ&apos;s here</Typography>
        <Link href={'./FAQ'}>
          <Button>
            FAQ
          </Button>
        </Link>
      </Box>
    </div>
  );
}
