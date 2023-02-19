import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const cartDetails = localStorage.getItem("cart_data")
    ? localStorage.getItem("cart_data")
    : null;
  const cartObj = cartDetails
    ? JSON.parse(cartDetails)
    : {
        shoppingCart: [],
        totalPrice: 0,
        qty: 0,
      };
  let initialState = cartObj;

  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <cartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
