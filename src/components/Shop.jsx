import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { addToDb } from '../utils/fakeDB';
import Product from './Product';
import { ProductContext, CartContext } from './Root'

const Shop = () => {
  const products  = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  const handleAddToCart = (product) => {
    let newCart = [];
    
    const exist = cart.find(item => item.id === product.id);
    if (exist) {
      product.quantity = product.quantity + 1;
      const rest = cart.filter(item => item.id !== product.id)
      newCart = [...rest,exist];
    }
    else {
      product.quantity = 1;
      newCart= ([...cart, product]);
 
    }
    setCart(newCart);
    addToDb(product.id);
    toast.success('Product added to cart!', {autoClose: 500});
  }

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {
          products.map(product =><Product key={product.index} product={product} handleAddToCart={handleAddToCart}></Product>)
        }
        
      </div>
    </div>
  )
}

export default Shop
