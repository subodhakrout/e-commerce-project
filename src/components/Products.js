import React, { useContext, useEffect } from "react";
import { cartContext } from "../GlobalState/CartContext";
import { productsContext } from "../GlobalState/ProductsContext";
import { wishlistContext } from "../GlobalState/WishListContext";

const Products = () => {
  const { dispatch } = useContext(cartContext);
  const products = useContext(productsContext);
  // const { dispatch: wishDispatch } = useContext(wishlistContext);
  const wishDispatch = useContext(wishlistContext);
  console.log("products card", wishDispatch);
  const [filterData, setFilter] = React.useState("all");
  const [allProducts, setAllProducts] = React.useState([]);
  const [allCategories, setAllCategories] = React.useState([]);
  useEffect(() => {
    setAllProducts(products);
  }, [products]);
  useEffect(() => {
    getAllCategories();
  }, []);
  const getAllCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setAllCategories(json));
  };
  useEffect(() => {
    switch (filterData) {
      case "all":
        setAllProducts(products);
        break;
      case "plth":
        setAllProducts(products.sort((a, b) => b.price - a.price));
        break;
      case "phtl":
        setAllProducts(products.sort((a, b) => a.price - b.price));
        break;
      default:
        setAllProducts(products);
        break;
    }
  }, [filterData]);
  const onChangeCategories = (category) => {
    setAllProducts(products.filter((x) => x.category === category));
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-1 mt-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              setFilter("all");
            }}
          >
            ALL
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setFilter("plth");
            }}
          >
            Price low to high
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setFilter("phtl");
            }}
          >
            Price high to low
          </button>
        </div>
        <div className="d-flex gap-1 mt-4">
          {allCategories.map((x) => {
            return (
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  onChangeCategories(x);
                }}
              >
                {x}
              </button>
            );
          })}
        </div>
      </div>

      <div className="products">
        {allProducts.map((product, i) => (
          <div
            className="product-items"
            key={i}
            style={{ width: "300px", height: "450px" }}
          >
            <div
              className="product-image d-flex justify-content-center"
              style={{ maxHeight: "300px" }}
            >
              <img className="img-fluid " src={product.image} alt="not-found" />
            </div>
            <div className="product-details" style={{ height: "150px" }}>
              <h5>{product.title}</h5>
              <p>{product.price}</p>
            </div>
            <div
              className="add-to-cart"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  id: product.id,
                  product,
                });
              }}
            >
              Add To Cart
            </div>
            {product.status === "hot" ? (
              <div className="hot">HOT</div>
            ) : (
              <div className="new">NEW</div>
            )}
            <div className="position-absolute end-0" style={{ top: "40px", cursor:"pointer" }}>
              {wishDispatch.wishList.find((o) => o.id === product.id) ? (
                <i
                  class="fa fa-heart"
                  onClick={() => {
                    wishDispatch.dispatch({
                      type: "REMOVE_WISHLIST",
                      id: product.id,
                      product,
                    });
                  }}
                  style={{ fontSize: "36px", color: "red",cursor:"pointer" }}
                ></i>
              ) : (
                <i
                  class="fa fa-heart-o"
                  onClick={() => {
                    wishDispatch.dispatch({
                      type: "ADD_TO_WISH_LIST",
                      id: product.id,
                      product,
                    });
                  }}
                  style={{ fontSize: "36px" }}
                ></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
