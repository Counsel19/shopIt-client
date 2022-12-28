import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useAppContext } from "../../context/AppContext";


const Categories = () => {
  const { allCategories, handleInputChange } = useAppContext();
  return (
    <div className="mb-8">
      <h3 className="text-blue-900 font-semibold text-xl mb-4 ">
        Categories({allCategories?.numOfCategories})
      </h3>
      <div className="flex flex-col gap-2 text-gray-800 font-semibold">
        <span
          className="cursor-pointer rounded transition-all duration-75 hover:bg-blue-200 px-2 py-1 "
          onClick={() => handleInputChange("categoryFilter", "all")}
        >
          All
        </span>
        {allCategories ? (
          allCategories.categories.length > 0 ? (
            allCategories.categories.map((category) => (
              <span
                className="cursor-pointer rounded transition-all duration-75 hover:bg-blue-200 px-2 py-1 "
                key={category._id}
                onClick={() =>
                  handleInputChange("categoryFilter", category.name)
                }
              >
                {category.name}
              </span>
            ))
          ) : (
            <p>No Category to display</p>
          )
        ) : (
          <div className="flex items-center justify-center w-full">
            <TailSpin height="40" width="40" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
