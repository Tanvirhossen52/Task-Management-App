import { useEffect, useState } from "react";
import StatusCard from "../../../component/MainDashbord/StatusCard";
import { db } from "../../../firebase/firebase.confg";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useAuth } from "../../../Context/AuthProvider";
import AllTaskPage from "../../../component/MainDashbord/AllTaskPage";



const EmployDashbord = ({stats,count}) => {
  
   
    const {tasks} = useAuth();
  
  
    const Pending = tasks.filter((task) => task.status === "Pending").length;
    const compalte = tasks.filter((task) => task.status === "compalte").length;
     const progressTask = tasks.filter((task) => task.status === "Progress").length;
    const totalProject = tasks.length;
  return (
    <div>
       
      {/* status Card Section */}
      
        <div className=" grid grid-cols-12 gap-2 ">
          {/* Top card  */}
          <div className=" col-span-3">
            <StatusCard stats={"Total Project"} count={totalProject} />
          </div>

          <div className=" col-span-3">
            <StatusCard stats={"compalte Project"} count={compalte} />
          </div>
          <div className=" col-span-3">
            {" "}
            <StatusCard stats={"progress Project"} count={progressTask} />
          </div>
          <div className=" col-span-3">
            {" "}
            <StatusCard stats={"Pending Project"} count={Pending} />
          </div>

           <div className="col-span-12">
            <AllTaskPage/>
          </div>




          

          

          
          
          
        </div>

    
    </div>
  )
}

export default EmployDashbord
