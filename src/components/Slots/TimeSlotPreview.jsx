import React from 'react'

function TimeSlotPreview({timeslots}) {
  return (
    <div>
      <h2 className='text-xl font-bold text-white pb-8'>Time Slot Preview</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap 4'>
       <div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
            <div className="flex items-center justify-between">
              <div className="font-bold">9:00 AM - 9:30 AM</div>
              <div className="text-gray-500 dark:text-gray-400">30 min</div>
            </div>
            <div className="text-gray-500 dark:text-gray-400 mt-1">Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeSlotPreview
