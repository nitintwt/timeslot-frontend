import React from 'react'

function TotalRevenueCard() {
  return (
    <Card>
    <CardHeader className="pb-3">
      <CardTitle>Total Revenue</CardTitle>
      <CardDescription className="max-w-lg text-balance leading-relaxed">
        Total revenue earned in the last 28 days.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-4xl font-bold">$125,000</div>
        <div className="text-muted-foreground">Last 28 days</div>
      </div>
    </CardContent>
  </Card>
  )
}

export default TotalRevenueCard
