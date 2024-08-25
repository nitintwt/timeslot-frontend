import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SlotCard from './SlotCard'
import { useCookies } from 'react-cookie';

function AvailableSlots() {
  const [slots , setSlots]= useState([])
  const [cookies]= useCookies()
  const userDbId = cookies?.userData?._id
 

  useEffect(()=>{
    const fetchSlots = async ()=>{
      try {
        const fetch = await axios.get(`${import.meta.env.VITE_AWS_USERS_API}/api/v1/slot/availableSlots?userDbId=${userDbId}`)
        setSlots(fetch?.data?.data)
      } catch (error) {
        console.log("Something went wrong while fetching available slots" , error)
      }
    }
    fetchSlots()
  }, [userDbId])

  return (
    <div>
      { slots.length > 0 ? (
        slots.map((slot)=><SlotCard startTime={slot?.startTime} endTime={slot?.endTime} date={slot?.date} slotId={slot?._id} />)
      ):(
        <h1 className='text-lg font-bold  text-gray-500'>No Slots</h1>
      )}
    </div>
  )
}

export default AvailableSlots
