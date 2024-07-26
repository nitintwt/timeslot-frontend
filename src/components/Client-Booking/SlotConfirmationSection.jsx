import { Fragment, useEffect, useState } from "react"
import { Calendar } from '@nextui-org/calendar';
import {Button, ButtonGroup} from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {today, getLocalTimeZone} from "@internationalized/date";
import axios from "axios";
import { useUser } from '@clerk/clerk-react'
import SlotCard from "./SlotCard";
import { Link, useParams } from "react-router-dom";
import {Textarea} from "@nextui-org/react";
import { Toaster, toast } from 'sonner';

export default function SelectTimeSlot() {
  const [selectedDate, setSelectedDate] = useState(today(getLocalTimeZone()))
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [slots , setSlots]= useState([])
  const [reason , setReason]= useState(null)
  const [booking , setBooking]= useState(false)
  const [booked , setBooked]= useState(false)
  const {user}= useUser()
  const {username}= useParams()

  console.log(username)


  const formatDate = (selectedDate)=>{
    const day = selectedDate?.day.toString().padStart(2, '0');
    const month = selectedDate?.month.toString().padStart(2, '0');
    const year = selectedDate?.year

    return `${year}-${month}-${day}`
  }

  // fetch all slots which are available according to the selected date
  // we fetch the slots according the username , which we get from the route param. It's a unique id type thing.
  // the username belong to the user whose slots the client want to book.
  useEffect (()=>{
    setSelectedTimeSlot(null)
    const formattedDate = formatDate(selectedDate);
    const fetchSlots = async ()=>{
      try {
        const fetch = await axios.get("/api/v1/slot/getSlots" , {
          params:{date:formattedDate , userName:username,}
        })
        setSlots(fetch.data.data)
        console.log(fetch)
      } catch (error) {
        console.log("Error fetching slots" , error)
      }
    }
    fetchSlots()
  },[selectedDate])

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot)
  }

  // the client data is saved in db and an email is sent to the client about the meeting details and for further updates.
  const handleSubmit = async (e) => {
    setBooking(true)
    e.preventDefault()
    const formattedDate = formatDate(selectedDate);
    try {
      const bookSlot = await axios.post("/api/v1/customer/bookSlot" , {
        email: email,
        name: name,
        slotId : selectedTimeSlot._id, 
        reason: reason,
        slotCreator: username
      })
      console.log("Slot booking done" , bookSlot)
      const setCalenderEvent = await axios.post("/api/v1/google/scheduleEvent" , {
        userName: username , client : name , clientEmail: email , date: formattedDate , timeSlot:selectedTimeSlot._id , meetReason: reason,
      })
      console.log("Calender event done" , setCalenderEvent.data.data.data.hangoutLink)
      const sendMail = await axios.post("/api/v1/customer/sendmail", {
        clientEmail: email,
        clientName:name,
        slotId: selectedTimeSlot._id,
        meetLink: setCalenderEvent.data.data.data.hangoutLink
      })
      setBooked(true)
      console.log("mail sent successfully" , sendMail)
    } catch (error) {
      console.log("Something went wrong while booking slot" , error)
      toast.error("Something went wrong while booking your slot. Please try again")
    }
  }

  return (
    <Fragment>
    { booked ? (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-md p-8 bg-background rounded-lg shadow-lg">
          <div className="flex flex-col items-center justify-center gap-6">
            <CircleCheckIcon className="w-16 h-16 text-green-500" />
            <h2 className="text-2xl font-bold">Booking Confirmed</h2>
            <p className="text-muted-foreground">
              Thank you for your booking. Please check your email for further information and updates.
            </p>
          </div>
        </div>
      </div>
    ) : 
      (
      <div className=" mx-auto p-6 sm:p-10 bg-black dark  ">
        <h1 className="text-3xl font-bold mb-6 text-neutral-300">Book a Time Slot</h1>
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="flex justify-center m-12">
            <div className="transform scale-125 p-4">
              <Calendar
              aria-label="Date (Uncontrolled)"
              value={selectedDate}
              onChange={setSelectedDate}
              defaultValue={today(getLocalTimeZone())}
              minValue={today(getLocalTimeZone())}
              />
            </div>
          </div>
          <div>
            {slots.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                {slots?.map((slot)=>(
                  <button key={slot._id} onClick={()=> handleTimeSlotSelect(slot)}>
                    <SlotCard startTime={slot.startTime} endTime={slot.endTime} price={slot?.price} paid={slot?.paid} selected={selectedTimeSlot?._id === slot._id} />
                  </button>
                ))}
              </div>
            )  : (<div className="font-md text-white"> No Slots available </div>)}
            {selectedTimeSlot && (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-white ">
                <div>
                  <Input id="name" type="string" variant="bordered" label='Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <Input id="email" type="email" variant="bordered" label='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                <Textarea
                  label="Description"
                  placeholder="Describe reason for meeting"
                  variant="underlined"
                  value={reason}
                  onChange={(e)=> setReason(e.target.value)}
                />
                </div>
                {booking ? (
                  <Button type="submit" className="w-full" color="primary" variant="shadow" isLoading >
                    Booking
                  </Button>
                ) : (
                <Button type="submit" className="w-full" color="primary" variant="shadow"  >
                  Book Slot
                </Button>
                )}
              </form>
            )}
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
      )}
      </Fragment>
  )
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}