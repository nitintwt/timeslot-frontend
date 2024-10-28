import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import axios from 'axios';
import { Button } from '@nextui-org/react';

function BookingSlotCard({ slotId , slotStartTime , slotEndTime , date , type}) {
  const [customer , setCustomer]= useState('')
  const [cancelled , setCancelled] = useState(false)

  useEffect (()=>{
    const fetchCustomerData = async ()=>{
      try {
        const data = await axios.get(`/api/v1/users/getCustomerData?slotId=${slotId}`)
        console.log(data.data.data)
        setCustomer(data?.data?.data)
      } catch (error) {
        console.log("Something went wrong while fetching customer data" , error)
      }
    }
    fetchCustomerData()
  }, [slotId])

  const cancelBooking = async ()=>{
    try {
      const cancelSlot = await axios.post(`/api/v1/slot/cancelBooking`, {slotId: slotId , customerEmail:customer.customerEmail , customerName: customer.customerName})
      setCancelled(true)
    } catch (error) {
      console.log("Something went wrong while canceling the booking" , error)
    }
  }
  
  return (
    <Card>
    <CardBody className="grid gap-4">
      <div className="flex items-center justify-between">
        <h1 className="font-medium">{customer?.customerName}</h1>
        <h2 className="text-muted-foreground">{customer?.customerEmail}</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        <div>
          <h1 className="text-sm text-muted-foreground">Slot Duration</h1>
          <h2>{slotStartTime} - {slotEndTime}</h2>
        </div>
        <div>
          <h1 className="text-sm text-muted-foreground">Booking Date</h1>
          <h2>{date}</h2>
        </div>
      </div>
      <div>
        <h1 className="text-sm text-muted-foreground">Reason for Booking</h1>
        <h2>{customer?.reasonForMeet}</h2>
      </div>
    </CardBody>
    {
      type ? (
        <div className='flex justify-end p-2 '>
          {cancelled ? (
            <Button color='default'>cancelled</Button>
          ) :(
            <Button onClick={cancelBooking} color='danger' >cancel</Button>
          )}
        </div>
      ):('')
    }
  </Card>
  )
}

export default BookingSlotCard
