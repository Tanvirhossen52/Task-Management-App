import { useNavigate } from 'react-router';
import { useAuth } from '../../Context/AuthProvider';

const AllTaskPage = () => {
     const {tasks} = useAuth();
     const navigate = useNavigate()

     
   
  return (
    <div>
         <div className=" space-y-3">
        {tasks.map((items) => (
          <div  
          key={items.id}
          onClick={()=>navigate(`/task/${items.id}`)}
          className="flex justify-between  space-y-3 px-4 py-1 rounded-3xl text-center  bg-white  items-center">
            <h2 className="mt-2">{items.taskTitale}</h2>
             <button className={` text-white text-xs px-2 py-1 rounded-full 
               ${items.status === "Progress"? "bg-amber-600": 
               items.status   === "compalte"? "bg-brand-primary":
               items.status   === "Pending"?"bg-blue-600": "bg-gray-200"}`}>{items.status}</button>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default AllTaskPage
