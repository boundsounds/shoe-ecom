"use client";
import { Tooltip, MenuItem } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { cartItemsState } from '../state';
import { CartItem } from '@/types';

function CartButton() {
  // Retrieve cart items from Recoil state
  const cartItems = useRecoilValue<CartItem[]>(cartItemsState);
  // Calculate the count of cart items
  const cartItemsCount = cartItems.length;

  return (
    <Tooltip title="Open Cart">
      <Link href="../cart">
        <MenuItem>
          <div style={{ position: 'relative' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
            </svg>
            {cartItemsCount > 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'red',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {cartItemsCount}
              </div>
            )}
          </div>
        </MenuItem>
      </Link>
    </Tooltip>
  );
}

export default CartButton;
