import { Plus } from "lucide-react"
import Button from "../common/Button"



const DashbordTopNav = () => {
  
  return (
    <section>
        <div className="flex justify-between items-center">
            {/* Leftside */}
            <div >
                <h2 className="text-3xl font-semibold mb-2 font-Poppins">Dashbord</h2>
                <p className=" text-sm  text-gray-600">Plan pirotiize and accompolsh task with ease</p>

            </div>
            {/* Rightside */}
            <div className=" flex gap-3">
                <Button to='/addTask'><Plus size={16}/> Add project</Button>
                <Button varinrt="secondary" >Import data</Button>
                
               

            </div>

        </div>

    </section>
  )
}

export default DashbordTopNav
