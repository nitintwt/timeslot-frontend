import { useState } from "react"
import { Calendar } from '@nextui-org/calendar';
import {Button, ButtonGroup} from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {today, getLocalTimeZone} from "@internationalized/date";
import axios from "axios";
import { useUser } from '@clerk/clerk-react'
import SlotCard from "./SlotCard";

export default function SelectTimeSlot() {
  const [selectedDate, setSelectedDate] = useState()
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [slots , setSlots]= useState([])
  const {user}= useUser()

  const formatDate = (date) => {
    if (!date) return "";
    const day = date.day;
    const month = date.month;
    const year = date.year;
    return `${day}/${month}/${year}`;
  };

  const handleDateChange = async (date) => {
    setSelectedDate(date)
    setSelectedTimeSlot(null)
    const formattedDate = formatDate(date);
    try {
      const fetchSlots = await axios.get("/api/v1/slot/getSlots" , {
        params:{date:formattedDate , email:user?.emailAddresses?.[0]?.emailAddress,}
      })
      console.log(fetchSlots.data.data)
      setSlots(fetchSlots.data.data)
    } catch (error) {
      console.log("Error fetching slots" , error)
    }
  }

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Booking submitted:", {
      date: selectedDate.toLocaleDateString(),
      timeSlot: selectedTimeSlot.time,
      name,
      email,
    })
  }
  return (
    <div className=" mx-auto p-6 sm:p-10 bg-black dark  ">
      <h1 className="text-3xl font-bold mb-6 text-neutral-300">Book a Time Slot</h1>
      <div className="grid md:grid-cols-2 gap-8 ">
        <div className="flex justify-center m-12">
        <div className="transform scale-125 p-4">
            <Calendar
            aria-label="Date (Uncontrolled)"
            value={selectedDate}
            onChange={handleDateChange}
            defaultValue={today(getLocalTimeZone())}
            minValue={today(getLocalTimeZone())}
            />
          </div>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {slots?.map((slot)=>(
              <button onClick={()=> handleTimeSlotSelect(slot)}>
                <SlotCard startTime={slot.startTime} endTime={slot.endTime} price={slot?.price} paid={slot?.paid}/>
              </button>
            ))}

          </div>
          {selectedTimeSlot && (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-white ">
              <div>
                <Input id="name" type="string" variant="bordered" label='Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Input id="email" type="email" variant="bordered" label='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full" color="primary" variant="shadow">
                Book Slot
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}