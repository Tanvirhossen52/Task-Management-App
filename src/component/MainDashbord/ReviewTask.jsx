import { useAuth } from "../../Context/AuthProvider";


const ReviewTask = () => {
 const {tasks} = useAuth();
 
 
    const RTask = tasks ? tasks.filter((task) => task.status === "Progress" ||task.status === "compalte" ):[];
    
 
 

   console.log(RTask);
 
    
  return (
    <div>
      
    </div>
  )
}

export default ReviewTask
