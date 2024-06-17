import React, { useState, useSyncExternalStore } from 'react'
import {Input} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";
import TimeSlotPreviewCard from './TimeSlotPreviewCard.jsx'
import { useDispatch } from 'react-redux';
import { createSlot } from '@/store/slotsSlice.js';
import { Calendar } from '@nextui-org/calendar';


function InputSlotsTime() {
  const [startTime , setStartTime]= useState()
  const [endTime , setEndTime]= useState()
  const dispatch = useDispatch()

  const handleSubmit = ()=>{
    console.log(startTime)
    dispatch(createSlot({
      startTime: startTime,
      endTime: endTime
    }))
    
  }
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
    <div className=" bg-black dark p-4 md:p-8 space-y-6 overflow-auto">
      <div className=" flex justify-center m-12 ">
       <div className="transform scale-125 p-4">
          <Calendar

          aria-label="Date (Uncontrolled)"
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl text-white font-bold mb-8">Time Slot Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
        <Input type="email" variant='bordered' label="Start Time" value={startTime} onChange={(e)=>setStartTime(e.target.value)} />
        <Input type="email" variant='bordered' label="End Time" value={endTime} onChange={(e)=> setEndTime(e.target.value)} />
        </div>
        <div className='text-white p-8 flex justify-end'>
          <Button color="primary" onClick={handleSubmit}>
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
    </div>
  )
}

export default InputSlotsTime
