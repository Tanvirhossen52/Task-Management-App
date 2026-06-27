import { ArrowUpRightFromCircleIcon, Video } from 'lucide-react'
import React from 'react'
import Button from '../common/Button'

const Reminders = () => {
  return (
     <section>
    
    
        <div className=' space-y-4 shadow-md group  bg-white p-3 rounded-2xl '>
             <p className=' font-medium  '>Remainder</p>
             <div>
               <h2 className='font-semibold text-brand-primary'>Meeting with Arc Company</h2>
               <span className='text-sm '>Time:02.00pm-04.00pm</span>
             </div>
              <Button> <Video/> Start Meeting</Button>
        </div>
        
    
       </section>
  )
}

export default Reminders
