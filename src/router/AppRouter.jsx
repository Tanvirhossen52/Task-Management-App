import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import PrivateRoute from "./PrivateRoute"
import Layout from "../component/Layout/Layout"
import TaskManage from "../component/Taskmanage/TaskManage"
import EmployDashbord from "../pages/auth/MainDashbord/EmployDashbord"
import AdminDashbord from "../pages/auth/MainDashbord/AdminDashbord"
import Project from "../component/MainDashbord/Project"
import AllTaskPage from "../component/MainDashbord/AllTaskPage"
import TaskDitals from "../component/MainDashbord/TaskDitals"
import ReviewTask from "../component/MainDashbord/ReviewTask"




function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/AllTask" element={<Layout><AllTaskPage/></Layout>} />
      <Route path="/ReviewTask" element={<Layout><ReviewTask/></Layout>} />
      <Route path="/task/:id" element={<Layout><TaskDitals/></Layout>} />

      <Route path="/empollyeDashbord" element={ <Layout><EmployDashbord/></Layout>} />
      <Route path="/AdminDashbord" element={ <Layout><AdminDashbord/></Layout>} />
      <Route path="/addTask" element={<PrivateRoute><Layout><TaskManage/></Layout></PrivateRoute>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
