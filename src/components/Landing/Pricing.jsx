import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button, ButtonGroup} from "@nextui-org/button";

function Pricing() {
  return (
    <section className="w-full py-12 md:py-24  bg-muted dark">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Flexible Pricing for Freelancers and Independent Professionals
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Timeslot offers affordable plans designed to fit the needs of freelancers, from those just starting out to seasoned professionals.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Card className="p-6 grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Free Plan</h3>
                </div>
                <div className="text-4xl font-bold">$0</div>
              </div>
              <div className="grid gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4" />
                  <span>Manage your time with core scheduling tools.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4" />
                  <span>A cap on the number of bookings you can make.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4" />
                  <span>User Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4" />
                  <span>Perfect for freelancers just starting out.</span>
                </div>
              </div>
              <Button className="mt-4">Start Free Trial</Button>
            </Card>
            <Card className="p-6 grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Pro</h3>
                </div>
                <div className="text-4xl font-bold">$9</div>
              </div>
              <div className="grid gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4" />
                  <span>Unlimited bookings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4" />
                  <span>Get faster responses and priority assistance.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4" />
                  <span>Advanced reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4" />
                  <span>Access to premium tools for enhanced productivity.</span>
                </div>
              </div>
              <Button className="mt-4">Start</Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

