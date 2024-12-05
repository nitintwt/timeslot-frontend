import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import axios from 'axios';
import { useCookies } from 'react-cookie';

function DashboardEarningsCard() {
  const [userEarnings , setUserEarnings]= useState(0)
  const [cookies]= useCookies()
  const userDbId = cookies?.userData?._id

  useEffect(()=>{
    const fetchEarnings = async ()=>{
      try {
        const userEarnings = await axios.get(`${import.meta.env.VITE_AWS_USERS_API}/api/v1/users/totalRevenueOfLast28Days?userDbId=${userDbId}`)
        setUserEarnings(userEarnings.data.data)
      } catch (error) {
        console.log("Something went wrong while fetching user earnings" , error)
      }
    }
    fetchEarnings()
  }, [userDbId])

  return (
  <Card>
    <CardHeader className="gap-2">
      <h2 className="text-2xl font-bold">Earnings <br/><p className='text-gray-600 text-lg'>Last 28 days</p></h2>
    </CardHeader>
    <CardBody className="flex flex-col items-center justify-center gap-2">
      <div className="text-4xl font-bold">₹{userEarnings}</div>
    </CardBody>
  </Card>
  )
}

export default DashboardEarningsCard
