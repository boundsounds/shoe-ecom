"use client"
import React from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import itemsData from '../../../public/data/items.json';

const ShoeList = () => {
  return (
    <Container maxWidth={false} sx={{ px: 4, py: 2 }}>
      <Grid container spacing={2}>
        {itemsData.items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Link href={`/products/${item.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="h6" component="div">
                    ${item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShoeList;