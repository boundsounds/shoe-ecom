/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { Product } from '@/types';

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
 

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {/* Left Column */}
        <Box display="flex" flexDirection="row" sx={{ marginTop: '4rem' }} gap="4rem">
          <Grid item xs={12} sm={6}>
            {/* Shoe Image */}
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={6}>
            {/* Shoe Name */}
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>

            {/* Price */}
            <Typography variant="h6" gutterBottom>
              ${product.price}
            </Typography>

            {/* Description */}
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}
