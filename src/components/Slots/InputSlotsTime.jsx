import React from 'react'
import {Input} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";
import TimeSlotPreviewCard from './TimeSlotPreviewCard.jsx'

function InputSlotsTime() {
  return (
    <div className=" bg-black dark p-4 md:p-8 space-y-6 overflow-auto">
      <div>
        <h2 className="text-xl text-white font-bold mb-8">Time Slot Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
        <Input type="email" variant='bordered' label="Start Time" />
        <Input type="email" variant='bordered' label="End Time" />
        </div>
        <div className='text-white p-8 flex justify-end'>
          <Button color="primary">
           Create
          </Button>
        </div>
      </div>
      <h2 className='text-xl dark font-bold text-white pb-8'>Time Slot Preview</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <TimeSlotPreviewCard/>
        <TimeSlotPreviewCard/>
        <TimeSlotPreviewCard/>
        <TimeSlotPreviewCard/>
      </div>
    </div>
  )
}

export default InputSlotsTime
