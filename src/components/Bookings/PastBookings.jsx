import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

function PastBookings() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardBody className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="font-medium">Michael Johnson</div>
            <div className="text-muted-foreground">michael@example.com</div>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            <div>
              <div className="text-sm text-muted-foreground">Slot Duration</div>
              <div>45 minutes</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Booking Date</div>
              <div>2023-05-30</div>
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Reason for Booking</div>
            <div>Discuss partnership opportunities for new product line.</div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default PastBookings
