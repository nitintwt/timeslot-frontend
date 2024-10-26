import React , {useState , useEffect} from 'react'
import axios from 'axios';
import BookingSlotCard from './BookingSlotCard'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { useCookies } from 'react-cookie';

function CancelledBookings() {
  const [slots , setSlots]= useState([])
  const [cookies]= useCookies()
  const userDbId = cookies?.userData?._id

  useEffect(()=>{
    const fetchPastSlots = async ()=>{
      try {
        const data = await axios.get(`/api/v1/slot/cancelledSlots?userDbId=${userDbId}`)
        setSlots(data?.data?.data)
      } catch (error) {
        console.log("Something went wrong while fetching cancelled slots" , error)
      }
    }
    fetchPastSlots()
  } , [userDbId , slots])

  return (
    <div className="grid gap-4">
      {slots.length > 0 ? (
        slots.map((slot)=>(
          <BookingSlotCard  slotId={slot._id} slotStartTime={slot.startTime} slotEndTime={slot.endTime} date={slot.date}/>
        ))
      ) : (
        <h1 className='text-xl font-bold text-white'>No Slots</h1>
      )}

    </div>
  )
}

export default CancelledBookings
