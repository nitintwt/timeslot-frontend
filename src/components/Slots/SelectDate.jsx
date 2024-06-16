import React from 'react';
import { Calendar } from '@nextui-org/calendar';

function SelectDate() {
  return (
    <div className="flex justify-center m-12 ">
      <div className="transform scale-125 p-4">
        <Calendar 
        aria-label="Date (Uncontrolled)"
        />
      </div>
    </div>
  )
}

export default SelectDate
