import React from 'react'

const categories = [
    {
      name: "Wears",
      value: "wears",
    },
    {
      name: "Electronics",
      value: "electronics",
    },
    {
      name: "Phones",
      value: "phones",
    },
    {
      name: "cosmetics",
      value: "cosmetics",
    },
    {
      name: "Kitchen",
      value: "kitchen",
    },
  ];

const Categories = () => {
  return (
    <div className="mb-8">
      <h3 className="text-blue-900 font-semibold text-xl mb-4 ">Categories</h3>
      <div className="flex flex-col gap-2">
        {
            categories.map((category)=>(
                <span className="cursor-pointer hover:text-blue-500" key={category?.value}>{category.name}</span>
            ))
        }
      </div>
    </div>
  )
}

export default Categories
