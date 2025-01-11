import AvailableSlots from '@/components/Availability/AvailableSlots'
import React from 'react'
import {ScrollShadow} from "@nextui-org/react";

function Availability() {
  return (
    <div className="bg-black   h-full ">
      <header className=" text-white py-4 px-6">
        <h1 className="text-xl font-bold">Your available slots</h1>
      </header>
      <div className='p-5 lg:max-w-3xl'>
        <ScrollShadow className=" h-[800px]">
         <AvailableSlots/>
        </ScrollShadow>
      </div>
    </div>
  )
}

export default Availability
