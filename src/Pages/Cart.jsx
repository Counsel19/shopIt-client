import React,{useState} from 'react'
import {BiPlus,BiMinus} from "react-icons/bi"

const cartItems = [
    {
        _id:"1",
        img:"https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/60/376766/2.jpg?5607",
        desc:"Casual shoulder sports sling bag",
        actual_price:"9500",
        disc_price: "2100"
    },
    {
        _id:"2",
        img:"https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/60/376766/2.jpg?5607",
        desc:"Casual shoulder sports sling bag",
        actual_price:"9500",
        disc_price: "2100"
    },
    {
        _id:"3",
        img:"https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/60/376766/2.jpg?5607",
        desc:"Casual shoulder sports sling bag",
        actual_price:"9500",
        disc_price: "2100"
    },{
        _id:"4",
        img:"https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/60/376766/2.jpg?5607",
        desc:"Casual shoulder sports sling bag",
        actual_price:"9500",
        disc_price: "2100"
    }
]

const Cart = () => {
  const [quantity,setQuantity] = useState(1)
  const increaseQty = ()=>{
    setQuantity(quantity+1)
  }
  const decreaseQty = ()=>{
    setQuantity(quantity-1)
  }
  const cartQty = cartItems.length

  return (
    <div className="flex">
    <div className="mx-20 w-[60%]">
      <h2 className="text-2xl my-6">Cart({cartQty})</h2>
      <hr className="w-[100%]" />
     
     <div className="cart-products">
        {
            cartItems.map(cartItem=>(
              <div key={cartItem._id} className="flex border w-[100%] mt-3 justify-between p-2">
                    <img src={cartItem.img}  />
                    <div className="mt-3">
                     <h4 className="text-blue-900 font-semibold text-base mb-2">{cartItem.desc}</h4>
                     <span className="line-through text-sm text-gray-500">₦{cartItem.actual_price}</span>
                      <h3 className="font-semibold text-base mb-2">₦{cartItem.disc_price}</h3>
                    </div>
                    <div className="flex flex-col justify-center gap-3 mt-4 p-3">
                    <BiPlus onClick={increaseQty} size={19} className="bg-blue-900 text-white w-[35px] h-[35px] rounded" />
                    <h4 className="font-semibold text-xl text-center">{quantity}</h4>
                    <BiMinus onClick={decreaseQty} size={19} className="bg-blue-900 text-white w-[35px] h-[35px] rounded" />
                    </div>
              </div>  
            ))
        }

     </div>

    </div>
    <div className="ml-auto mr-20 text-xl my-8 w-[40%]">
      <div className="cart-container">
        <h2 className="mr-15 mb-2">Cart Summary</h2>
        <hr/>
        <div className="flex justify-between justify-items-center my-3 capitalize">
          <h4>Subtotal</h4>
          <h3 className="font-semibold text-base mt-1">₦2500</h3>
        </div>
        <hr/>
        <button className="bg-blue-900 mt-3 py-2 px-3 w-[100%] text-white text-sm font-bold">CHECKOUT(₦2500)</button>
      </div>

    </div>
    </div>
  )
}

export default Cart
