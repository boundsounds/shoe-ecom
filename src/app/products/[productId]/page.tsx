// src/app/products/[productId]/page.tsx
"use client"
import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import { cartItemsState } from '@/app/state';

interface PageProps {
  params: {
    productId: string;
  };
}

const ITEMS_DATA = {
  "items": [
    {
      "id": "1",
      "name": "Nike Air Max 2023",
      "price": "25/week",
      "description": "Express yourself with the Air Max 97. The icon gets a game-changing new look with shimmering, delicate lace. Inspired by fluidity of expression, the remixed classic dons ruffle patterns to enhance the original ripple design. Nostalgic hues pull inspiration from Pride flags while incorporating a vintage flair as a nod to LGBTQIA+ history and the trailblazers that paved the way for generations to come.",
      "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0a1836b6-4fd9-4f90-a0b3-316e6306c328/air-max-97-be-true-shoes-BkP8xs.png"
    },
    {
      "id": "2",
      "name": "Nike Air VaporMax 2021 FK",
      "price": "21/week",
      "description": "Made from at least 40% recycled materials by weight, the Nike Air VaporMax 2021 FK is airy and easy to wear with superstretchy, recycled Flyknit fabric (plus a soft collar that sculpts your ankle). The stitched-on Swoosh and recycled TPU heel clip add a splash of intrigue as you float down the streets on incredibly soft VaporMax cushioning.",
      "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d0bb813-9e8c-4985-a096-3796e21546eb/air-vapormax-2021-fk-mens-shoes-NpTfFz.png"
    },
    {
      "id": "3",
      "name": "Nike Air VaporMax 2023",
      "price": "16/week",
      "description": "Have you ever walked on Air? Step into this shoe to truly see how it's done. Look through or remove the perforated insole to see the transparent Nike Air unit. Made with at least 20% recycled content by weight, the stretchy upper keeps it light and cool for warmer weather.",
      "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/facfd66f-b149-4b02-96c9-d83f167d5788/air-vapormax-2023-flyknit-womens-shoes-HtMgGW.png"
    },
    {
      "id": "4",
      "name": "Air Jordan 5 Retro SE Craft",
      "price": "18/week",
      "description": "Bring some pop to your look with the AJ5, the shoe that's recognizably cool. All the original elements are here: lace toggles, premium leather and that unmissable midsole. Updated with new colors and textures, here's a shoe that keeps every look fresh.",
      "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9057c22b-8f60-4fa5-9418-73a358c47093/air-jordan-5-retro-se-craft-mens-shoes-MGhD1k.png"
    },
    {
      "id": "5",
      "name": "Dario's Nike Air Huarache ",
      "price": "27/week",
      "description": "Dario Villaseñor Valdivia may only be 14, but his medical team describes him as an old soul with wisdom beyond his years. Dario's journey has certainly been a challenging one—when he received a bone marrow transplant 7 years ago to treat his leukemia, his body attacked the donor cells, resulting in severe chronic lung disease. No matter how Dario is feeling or what he's dealing with, he always has a smile and a \"How are you doing today?\" for everyone he meets. His vibrant personality is evident throughout his Air Huarache, which arrives in bright orange inspired by his favorite fruit. A furry collar nods to a plush toy gifted by his sister after a long hospital stay, while stick figures on the toe box represents Dario's passion for animation—which he plans to do professionally someday.",
      "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d4e5307f-dfe2-4450-b5d4-edd6198076aa/darios-air-huarache-x-doernbecher-freestyle-mens-shoes-KHwZXm.png"
    },
    {
      "id": "6",
      "name": "Nike Dunk High",
      "price": "12/week",
      "description": "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with crisp leather and retro colors. The classic hoops design channels '80s vintage back onto the streets while the padded, high-top collar adds an old-school look rooted to comfort.",
      "image": "https://secure-render.nike.com/is/image/nikeid/?layer=0&src=ir(nikeidrender/dunkHighHO22_v1?obj=/s/shadow/shad&show=&color=000000&obj=/s/g1/leather&color=ffffff&show=&obj=/s/g2/leather&color=792c3d&show=&obj=/s/g3/leather&color=ffffff&show=&obj=/s/g6/solid&color=212122&show=&obj=/s/g7/leather&color=792c3d&show=&obj=/s/g8/leather&color=ffffff&show=&obj=/s/g9/leather&color=792c3d&show=&obj=/s/g10/solid&color=eff9ff&show=&obj=/s/g11/leather&color=ffffff&show=&obj=/s/g15/solid&color=ffffff&show=&obj=/s/g16/solid&color=792c3d&show=&obj=/s/g20&color=eff9ff&show=&obj=/s/g5/og&color=141414&show=&obj=/s/g17/regrind&show=&obj=/s/g4/leather&color=212122&show=&obj=/s/g12/solid&color=222122&show=&obj=/s/g14/og&color=212122&show=&obj=/s&req=object&fmt=png-alpha)bgc=f5f5f5&fmt=jpeg&qlt=90&posN=0,-0.1&icc=AdobeRGB&wid=864"
    }
  ]
};

export default function ProductPage({ params }: PageProps) {
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  const product = ITEMS_DATA.items.find((item) => item.id === params.productId);

  if (!product) {
    return (
      <Container>
        <Box sx={{ py: 4 }}>
          <Typography variant="h6">Product not found</Typography>
        </Box>
      </Container>
    );
  }

  const sizes = ['7', '8', '9', '10', '11', '12'];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    const cartItem = {
      ...product,
      size: selectedSize,
    };

    setCartItems((prevItems) => [...prevItems, cartItem]);
    alert('Added to cart!');
  };

  return (
    <Container maxWidth={false} sx={{ px: 4, py: 2,             backgroundColor: '#f5f5f5',
  }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '600px',
              objectFit: 'contain',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              {product.price}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mt: 3 }}>
              {product.description}
            </Typography>

            <Box sx={{ my: 4 }}>
              <Typography variant="h6" gutterBottom>
                Select Size
              </Typography>
              <Grid container spacing={1}>
                {sizes.map((size) => (
                  <Grid item key={size}>
                    <Button
                      variant={selectedSize === size ? "contained" : "outlined"}
                      onClick={() => handleSizeSelect(size)}
                      sx={{
                        minWidth: '60px',
                        height: '60px',
                        borderRadius: '8px',
                        border: selectedSize === size ? 'none' : '2px solid',
                        borderColor: 'primary.main',
                        '&:hover': {
                          border: selectedSize === size ? 'none' : '2px solid',
                          borderColor: 'primary.dark',
                        }
                      }}
                    >
                      {size}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={addToCart}
              disabled={!selectedSize}
              sx={{
                mt: 4,
                height: '56px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                textTransform: 'none'
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}