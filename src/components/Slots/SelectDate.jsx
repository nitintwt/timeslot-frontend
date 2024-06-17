import React, { useState } from 'react';
import { Calendar } from '@nextui-org/calendar';

function SelectDate() {
  const [date , setDate]= useState()
  console.log(date)
  return (
    <div className="flex justify-center m-12 ">
      <div className="transform scale-125 p-4">
        <Calendar
        value={date} 
        onChange={setDate}
        aria-label="Date (Uncontrolled)"
        />
      </div>
    </div>
  )
}

export default SelectDate
