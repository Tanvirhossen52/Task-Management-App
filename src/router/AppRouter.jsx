import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import MainD from "../pages/auth/MainDashbord/MainD"


function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Dashbord" element={<MainD/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
