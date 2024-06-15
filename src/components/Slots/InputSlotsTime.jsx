import React from 'react'
import {Input} from "../ui/input"
import {Button, ButtonGroup} from "@nextui-org/button";
import TimeSlotPreview from './TimeSlotPreview'

function InputSlotsTime() {
  return (
    <div className=" bg-black dark p-4 md:p-8 space-y-6 overflow-auto">
      <div>
        <h2 className="text-xl text-white font-bold mb-8">Time Slot Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
        <Input type="string" placeholder="Start Time" />
        <Input type="string" placeholder="End Time" />
        </div>
        <div className='text-white pt-8 flex justify-end'>
        <Button variant="outline">Create</Button>
        <Button color="primary">
      Button
    </Button>
        </div>
      </div>
      <div>
        <TimeSlotPreview/>
      </div>
    </div>
  )
}

export default InputSlotsTime
