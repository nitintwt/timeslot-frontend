import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import axios from 'axios';
import { Button } from '@nextui-org/react';
import { MdDelete } from "react-icons/md";

export default function SlotCard({startTime , endTime , date , slotId}) {
  const [deleted , setDeleted] = useState(false)

  const deleteSlot = async ()=>{
    try {
      const action = await axios.delete(`${import.meta.env.VITE_AWS_USERS_API}/api/v1/slot/deleteSlot?slotId=${slotId}`)
      console.log("deleted",action)
      setDeleted(true)
    } catch (error) {
      setDeleted(false)
      console.log("Something went wrong while deleting slot" , error)
    }
  }

  return (
    <Card className='dark m-5'>
      <CardBody >
       <div>
          <div className="p-4 rounded-md">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <span>{date}</span>
          </div>
              <div className="font-bold">{startTime} - {endTime}</div>
              <button onClick={deleteSlot}>
               <MdDelete size={21} color='red' />
              </button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}