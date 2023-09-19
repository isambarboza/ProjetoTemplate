import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import MenuResponsivo from "./components/MenuResponsivo"

function Dashboard() {
  return (
    <>
        <MenuResponsivo />
        <Outlet />
    </>
  )
}

export default Dashboard