// src/app/template.tsx
"use client"
import { Container } from '@mui/material';
import Navbar from './components/Navbar';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <Container maxWidth='xl' sx={{ maxWidth: '100%' }}>
            {children}
        </Container>
    );
}