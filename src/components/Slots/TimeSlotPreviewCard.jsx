import React from 'react'
import {Card, CardBody} from "@nextui-org/react";

function TimeSlotPreviewCard({timeslots}) {
  return (
    <Card>
      <CardBody >
       <div>
          <div className="p-4 rounded-md">
            <div className="flex items-center justify-between">
              <div className="font-bold">9:00 AM - 9:30 AM</div>
              <div className="">Free</div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default TimeSlotPreviewCard
