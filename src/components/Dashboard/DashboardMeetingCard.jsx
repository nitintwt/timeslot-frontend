import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import axios from "axios";
import React, { useEffect, useState } from 'react'

function DashboardMeetingCard() {
  const [numberOfMeetings , setNumberOfMeetings]= useState(0)
  const userDbId = sessionStorage.getItem('userDbId')

  useEffect(()=>{
    const fetchMeetingsData = async ()=>{
      try {
        const meetings = await axios.get(`/api/v1/users/totalNumberOfMeetingsOfLast28Days?userDbId=${userDbId}`)
        setNumberOfMeetings(meetings?.data?.data)
      } catch (error) {
        console.log("Something went wrong while fetching meetings data" , error)
      }
    }
    fetchMeetingsData()
  },[userDbId])

  return (
  <Card>
    <CardHeader>
      <h2 className="text-2xl font-bold">Meetings <br/><p className='text-gray-600 text-lg'>Last 28 days</p></h2>
    </CardHeader>
    <CardBody className="flex flex-col items-center justify-center gap-2">
      <div className="text-4xl font-bold">{numberOfMeetings}</div>
    </CardBody>
  </Card>
  )
}

export default DashboardMeetingCard
