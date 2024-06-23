import { useState } from "react"
import { Calendar } from '@nextui-org/calendar';
import {Button, ButtonGroup} from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function SelectTimeSlot() {
  const [selectedDate, setSelectedDate] = useState()
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const availableTimeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "12:00 PM", available: true },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: true },
    { time: "5:00 PM", available: true },
  ]

  const handleDateChange = (date) => {
    setSelectedDate(date)
    setSelectedTimeSlot(null)

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
          <div className="grid grid-cols-3 gap-4">
            {availableTimeSlots.map((timeSlot, index) => (
              <Button
                key={index}
                variant={selectedTimeSlot === timeSlot ? "primary" : "outline"}
                onClick={() => handleTimeSlotSelect(timeSlot)}
                disabled={!timeSlot.available}
                className="justify-start"
              >
                {timeSlot.time}
              </Button>
            ))}
          </div>
          {selectedTimeSlot && (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-white ">
              <div>
                <div htmlFor="name">Name</div>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <div htmlFor="email">Email</div>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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