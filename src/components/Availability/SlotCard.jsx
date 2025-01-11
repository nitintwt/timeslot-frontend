import React, {  useState , Fragment } from 'react'
import {Card, CardBody} from "@nextui-org/card";
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { toast, Toaster } from 'sonner';

export default function SlotCard({startTime , endTime , date , slotId}) {
  const [deleted , setDeleted] = useState(false)

  const deleteSlot = async ()=>{
    try {
      const action = await axios.delete(`${import.meta.env.VITE_AWS_USERS_API}/api/v1/slot/slot?slotId=${slotId}`)
      console.log("deleted",action)
      setDeleted(true)
      toast.success(action?.data?.data)
    } catch (error) {
      setDeleted(false)
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <>
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
                  { deleted ? (
                  <Fragment>
                    <button >
                      <MdDelete size={21} color='gray' />
                    </button>
                  </Fragment>
                  ):(
                  <Fragment>
                    <button onClick={deleteSlot}>
                    <MdDelete size={21} color='red' />
                    </button>
                  </Fragment>
                  )}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Toaster position='bottom-center'/>
    </>
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