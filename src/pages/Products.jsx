import { Filters, PaginationContainer, ProductsContainer } from "../components"
import { customFetch } from "../utils"


const url = './products'

export const loader = async({ request })=>{
  // console.log(request)
  {/* Getting query params one by one */}
  // const params = new URL(request.url).searchParams
  // const search = params.get('search')
  // console.log(search)

  {/* one liner to get all the query params */ }
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),])
  // console.log(params)

  const response = await customFetch(url, {params})
  const products = response.data.data
  const meta = response.data.meta
  
  // console.log(response)
  return {products, meta, params}
}
const Products = () => {
  return (
   <>
   <Filters/>
   <ProductsContainer/>
   <PaginationContainer/>
   </>
  )
}

export default Products
