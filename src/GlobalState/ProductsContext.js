import React, { createContext, useReducer } from "react";
import { ProductReducer } from "./ProductReducer";

export const productsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  };
  React.useEffect(() => {
    fetchProducts();
  }, []);

  
  console.log("products", products);
  const [state] = useReducer(ProductReducer, products);
  console.log("state  ", state);

  return (
    <>
      {products.length > 0 && (
        <productsContext.Provider value={[...products]}>
          {children}
        </productsContext.Provider>
      )}
    </>
  );
};

export default ProductsContextProvider;
