export const WishReducer = (state, action) => {
  const { wishList, qty, totalPrice } = state;
  console.log(state);

  let product;
  let index;
  let updatedPrice;
  let updatedQty;
  let filtered;
  const cartDetails = localStorage.getItem("wish_data");
  const cartObj = JSON.parse(cartDetails);
  switch (action.type) {
    case "ADD_TO_WISH_LIST":
      const check = wishList.find((cart) => cart.id === action.id);
      if (check) {
        state = cartObj;
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;
        localStorage.setItem(
          "wish_data",
          JSON.stringify({
            wishList: [product, ...wishList],
            totalPrice: updatedPrice,
            qty: updatedQty,
          })
        );
        return {
          wishList: [product, ...wishList],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }

    case "INCREMENT":
      product = wishList.find((product) => product.id === action.id);
      index = wishList.findIndex((prod) => prod.id === action.id);
      product.qty = product.qty + 1;
      updatedPrice = totalPrice + product.price;
      updatedQty = qty + 1;
      wishList[index] = product;
      localStorage.setItem(
        "wish_data",
        JSON.stringify({
          wishList: [...wishList],
          totalPrice: updatedPrice,
          qty: updatedQty,
        })
      );
      return {
        wishList: [...wishList],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

    case "DECREMENT":
      product = wishList.find((product) => product.id === action.id);
      index = wishList.findIndex((prod) => prod.id === action.id);
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updatedPrice = totalPrice - product.price;
        updatedQty = qty - 1;
        wishList[index] = product;
        localStorage.setItem(
          "wish_data",
          JSON.stringify({
            wishList: [...wishList],
            totalPrice: updatedPrice,
            qty: updatedQty,
          })
        );
        return {
          wishList: [...wishList],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      } else {
        localStorage.setItem(
          "wish_data",
          JSON.stringify({
            wishList: [...wishList],
            totalPrice: updatedPrice,
            qty: updatedQty,
          })
        );
        return {
          wishList: [...wishList],
          totalPrice: totalPrice,
          qty: qty,
        };
      }

    case "REMOVE_WISHLIST":
      console.log("I Am Delete");
      filtered = wishList.filter((cart) => cart.id !== action.id);
      product = wishList.find((cart) => cart.id === action.id);
      updatedPrice = totalPrice - product.price * product.qty;
      updatedQty = qty - product.qty;
      localStorage.setItem(
        "wish_data",
        JSON.stringify({
          wishList: [...filtered],
          totalPrice: updatedPrice,
          qty: updatedQty,
        })
      );
      return {
        wishList: [...filtered],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

    default:
      return state;
  }
};
