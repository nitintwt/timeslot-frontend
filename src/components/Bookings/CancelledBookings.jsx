import React , {useState} from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

function CancelledBookings() {
  const [bookings , setBookings]= useState([])

  return (
    <div className="grid gap-4">
      {bookings.length > 0 ? (
        bookings.map((booking)=>(
          <BookingSlotCard clientName={booking.name} clientEmail={booking.email} slotDuration={booking.startTime} date={booking.date} reasonOfBooking={booking.reason}/>
        ))
      ) : (
        <h1 className='text-xl font-bold text-white'>No Slots</h1>
      )}

    </div>
  )
}

export default CancelledBookings
