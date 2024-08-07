import {Tabs, Tab} from "@nextui-org/tabs";
import React from 'react'
import UpcomingBookings from "@/components/Bookings/UpcomingBookings";
import PastBookings from "@/components/Bookings/PastBookings";
import CancelledBookings from "@/components/Bookings/CancelledBookings";

function Bookings() {
  return (
    <div className="bg-black h-screen" >
      <div className=" absolute top-8 left-15 w-full max-w-4xl  mx-auto py-8 dark p-2">
        <Tabs defaultValue="upcoming" >
          <Tab key='upcoming' title='Upcoming'>
            <UpcomingBookings/>
          </Tab>
          <Tab key='past' title='Past'>
            <PastBookings/>
          </Tab>
          <Tab key='cancelled' title='Cancelled'>
            <CancelledBookings/>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Bookings
