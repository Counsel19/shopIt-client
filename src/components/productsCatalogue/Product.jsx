import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, addToSaved } = useAppContext();

  const handleAddToCart = async () => {
    await addToCart({ productId: product._id });
    navigate("/cart");
  };
  const handleAddToSaved = async () => {
    await addToSaved({ productId: product._id });
   
  };

  return (
    product && (
      <div className="w-1/4 border border-gray-200 rounded-lg relative">
        <img src={product.image} alt={product.name} className="object-cover" />
        <div className="p-4">
          <h4 className="text-blue-900 font-semibold text-base mb-2">
            {product.name}
          </h4>
          <div className="flex justify-between items-center">
            <div>
              <span className="line-through text-sm text-gray-500">
                {product.actualPrice}
              </span>
              <h4 className="font-semibold text-base mb-2">
                ${product.sellingPrice}
              </h4>
            </div>
            
            <button
              className="py-2 px-3 bg-blue-900 text-white h-fit rounded"
              onClick={handleAddToCart}
            >
              <MdOutlineShoppingCart />
            </button>
            
            <button
              className="py-2 px-3  text-rose-500 h-fit rounded absolute right-0 top-0"
              onClick={handleAddToSaved}
            >
              <FiHeart size={24}/>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Product;
