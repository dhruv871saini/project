import React, { createContext, useContext, useState } from "react";
const cartcontext=createContext()
export  const CartProvider=({children})=>{
    const [cart, setCart] = useState([])
     
  const addCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const deleteCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const increase = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
  };

  const decrease = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCart(newCart);
    }
  };
  return(
    <cartcontext.Provider value={{cart,addCart,deleteCart,increase,decrease}}>
    {children}
    </cartcontext.Provider>
  )
};

export const useCart = () => {
    const context = useContext(cartcontext);
    if (!context) {
      throw new Error(`useCart must be used within a CartProvider`);
    }
    return context;
  };