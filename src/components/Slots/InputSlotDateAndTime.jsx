import React, { useEffect, useState, useSyncExternalStore } from 'react'
import {Input, user} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";
import TimeSlotPreviewCard from './TimeSlotPreviewCard.jsx'
import { useDispatch , useSelector} from 'react-redux';
import { createSlot, deleteAllSlots } from '@/store/slotsSlice.js';
import { Calendar } from '@nextui-org/calendar';
import { Select, SelectItem } from '@nextui-org/react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import { Toaster, toast } from 'sonner';


function InputSlotsTime() {
  const [startTime , setStartTime]= useState('')
  const [endTime , setEndTime]= useState('')
  const [date , setDate]= useState('')
  const [paid , setPaid]= useState(false)
  const [price , setPrice]= useState(0)
  const dispatch = useDispatch()
  const slots = useSelector((state)=> state?.slots?.slots)
  const userId = useSelector((state)=> state?.user?.userDbId)
  const {user}= useUser()

  const formateDate = ()=>{
    const day = date?.day
    const month = date?.month
    const year = date?.year

    return `${day}/${month}/${year}`
  }
  console.log(userId)
  
  // delete whole slots in the redux store , when user selects a different date
  useEffect(()=>{
    dispatch(deleteAllSlots())
  },[date])


  // fetch the user details from the db ,, and checks whether the user has linked his stripe account or not
  useEffect(()=>{
    const fetchUserDetails = async ()=>{
      const userDetails = await axios.get("/api/v1/users/getUserDetails" , {params: {email: user?.emailAddresses?.[0]?.emailAddress}})
      if (paid =="true" &&  userDetails?.data?.data?.stripeAccountId== null) {
        toast.warning("Please link your Stripe account first. Go to Billing Page.")
      }
    }
    fetchUserDetails()
  },[paid])

  // when user create a slot , first it get saves in the redux store
  const handleSubmit = ()=>{
    if(startTime !=='' && endTime !== '' && date !==''){
      dispatch(createSlot({
        startTime: startTime,
        endTime: endTime,
        paid: paid,
        price:price,
        date: formateDate(date),
        creator: userId
      }))
    } else{
      toast.warning('Please fill the input areas properly')
    }
     setStartTime('')
     setEndTime('')
     setPaid(false)
     setPrice('')
  }

  const handleCreateSlot = async ()=>{
    try {
      const savedSlotsInDb = await axios.post("/api/v1/slot/createSlot" , {slots})
      console.log(savedSlotsInDb)
      setStartTime('')
      setEndTime('')
      setPaid(false)
      setPrice('')
      dispatch(deleteAllSlots())
      toast.success("Slots created Successfully")
    } catch (error) {
      console.log("Something went wrong while saving slots in db" , error)
    }
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
             <Button className='m-5 text-md font-bold' color="primary" variant="shadow" onClick={handleCreateSlot}>Save</Button>
            </div>)
          : (<h1 className='text-neutral-200 text-md '>Empty Slots</h1>)
          }
        </div>
        <Toaster position="bottom-center" />
      </div>
      
    </div>
  )
}

export default InputSlotsTime