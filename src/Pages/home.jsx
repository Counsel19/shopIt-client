import React from 'react'
import { useEffect } from 'react'
import  { ProductsCatalogue,ProductsFilter } from '../components'
import { useAppContext } from '../context/AppContext'



const home = () => {
  const { getAllProducts, search, sort, categoryFilter, getAllCategories } = useAppContext()
  useEffect(() => {
    const getData = async () => {
      await getAllProducts()
      await getAllCategories()
    }

    getData()
  }, [categoryFilter, search, sort])
  return (
    <div className="flex gap-4">
      <ProductsFilter/>
      <ProductsCatalogue/>
    </div>
  )
}

export default home
