import React from 'react'
import {Card, CardBody} from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteSlot } from '@/store/slotsSlice';

function SlotPreviewCard({startTime , endTime , paid , price}) {
  const dispatch = useDispatch()

  const handleDelete= ()=>{
    dispatch(deleteSlot(startTime))
  }
  
  return (
    <Card>
      <CardBody >
       <div>
          <div className="p-4 rounded-md">
            <div className="flex items-center justify-between">
              <div className="font-bold">{startTime} - {endTime}</div>
              {paid=='true' ? 
              (
                <div>{price}</div>
              ):
              (
              <div className="">Free</div>
              )}
              <button onClick={handleDelete}>
               <MdDelete size={21} color='red' />
              </button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default SlotPreviewCard
