import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

function UpcomingBookings() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardBody className="grid gap-4">
          <div className="flex items-center justify-between">
            <h1 className="font-medium">John Doe</h1>
            <h2 className="text-muted-foreground">john@example.com</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            <div>
              <div className="text-sm text-muted-foreground">Slot Duration</div>
              <div>1 hour</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Booking Date</div>
              <div>2023-06-15</div>
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Reason for Booking</div>
            <div>Consultation for new product launch strategy.</div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default UpcomingBookings
