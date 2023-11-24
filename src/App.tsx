import React, { useState } from 'react';
import Item from './Item/Item';
import Cart from './Cart/Cart';
import { useQuery } from 'react-query';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import  AddShoppingCartOutlined  from '@mui/icons-material/AddShoppingCartOutlined';
import LinearProgress from '@mui/material/LinearProgress';
import Badge from '@mui/material/Badge';
import { Wrapper, StyledButton } from './Styles';
import Navbar from './Navbar/Navbar';

export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const addToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isInCart = prev.find(item => item.id === clickedItem.id)
      if(isInCart) {
        return prev.map(item => item.id === clickedItem.id
          ? {...item, amount: item.amount + 1}
          : item
        )
      }
      return [...prev, { ...clickedItem, amount: 1}]
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(
      prev => (
        prev.reduce((ack, item) => {
          if(item.id === id) {
            if(item.amount === 1) return ack;
            return [ ...ack, {...item, amount: item.amount - 1}]
          } else {
            return [...ack, item]
          }
        }, [] as CartItemType[])
    ))
  }

  if (isLoading) return <LinearProgress />

  if (error) return <div>Some thing went wrong...</div>

  return (
    <Wrapper>
      <Navbar />
      <Drawer anchor='right' open={isOpen} onClose={() => setIsOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart} />
      </Drawer>
      <StyledButton onClick={() => setIsOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
            <AddShoppingCartOutlined />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
