import { Outlet } from "react-router-dom"
import { Header, Navbar } from "../components"


const HomeLayout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="align-element py-20">
    <Outlet/>
    </div>

    </>
  )
}

export default HomeLayout
