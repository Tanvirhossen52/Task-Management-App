import React, { useState } from "react";

import Button from "../common/Button";
import { ChevronDown, Plus } from "lucide-react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase.confg";




const TaskManage = () => {

   
  const [formData, setFormData] = useState({
    taskTitale:"",
    taskDiscription:"",
    selectedPioroty:"",
    startdate:"",
    endDate:"",
    
   
  });
  
  const {taskTitale,taskDiscription,selectedPioroty,WrokTeam,startdate,endDate} =  formData

  
  const handleChange = (e)=>{

    const {name,value} =e.target

    setFormData({
      ...formData,
      [name]:value
    })

  }
  


  
  
  
  const handleTaskManage = async(e) => {
   e.preventDefault();

    if (taskTitale === "" || taskDiscription === "") 
      {
      alert("plz fill your task")
      return
      
    }

  try {
     await addDoc(collection(db, "task"),
  {
   taskTitale,
   taskDiscription,
   status :"Pending",
   selectedPioroty,
   endDate,
   employeeNote:"",

  
  }

 
);
 
  } catch (error) {
    console.log(error);
    
  }

  alert("Add task sucesfully")
    setFormData({
    taskTitale:"",
    taskDiscription:"",
    selectedPioroty:"",
    startdate:"",
    endDate:"",})



   
    
  };

  const options = ["High","Emargency","Crtical","Low"]
  const WrokTeamData = ["Mantanace","Utility","Productoin","Server"]



  return (
    <div className="">
      {/* Header section */}
      <div>
        <h2 className="text-3xl font-semibold mb-2 font-Poppins">
          Create task
        </h2>
        <p className=" text-sm  text-gray-600">
          Plan pirotiize and accompolsh task with ease
        </p>
      </div>

      <form onSubmit={handleTaskManage}>

        <div className="flex justify-center te  gap-8 mt-4">
          {/* Left side section */}


          <div className=" basis-2/3 space-y-6">
            <div className="flex flex-col">
              <label className="font-medium" >
                Titale of task
              </label>
              <input
                onChange={handleChange}
                value={formData.taskTitale}
                name="taskTitale"
                className=" outline-0 mt-2 ring-gray-200 ring-2  px-4 py-2 rounded-full focus:ring-2 focus:ring-brand-primary"
                type="text"
                placeholder="Task title"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="">
                Description
              </label>
              <textarea
               onChange={handleChange}
                value={formData.taskDiscription}
                name="taskDiscription"
                className="ring-gray-200 p-4 ring-2 rounded-2xl focus:ring-2 focus:ring-brand-primar"
                placeholder="Discribe your task"
                rows={6}
                cols={50}
                id="taskDiscription"
              ></textarea>
            </div>
          </div>

          {/* Right side section */}
          <div className=" basis-1/3 flex flex-col space-y-4 ">

          <div className="flex flex-col gap-2">
            <label className=" font-medium"> Chosse your priority</label>
             <select className="border-2 rounded-full px-2 py-1.5  border-gray-300 
          "     onChange={handleChange}
                value={formData.selectedPioroty}
                name="selectedPioroty"
                id="selectedPioroty">

            {
              options.map((items,ind)=>(
                <option key={ind} value={items}>
                  {items}

                </option>

              ))
            }
        
          </select>

          
          </div>


          <div className="flex flex-col gap-2">
            <label className=" font-medium">Due Date</label>
            <input 
            onChange={handleChange}
            name="endDate"
            value={endDate}
            placeholder="Due Date" 
            className="border-2 rounded-full px-2 py-1.5  border-gray-300" 
            type="date" />
         

          
          </div>

           <div className="flex flex-col gap-2">
            <label For="priority" className=" font-medium">Related Project</label>
          <select className="border-2 rounded-full px-2 py-1.5  border-gray-300 
          " onChange={handleChange}
                value={formData.WrokTeam}
                name="WrokTeam"
                id="WrokTeam"
          >

            {
              WrokTeamData.map((items,ind)=>(
                <option key={ind} value={items}>
                  {items}

                </option>

              ))
            }
        
          </select>

          
          </div>
            
          </div>
          
        </div>
        <Button type="submit" className="mt-4">
          {" "}
          <Plus size={16} />
          Create project
        </Button>
      </form>
    </div>
  );
};

export default TaskManage;
