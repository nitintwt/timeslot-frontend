import React , {useState} from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

function PastBookings() {
  const [slots , setSlots]= useState([])
  const userDbId = sessionStorage.getItem('userDbId')

  useEffect(()=>{
    const fetchPastSlots = async ()=>{
      try {
        const data = await axios.get(`/api/v1/slot/pastSlots?userDbId=${userDbId}`)
        console.log(data)
      } catch (error) {
        console.log("Something went wrong while fetching upcoming slots" , error)
      }
    }
    fetchPastSlots()
  } , [userDbId])
  
  return (
    <div className="grid gap-4">
      {slots.length > 0 ? (
        slots.map((slot)=>(
          <BookingSlotCard customerName={customer.name} customerEmail={customer.email}  reasonOfBooking={customer.reason} slotId={slot._id}/>
        ))
      ) : (
        <h1 className='text-xl font-bold text-white'>No Slots</h1>
      )}

    </div>
  )
}


export default PastBookings
