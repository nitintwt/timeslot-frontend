import React, { useEffect , useState} from 'react'
import {Input} from "@nextui-org/input";
import {Button, ButtonGroup} from "@nextui-org/button";
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import {Link} from "@nextui-org/react";

function UserInfoCard() {
  const {user}= useUser()
  const [userName , setUserName]= useState('')
  const userDbId = sessionStorage.getItem('userDbId')
  const [userNameExist , setUserNameExist]= useState(false)

  useEffect(()=>{
    const fetchUserDetails = async ()=>{
      try {
        const userDetails = await axios.get(`/api/v1/users/getUserDetails?userDbId=${userDbId}`)
        if (userDetails?.data?.data?.userName) {
          setUserNameExist(true)
          setUserName(userDetails?.data?.data?.userName)
        }
      } catch (error) {
        console.log("Something went wrong while fetching user details" , error)
      }
    }
    fetchUserDetails()
  },[userDbId])

  return (
  <div className="flex text-white ml-1 w-full max-w-[400px] flex-col gap-6 border- bg-background p-6 sm:p-8 md:p-10 md:border-l-0 md:border-t">
    <div className="flex items-center gap-4">
      <div className="grid gap-1">
        <div className="font-medium">{user?.fullName}</div>
        <div className="text-sm text-muted-foreground">{user?.emailAddresses?.[0]?.emailAddress}</div>
      </div>
    </div>
    <div className="grid gap-4">
      { userNameExist ? (
        <div className=''>
          <h2>Link</h2>
          <p className='ml-2'>
            <Link href={`/${userName}`}> {`localhost:3000/${userName}`}</Link>
          </p>
        </div>
      ) : (
      <div className="grid gap-2">
        <h2 htmlFor="username">Username</h2>
        <Input description='username will link to your booking page.For example: timeslot.com/john' defaultValue={userName}/>
      </div>
      )}
      <hr/>
      <div className="grid gap-2">
        <div className="font-medium">Connected Accounts</div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChromeIcon className="h-5 w-5" />
              <div>Google</div>
            </div>
            <Button variant="outline" size="sm">
              Disconnect
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SquareStackIcon className="h-5 w-5" />
              <div>Stripe</div>
            </div>
            <Button variant="outline" size="sm">
              Disconnect
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CitrusIcon className="h-5 w-5" />
              <div>LemonSqueezy</div>
            </div>
            <Button variant="outline" size="sm">
              Disconnect
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserInfoCard

function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function CitrusIcon(props) {
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
      <path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
      <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
      <path d="m14 10-5.5 5.5" />
      <path d="M14 17.85V10H6.15" />
    </svg>
  )
}


function SquareStackIcon(props) {
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
      <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
      <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}