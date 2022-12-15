import React, { useState } from "react";

const sizeOptions = ["small", "medium", "large"];

const Fliter = () => {
  const [price, setPrice] = useState(10000);
  return (
    <div>
      <h3 className="text-blue-900 font-semibold text-xl mb-4">
        Filters
      </h3>
      <h3 className="text-gray-500 font-semibold text-md mb-4">
        Filter by Size
      </h3>
      <div className="flex flex-col gap-2 mb-4">
        {sizeOptions.map((option) => (
          <div className="flex gap-2" key={option}>
            <input type="checkbox" name={option} />
            <label className="capitalize">{option}</label>
          </div>
        ))}
      </div>

      <div>
      <h3 className="text-gray-500 font-semibold text-md mb-4">
        Filter by Size
      </h3>
        <input
          type="range"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min={1000}
          max={100000}
        />
        <p>0 to {price}</p>
      </div>
    </div>
  );
};

export default Fliter;
