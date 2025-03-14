import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import axios from 'axios';
import { Button } from '@nextui-org/react';
import { toast, Toaster } from 'sonner';

function BookingSlotCard({ slotId , slotStartTime , slotEndTime , date , type}) {
  const [customer , setCustomer]= useState('')
  const [cancelled , setCancelled] = useState(false)

  useEffect (()=>{
    const fetchCustomerData = async ()=>{
      try {
        const data = await axios.get(`${import.meta.env.VITE_AWS_USERS_API}/api/v1/users/customerData?slotId=${slotId}`)
        console.log(data.data.data)
        setCustomer(data?.data?.data)
      } catch (error) {
        console.log("Something went wrong while fetching customer data")
      }
    }
    fetchCustomerData()
  }, [slotId])

  const cancelBooking = async ()=>{
    try {
      const cancelSlot = await axios.post(`${import.meta.env.VITE_AWS_USERS_API}/api/v1/slot/cancelBooking`, {slotId: slotId , customerEmail:customer.customerEmail , customerName: customer.customerName})
      setCancelled(true)
      toast.success(cancelSlot?.data?.data)
    } catch (error) {
      setCancelled(false)
      toast.error(error?.response?.data?.message)
    }
  }
  
  return (
    <>
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
      <Toaster position='bottom-center'/>
    </>
  )
}

export default BookingSlotCard
