import { useEffect, useState } from "react";
import StatusCard from "../../../component/MainDashbord/StatusCard";
import DashbordTopNav from "../../../component/MainDashbord/DashbordTopNav";
import Project from "../../../component/MainDashbord/Project";
import TimeTraker from "../../../component/MainDashbord/TimeTraker";
import Reminders from "../../../component/MainDashbord/Reminders";
import { db } from "../../../firebase/firebase.confg";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useAuth } from "../../../Context/AuthProvider";
import Progress from "../../../component/MainDashbord/Progress";

const AdminDashbord = () => {


  const {tasks,loading } = useAuth();


  const Pending = tasks?.filter((task) => task.status === "Pending").length;
  const compalte = tasks?.filter((task) => task.status === "compalte").length;
  const progressTask = tasks?.filter((task) => task.status === "progress").length;
   

 
  const totalProject = tasks?.length;

  if (loading)
    return <p className=" text-amber-800 text-center">Loadin auth...</p>;
  return (
    

      <div>
      <div className=" flex flex-col gap-2">
        <div>
          <DashbordTopNav />
        </div>

        <div className=" grid grid-cols-12 gap-2 ">
          {/* Top card  */}
          <div className=" col-span-3">
            <StatusCard stats={"Total Project"} count={totalProject} />
          </div>

          <div className=" col-span-3">
            <StatusCard stats={"compalte Project"} count={compalte} />
          </div>
          <div className=" col-span-3">
           
            <StatusCard stats={"Progress Project"} count={progressTask} />
          </div>
          <div className=" col-span-3">

            <StatusCard stats={"Pending Project"} count={Pending} />
          </div>

          <div className="col-span-4">
            <Reminders />
          </div>

          <div className="col-span-8">
            <Project taskData={tasks} />
          </div>

          <div className="col-span-9">
            <Progress />
          </div>
          <div className="col-span-3">
            <TimeTraker />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashbord
