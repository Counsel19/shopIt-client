import React, { useState } from "react";
import { useEffect } from "react";
import CartItem from "../components/CartItem";
import { useAppContext } from "../context/AppContext";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    _id: "1",
    img:
      "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/60/376766/2.jpg?5607",
    desc: "Casual shoulder sports sling bag",
    actual_price: "9500",
    disc_price: "2100",
  },
  {
    _id: "2",
    img:
      "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/60/376766/2.jpg?5607",
    desc: "Casual shoulder sports sling bag",
    actual_price: "9500",
    disc_price: "2100",
  },
  {
    _id: "3",
    img:
      "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/60/376766/2.jpg?5607",
    desc: "Casual shoulder sports sling bag",
    actual_price: "9500",
    disc_price: "2100",
  },
  {
    _id: "4",
    img:
      "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/60/376766/2.jpg?5607",
    desc: "Casual shoulder sports sling bag",
    actual_price: "9500",
    disc_price: "2100",
  },
];

const Cart = () => {
  const cartQty = cartItems.length;
  const { getUserCart, user, userCart } = useAppContext();

  return (
    <div className="flex">
      {userCart ? (
        userCart.cart.length > 0 ? (
          <>
            <div className="mx-20 w-[60%]">
              <h2 className="text-2xl my-6">Cart({userCart?.numOfCart})</h2>
              <hr className="w-[100%]" />

              <div className="cart-products">
                {userCart.cart.map((cartItem) => (
                  <CartItem
                    _id={cartItem._id}
                    key={cartItem._id}
                    cartInfo={cartItem.productInfo}
                    cartQuantity={cartItem.quantity}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center mx-20 w-[60%]">
            <h3>No Items in Cart</h3>
          </div>
        )
      ) : (
        <div className="h-screen w-screen flex items center justify-center">
          <TailSpin />
        </div>
      )}
      <div className="ml-auto mr-20 text-xl my-8 w-[40%]">
        <div className="cart-container">
          <h2 className="mr-15 mb-2">Cart Summary</h2>
          <hr />
          <div className="f lex justify-between justify-items-center my-3 capitalize">
            <h4>Subtotal</h4>
            <h3 className="font-semibold text-base mt-1">
              ₦ {userCart?.subTotal}
            </h3>
          </div>
          <hr />
          <button className="bg-blue-900 mt-3 py-2 px-3 w-[100%] text-white text-sm font-bold">
            CHECKOUT(₦{userCart?.subTotal})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
