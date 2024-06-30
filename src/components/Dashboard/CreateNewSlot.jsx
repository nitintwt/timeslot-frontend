import React, { Fragment } from 'react'
import {Button, ButtonGroup} from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

function CreateNewSlot() {
  return (
    <Fragment>
      <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <h1>Your Orders</h1>
          <CardBody className="max-w-lg text-balance leading-relaxed">
            Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.
          </CardBody>
        </CardHeader>
        <CardFooter>
          <Button>Create New Order</Button>
        </CardFooter>
      </Card>

    </Fragment>
  )
}

export default CreateNewSlot
