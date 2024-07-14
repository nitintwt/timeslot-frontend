import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

function CustomerInfoCard() {
  return (
  <Card>
    <CardHeader>
      <h2 className='text-2xl font-bold'>Customer Information</h2>
    </CardHeader>
    <CardBody className="grid gap-4">
      <div className="flex items-center gap-4">
        <div className="grid gap-1">
          <h1 className="font-medium">Jared Palmer</h1>
          <h2 className="text-sm text-muted-foreground">jared@acme.inc</h2>
        </div>
      </div>
      <hr/>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Phone</div>
          <div>+1 (555) 555-5555</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Address</div>
          <div>123 Main St, Anytown USA</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Last Order</div>
          <div>2023-04-15</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Total Spent</div>
          <div>$1,234.56</div>
        </div>
      </div>
    </CardBody>
  </Card>
  )
}

export default CustomerInfoCard
