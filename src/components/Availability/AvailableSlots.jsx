import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SlotCard from './SlotCard'

function AvailableSlots() {
  const [slots , setSlots]= useState([])
  const userDbId = sessionStorage.getItem('userDbId')

  useEffect(()=>{
    const fetchSlots = async ()=>{
      try {
        const fetch = await axios.get(`/api/v1/slot/availableSlots?userDbId=${userDbId}`)
        console.log(fetch.data.data)
        setSlots(fetch?.data?.data)
      } catch (error) {
        console.log("Something went wrong while fetching slots" , error)
      }
    }
    fetchSlots()
  }, [userDbId , slots])

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
