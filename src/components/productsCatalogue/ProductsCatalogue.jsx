import { useState } from "react";
import "./ProductCatalogue.css";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import Product from "./Product";
import { useAppContext } from "../../context/AppContext";
import { TailSpin } from "react-loader-spinner";

const sortOptions = [
  {
    name: "Latest",
    value: "latest",
  },
  {
    name: "A to Z",
    value: "a-z",
  },
  {
    name: "Z to A",
    value: "z-a",
  },
];

const ProductsCatalogue = () => {
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);
  const [showDropDown, setShowDropDown] = useState(false);
  const { products, handleInputChange, categoryFilter } = useAppContext();

  const handleSelect = (option) => {
    setShowDropDown(false);
    setSelectedOption(option);
    handleInputChange("sort", option )
  };

  return (
    <div className="w-full mr-20 my-16">
      <div className="w-full flex justify-between">
        <h2 className="text-blue-900 font-semibold text-xl mb-4">
          {categoryFilter && categoryFilter !== "all"
            ? categoryFilter
            : "All Products"}
        </h2>
        <div className="sortDropdown">
          <span onClick={() => setShowDropDown(!showDropDown)}>
            {selectedOption.name}
            {showDropDown ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </span>
          {showDropDown && (
            <div className="sortDropdownOptions">
              {sortOptions.map((option) => (
                <span
                  key={option.name}
                  onClick={() => handleSelect(option)}
                  className="capitalized"
                >
                  {option.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {products ? (
        products.products.length > 0 ? (
          <div className="flex gap-8 mt-8 flex-wrap">
            {products.products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <h3>No Products to Display</h3>
        )
      ) : (
        <TailSpin />
      )}
    </div>
  );
};

export default ProductsCatalogue;
