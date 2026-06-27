import Sidebar from "./Sidebar";
import TopNavBar from "./TopNavBar";
import { useAuth } from "../../Context/AuthProvider";
import EmpolleeLayout from "./EmpolleeLayout";

const Layout = ({ children }) => {
  const {role} =useAuth()  
  
  return (
    <div className="flex h-screen px-2 bg-white">
      <aside className="w-64 fixed  p-2 ">
       {
        role ==="admin" ?  <Sidebar/>: <EmpolleeLayout/>
       }
      </aside>

      <div className="flex-1 ml-68  ">
        <header>
          <TopNavBar />
        </header>
        <main className="mt-4  bg-[#f8f9fa] p-3 rounded-2xl">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
