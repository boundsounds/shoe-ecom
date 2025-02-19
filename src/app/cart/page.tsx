"use client"
import { CartItem } from '@/types';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartItemsState } from '../state';
import { Box, Typography, Button, useTheme, Container } from '@mui/material';

export default function Cart() {
  const cartItems = useRecoilValue<CartItem[]>(cartItemsState);
  const setCartItems = useSetRecoilState<CartItem[]>(cartItemsState);
  const theme = useTheme();

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        return updatedItems;
      }
      return prevItems;
    });
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2);
  };

  return (
    <Container>
      <div>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <Box display="flex" flexDirection="row" alignItems="flex-start" padding="16px">
            <Box flexGrow={1}>
              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  display="flex"
                  alignItems="center"
                  padding="16px"
                  borderBottom="1px solid #e0e0e0"
                >
                  <Box marginRight="16px">
                    <img src={item.image} alt={item.name} style={{ width: '100px' }} />
                  </Box>
                  <Box flex="1">
                    <Typography variant="h6" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      ${item.price}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      Size: {item.size}
                    </Typography>
                  </Box>
                  <Button variant="contained" color="error" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </Box>
              ))}
            </Box>
            <Box
              padding="16px"
              sx={{
                backgroundColor: '#E7E5D8',
                width: '30%',
                height: '30%',
                borderRadius: '8px'
              }}
            >
              <Typography variant="h6" component="div">
                Total: ${calculateTotal()}
              </Typography>
              <Button variant="contained" color="primary">
                Checkout
              </Button>
            </Box>
          </Box>
        )}
      </div>
    </Container>
  );
}