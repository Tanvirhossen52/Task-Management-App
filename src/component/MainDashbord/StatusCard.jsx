import {  ArrowUpRightFromCircleIcon } from 'lucide-react'
import React from 'react'

const StatusCard = ({stats,count}) => {
  return (
   <section>


    <div className=' space-y-4 shadow-md group  bg-white  hover:bg-linear-to-r  from-brand-primary/90 to-brand-secondary/90   transition-all duration-300 ease-in-out hover:scale-105 hover:text-white p-3 rounded-2xl '>
        <div>
            <h3 className=' font-medium  flex justify-between items-center'>{stats} <span><ArrowUpRightFromCircleIcon size={20}/></span> </h3>
        </div>
        <h1 className='text-4xl font-semibold'>{count}</h1>
        <p className='text-sm group-hover:text-amber-200 text-brand-primary'>Incrrase from last month </p>
    </div>
    

   </section>
  )
}

export default StatusCard
