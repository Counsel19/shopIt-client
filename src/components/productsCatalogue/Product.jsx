import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const Product = ({ product }) => {
  return (
    product && (
      <div className="w-1/4 border border-gray-200 rounded-lg">
        <img src={product.image} alt={product.name} className="object-cover" />
        <div className="p-4">
          <h4 className="text-blue-900 font-semibold text-base mb-2">{product.name}</h4>
          <div className="flex justify-between items-center">
            <div>
              <span className="line-through text-sm text-gray-500">{product.actualPrice}</span>
              <h4 className="font-semibold text-base mb-2">${product.sellingPrice}</h4>
            </div>
            <button className="py-2 px-3 bg-blue-900 text-white h-fit rounded">
              <MdOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Product;
