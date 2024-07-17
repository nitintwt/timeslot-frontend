import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

function CancelledBookings() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardBody className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="font-medium">Liam Williams</div>
            <div className="text-muted-foreground">liam@example.com</div>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            <div>
              <div className="text-sm text-muted-foreground">Slot Duration</div>
              <div>30 minutes</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Booking Date</div>
              <div>2023-04-10</div>
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Reason for Booking</div>
            <div>Discuss technical integration requirements for new API.</div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default CancelledBookings
