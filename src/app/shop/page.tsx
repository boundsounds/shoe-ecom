"use client"
import React from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import itemsData from '../../../public/data/items.json';

const ShoeList = () => {
  return (
    <Container maxWidth="xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Grid container spacing={2}>
        {itemsData.items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <Link href={`products/${item.id}`} passHref>
              <Card>
                <CardMedia component="img" height="200" image={item.image} alt={item.name} />
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
