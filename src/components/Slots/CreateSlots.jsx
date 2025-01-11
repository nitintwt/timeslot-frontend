import React, { Fragment, useEffect, useState, useCallback} from 'react'
import {Input, user} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";
import SlotPreviewCard from './SlotPreviewCard.jsx'
import { useDispatch , useSelector} from 'react-redux';
import { createSlot, deleteAllSlots } from '@/store/slotsSlice.js';
import { Calendar } from '@nextui-org/calendar';
import { Select, SelectItem } from '@nextui-org/react';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import {today, getLocalTimeZone} from "@internationalized/date";
import { useCookies } from 'react-cookie';

function CreateSlots() {
  const [startTime , setStartTime]= useState('')
  const [endTime , setEndTime]= useState('')
  const [date , setDate]= useState(today(getLocalTimeZone()))
  const [paid , setPaid]= useState(false)
  const [price , setPrice]= useState(0)
  
  const dispatch = useDispatch()
  const slots = useSelector((state)=> state?.slots?.slots)
  const [cookies]= useCookies()
  const userDbId = cookies?.userData?._id

  // the date format from the calender component is unreadble by human , so updated the date to make it readable
  const formatDate = (selectedDate)=>{
    const day = selectedDate?.day.toString().padStart(2, '0');
    const month = selectedDate?.month.toString().padStart(2, '0');
    const year = selectedDate?.year

    return `${year}-${month}-${day}`
  }
  // delete whole slots in the redux store , when user selects a different date
  useEffect(()=>{
    dispatch(deleteAllSlots())
  },[date])

    // fetch the user details from the db ,, and checks whether the user has linked his stripe account or not. And also fetch the username
    useEffect(()=>{
      const fetchUserDetails = async ()=>{
        const userDetails = await axios.get(`${import.meta.env.VITE_AWS_USERS_API}/api/v1/users/userDetails` , {params: {userDbId: userDbId}})
        if (paid=='true' &&  userDetails?.data?.data?.stripeAccountId== null) {
          toast.warning("Please link your Razorpay or lemonsqueezy account. Go to Dashboard Page.")
        }
      }
      fetchUserDetails()
    },[paid ])



  // when user create a slot , first it get saves in the redux store
  const handleSubmit = ()=>{
    if(startTime !=='' && endTime !== '' && date !==''){
      dispatch(createSlot({
        startTime: startTime,
        endTime: endTime,
        paid: paid,
        price:price,
        date: formatDate(date),
        creator: userDbId
      }))
    } else{
      toast.warning('Please fill the input areas properly')
    }
     setStartTime('')
     setEndTime('')
     setPaid(false)
     setPrice('')
  }

  // slots array which I get from the redux store is saved in db
  const handleCreateSlot = async ()=>{
    try {
      const savedSlotsInDb = await axios.post(`${import.meta.env.VITE_AWS_USERS_API}/api/v1/slot/createSlot` , {slots})
      setStartTime('')
      setEndTime('')
      setPaid(false)
      setPrice('')
      dispatch(deleteAllSlots())
      toast.success("Slots created Successfully")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className=" bg-black dark p-4 md:p- space-y-6 overflow-auto">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
        <div className=" flex flex-col  items-center m-12 ">
          <div className="transform scale-125 p-4 mb-5">
            <Calendar
            aria-label="Date (Uncontrolled)"
            value={date}
            onChange={setDate}
            defaultValue={today(getLocalTimeZone())}
            minValue={today(getLocalTimeZone())}
            />
          </div>
        </div>
        <div>
          <h2 className="text-lg text-white font-bold mb-8">Time Slot Settings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
           <Input type="time" variant='bordered' label="Start Time" size='sm' value={startTime} onChange={(e)=>setStartTime(e.target.value)} />
           <Input type="time" variant='bordered' label="End Time" size='sm' value={endTime} onChange={(e)=> setEndTime(e.target.value)} />
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
              <SelectItem key="true" value={true}>
                True
              </SelectItem>
              <SelectItem key="false" value={false}>
                False
              </SelectItem>
            </Select>
          </div>
          { paid=='true'  &&
            <Input className='pt-8 w-[50%] text-white' type="number" variant='bordered' label="Price of Slot" value={price} onChange={(e)=> setPrice(e.target.value)} />
          }
          <div className='text-white p-8 flex justify-end'>
            <Button color="primary" onClick={handleSubmit}>
             Save
            </Button>
          </div>
          {slots.length >0 &&
          <Fragment>
            <h2 className='text-lg dark font-bold text-white pb-8'>Time Slot Preview</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              {
                slots.map((slot)=>(
                  <SlotPreviewCard
                  key={Math.random()}
                  startTime={slot?.startTime}
                  endTime={slot?.endTime}
                  price={slot?.price}
                  paid={slot?.paid}
                  />
                ))
              }
            </div>
            <div className='flex justify-end'>
              <Button className='m-5 text-md font-bold' color="primary" variant="shadow" onClick={handleCreateSlot}>Create</Button>
            </div>
          </Fragment>}
        </div>
        <Toaster position="bottom-center" />
      </div>  
    </div>
  )
}

export default CreateSlots
