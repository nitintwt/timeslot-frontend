import DashboardEarningsCard from "../components/Dashboard/DashboardEarningsCard";
import DashboardMeetingCard from "../components/Dashboard/DashboardMeetingCard";
import CustomerInfoCard from "@/components/Dashboard/CustomerInfoCard";
import UserInfoCard from "../components/Dashboard/UserInfoCard";
import { useUser } from '@clerk/clerk-react'
import React, { Fragment, useCallback, useEffect } from 'react'
import { Toaster, toast } from 'sonner';
import axios from 'axios'


export default function Dashboard() {
  const {user}= useUser()
    // I am saving the user email , and name in db just after clerk auth completion
  // to not make uncountable db calls while the user is on website , made a variable to set db call only once
  // using boolean value to check if the db call is already made or not
  // the variable is saved in the session storage , only once the db call is made
  // the backend code is written such that , if email exists it will send a respose that user already exists 
  // and if not then it register him
  useEffect(()=>{
    const databaseCallMade = sessionStorage.getItem('databaseCallMade');
    if (user && !databaseCallMade) {
      const userRegisterInDb = async()=>{
        try {
          const saveUserInDb = await axios.post(`${import.meta.env.VITE_AWS_USERS_API}/api/v1/users/register` , {
          email: user?.emailAddresses?.[0]?.emailAddress,
          fullName : user?.fullName
          })
          toast.success(saveUserInDb?.data?.message)
          sessionStorage.setItem('databaseCallMade', 'true');
          sessionStorage.setItem('userDbId' ,saveUserInDb?.data?.data?._id )
          console.log(saveUserInDb?.data?.data?._id)
        } catch (error) {
          console.log(error)
          toast.error("Something went wrong while registering. Please re-login.")
        }
      }
      userRegisterInDb()
    }
  },[user])
  return (
    <div className="flex bg-black dark flex-col h-full w-full bg-muted/40 md:flex-row">
      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8 md:p-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-10">
          <DashboardEarningsCard/>
          <DashboardMeetingCard/>
        </div>
        <CustomerInfoCard/>
      </div>
      <UserInfoCard/>
    </div>
  )
}
