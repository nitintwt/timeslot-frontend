import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import axios from 'axios';

function BookingSlotCard({ slotId , slotStartTime , slotEndTime , date}) {
  const [customer , setCustomer]= useState('')

  useEffect (()=>{
    const fetchCustomerData = async ()=>{
      try {
        const data = await axios.get(`/api/v1/users/getCustomerData?slotId=${slotId}`)
        console.log(data)
      } catch (error) {
        console.log("Something went wrong while fetching customer data" , error)
      }
    }
    fetchCustomerData()
  }, [slotId])
  
  return (
    <Card>
    <CardBody className="grid gap-4">
      <div className="flex items-center justify-between">
        <h1 className="font-medium">{customer.Name}</h1>
        <h2 className="text-muted-foreground">{customer.Email}</h2>
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
        <h2>{customer.reason}</h2>
      </div>
    </CardBody>
  </Card>
  )
}

export default BookingSlotCard
