import React, { createContext, useReducer } from "react";
import { WishReducer } from "./WishListReducer";

export const wishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const whishDetails = localStorage.getItem("wish_data")
    ? localStorage.getItem("wish_data")
    : null;
  const cartObj = whishDetails
    ? JSON.parse(whishDetails)
    : {
        wishList: [],
        totalPrice: 0,
        qty: 0,
      };
  let initialState = cartObj;

  const [state, dispatch] = useReducer(WishReducer, initialState);
  return (
    <wishlistContext.Provider value={{ ...state, dispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

export default WishlistContextProvider;
