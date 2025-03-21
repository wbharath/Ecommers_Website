
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages"


import { ErrorElement } from "./components"
//loaders
import { loader as landingloader } from "./pages/Landing"
import { loader as singleProductloader } from "./pages/SingleProduct"
import { loader as productsloader } from "./pages/Products"

//actions
const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        errorElement:<ErrorElement/>,
        loader:landingloader

      },
      {
        path:'products',
        element:<Products/>,
        errorElement:<ErrorElement/>,
        loader:productsloader
      },
      {
        path:'products/:id',
        element:<SingleProduct/>,
        errorElement:<ErrorElement/>,
        loader:singleProductloader
      },
      {
        path:'cart',
        element:<Cart/>,
      },
      {
        path:'about',
        element:<About/>,
      },
      {
        path:'checkout',
        element:<Checkout/>,
      },
      {
        path:'orders',
        element:<Orders/>,
      },
    ]
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error/>,
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<Error/>,
  },




])
const App = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
