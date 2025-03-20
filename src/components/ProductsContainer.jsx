import { useLoaderData } from "react-router-dom"
import ProductsGrid from "./ProductsGrid"
import ProductsList from "./ProductsList"
import { useState } from "react"
import { BsFillGridFill, BsList } from "react-icons/bs"

const ProductsContainer = () => {
    const {meta} = useLoaderData()
    const totalProducts = meta.pagination.total
    // console.log(meta)
    const [layout,setLayout] = useState('grid')
    const setActiveStyles = (pattern) =>{
        return `text-xl btn tbn-circle btn-sm`
    }

  return (
    <>
    {/* Header*/}
    <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
            {totalProducts} product {totalProducts > 1 && 's'}
        </h4>
        <div className="flex gap-x-2">
            
        </div>
    </div>
    <ProductsGrid/>
    <ProductsList/>
    </>
  )
}

export default ProductsContainer
