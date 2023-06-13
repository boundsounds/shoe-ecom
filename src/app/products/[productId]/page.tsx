/* eslint-disable @next/next/no-img-element */
"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import itemsData from '../../../../public/data/items.json';
import { Button, Container, Grid, Box, Typography } from '@mui/material';
import { RecoilState, useRecoilState } from 'recoil';
import { cartItemsState } from '../../state';
import { CartItem, Product } from '@/types';



export default function ProductPage({ params }: { params: { productId: string } }) {
  const product: Product | undefined = itemsData.items.find((item) => item.id === params.productId);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [cartItems, setCartItems] = useRecoilState<CartItem[]>(cartItemsState as RecoilState<CartItem[]>);

  if (!product) {
    // Handle case when the product is not found
    return <div>Product not found</div>;
  }

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    if (selectedSize) {
      // Create a new cart item object with the selected size
      const cartItem: Product = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        size: selectedSize, // Include the selected size
      };
  
      // Add the item to the cart
      setCartItems((prevItems: CartItem[]) => [...prevItems, cartItem]);
    }
  };
  
  

  const renderSizeButtons = () => {
    const sizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];

    return sizes.map((size) => (
      <Button
        key={size}
        variant="outlined"
        sx={{
          color: selectedSize === size ? 'white' : 'black',
          backgroundColor: selectedSize === size ? 'black' : 'white',
          border: selectedSize === size ? '1px solid white' : '1px solid black',
          margin: '0.5rem',
        }}
        onClick={() => handleSizeSelect(size)}
      >
        {size}
      </Button>
    ));
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {/* Left Column */}
        <Box display="flex" flexDirection="row" sx={{ marginTop: '4rem' }} gap="4rem">
          <Grid item xs={12} sm={6}>
            {/* Shoe Image */}
            <img src={product?.image} alt={product?.name} style={{ maxWidth: '100%' }} />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={6}>
            {/* Shoe Name */}
            <Typography variant="h6" gutterBottom>
              {product?.name}
            </Typography>

            {/* Price */}
            <Typography variant="h6" gutterBottom>
              ${product?.price}
            </Typography>

            {/* Size Selection */}
            <div style={{ marginBottom: '1rem' }}>
              <Typography variant="subtitle1" gutterBottom>
                Select Size:
              </Typography>
              <div>{renderSizeButtons()}</div>
            </div>

            {/* Description */}
            <Typography variant="body1" gutterBottom>
              {product?.description}
            </Typography>

            {/* Buy Now Button */}
            <Button variant="contained" color="primary" onClick={addToCart}>
              ADD TO CART
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}
