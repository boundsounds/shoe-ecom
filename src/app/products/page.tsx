"use client"
import React, { useEffect } from 'react';
import itemsData from '../../../public/data/items.json';
import ProductPage from '../products/[productId]/page';
import { Product } from '@/types';
import { Container, Box, Typography } from '@mui/material';

interface ProductPageWrapperProps {
  params: {
    productId: string;
  };
}

export default function ProductPageWrapper({ params }: ProductPageWrapperProps) {
  useEffect(() => {
    console.log('ProductID:', params.productId);
    console.log('All Items:', itemsData.items);
  }, [params.productId]);

  const product = itemsData.items.find(item => item.id === params.productId);

  console.log('Found Product:', product);

  if (!product) {
    return (
      <Container>
        <Box
          sx={{
            py: 8,
            textAlign: 'center',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Product Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We couldn&apos;t find the product you&apos;re looking for. ID: {params.productId}
          </Typography>
        </Box>
      </Container>
    );
  }
  //@ts-ignore-next-line
  return <ProductPage product={product} />;
}