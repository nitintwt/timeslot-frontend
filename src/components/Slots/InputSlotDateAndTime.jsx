import React, { useEffect, useState, useSyncExternalStore } from 'react'
import {Input, user} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";
import TimeSlotPreviewCard from './TimeSlotPreviewCard.jsx'
import { useDispatch , useSelector} from 'react-redux';
import { createSlot } from '@/store/slotsSlice.js';
import { Calendar } from '@nextui-org/calendar';
import { Select, SelectItem } from '@nextui-org/react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import { Toaster, toast } from 'sonner';


function InputSlotsTime() {
  const [startTime , setStartTime]= useState()
  const [endTime , setEndTime]= useState()
  const [date , setDate]= useState()
  const [paid , setPaid]= useState(false)
  const [price , setPrice]= useState(0)
  const dispatch = useDispatch()
  const slots = useSelector((state)=> state?.slots?.slots)
  const {user}= useUser()

  const formateDate = ()=>{
    const day = date?.day
    const month = date?.month
    const year = date?.year

    return `${day}/${month}/${year}`
  }

  useEffect(()=>{
    const fetchUserDetails = async ()=>{
      const userDetails = await axios.get("/api/v1/users/getUserDetails" , {params: {email: user?.emailAddresses?.[0]?.emailAddress}})
      if (paid =="true" &&  userDetails?.data?.data?.stripeAccountId== null) {
        toast.warning("Please link your Stripe account first. Go to Billing Page.")
      }
    }
    fetchUserDetails()
  },[paid])

  const handleSubmit = ()=>{
    dispatch(createSlot({
      date: formateDate(date),
      startTime: startTime,
      endTime: endTime,
      paid: paid,
      price:price
    }))
     setStartTime('')
     setEndTime('')
     setPaid(false)
     setPrice('')
  }
  return (
    <div className=" bg-black dark p-4 md:p-8 space-y-6 overflow-auto">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
        <div className=" flex justify-center m-12 ">
          <div className="transform scale-125 p-4">
            <Calendar
            aria-label="Date (Uncontrolled)"
            value={date}
            onChange={setDate}
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl text-white font-bold mb-8">Time Slot Settings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
           <Input type="time" variant='bordered' label="Start Time" value={startTime} onChange={(e)=>setStartTime(e.target.value)} />
           <Input type="time" variant='bordered' label="End Time" value={endTime} onChange={(e)=> setEndTime(e.target.value)} />
          </div>
          <div className='pt-8 w-[20%]'>
            <Select
            label="is Paid ?"
            variant="bordered"
            className="max-w-xs mr-5"
            size="sm"
            value={paid}
            onChange={(e) => setPaid(e.target.value)}
            >
              <SelectItem key="true" value="true">
                True
              </SelectItem>
              <SelectItem key="false" value="false">
                False
              </SelectItem>
            </Select>
          </div>
          {paid =="true" ? (
            <Input className='pt-8 w-[50%] text-white' type="number" variant='bordered' label="Price of Slot" value={price} onChange={(e)=> setPrice(e.target.value)} />
          ):('')}
          <div className='text-white p-8 flex justify-end'>
            <Button color="primary" onClick={handleSubmit}>
            Create
            </Button>
          </div>
          <h2 className='text-xl dark font-bold text-white pb-8'>Time Slot Preview</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
             {
              slots.map((slot)=>(
                <TimeSlotPreviewCard
                key={Math.random()}
                startTime={slot?.startTime}
                endTime={slot?.endTime}
                price={slot?.price}
                paid={slot?.paid}
                />
              ))
             }
          </div>
          {slots.length >0 ? 
          (<div className='flex justify-end'>
             <Button className='m-5 text-md font-bold' color="primary" variant="shadow">Save</Button>
            </div>)
          : (<h1 className='text-white text-xl font-bold'>Empty Slots</h1>)
          }
        </div>
        <Toaster position="bottom-center" />
      </div>
      
    </div>
  )
}

export default InputSlotsTime
