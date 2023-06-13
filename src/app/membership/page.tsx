/* eslint-disable @next/next/no-img-element */
"use client";

import { Grid, Paper, Typography, Button, Container } from '@mui/material';
import React, { useState } from 'react';

export default function Membership() {
  const data = [
    {
      product: 'Basic',
      benefits: ['One pair at a time', '7 day limit', 'Free shipping'],
      cost: '$19.99',
    },
    {
      product: 'Standard',
      benefits: ['3 Pairs at a time', '14 day limit', 'Free shipping'],
      cost: '$29.99',
    },
    {
      product: 'Premium',
      benefits: ['7 pairs at a time', '1 month limit', 'Free shipping'],
      cost: '$39.99',
    },
  ];

  return (
    <Container>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 3 }}>
        Membership
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
        Choose the plan thats right for you
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: '1000px', margin: '0 auto' }}>
        {data.map((row) => (
          <Grid item xs={12} sm={4} key={row.product}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%', borderRadius: '32px', position: 'relative' }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {row.product}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                {row.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </Typography>
              <Typography variant="h6" sx={{ mb: 3 }}>
                {row.cost}
              </Typography>
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#E7E5D8',
                  opacity: 0.95,
                  borderRadius: '32px',
                  color: 'black',
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
              >
                Coming Soon
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
