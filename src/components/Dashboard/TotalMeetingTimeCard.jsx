import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

function TotalMeetingTimeCard() {
  return (
    <Card x-chunk="dashboard-05-chunk-1">
      <CardHeader className="pb-2">
        <h1>This Week</h1>
        <h2 className="text-4xl">$1,329</h2>
      </CardHeader>
      <CardFooter>
        <div className="text-xs text-muted-foreground">+25% from last week</div>
      </CardFooter>
    </Card>
  )
}

export default TotalMeetingTimeCard
