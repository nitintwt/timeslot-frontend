import React , {useState , useEffect} from 'react'
import BookingSlotCard from './BookingSlotCard'
import axios from 'axios';

function PastBookings() {
  const [slots , setSlots]= useState([])
  const userDbId = sessionStorage.getItem('userDbId')

  useEffect(()=>{
    const fetchPastSlots = async ()=>{
      try {
        const data = await axios.get(`/api/v1/slot/pastSlots?userDbId=${userDbId}`)
        setSlots(data?.data?.data)
      } catch (error) {
        console.log("Something went wrong while fetching upcoming slots" , error)
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


export default PastBookings
