import Button from "../common/Button";
import { Plus } from "lucide-react";

const Project = ( {taskData}) => {
  console.log(taskData);
  
  return (
    <section>
      <div className=" space-y-2">
        {taskData.map((items, index) => (
          <div  key={index} className="flex justify-between  space-y-3 px-4 py-1 rounded-3xl text-center bg-white  items-center">
            <h2 className="mt-2">{items.taskTitale}</h2>
             <button className=" text-white text-xs px-2 py-1 rounded-full bg-brand-secondary">{items.status}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
