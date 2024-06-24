import React from 'react'
import {Card, CardBody} from "@nextui-org/react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteSlot } from '@/store/slotsSlice';

const SlotCard = ({startTime , endTime , paid , price , selected}) =>{

  return (
    <Card style={{ backgroundColor: selected ? '#000814' : '' }} >
      <CardBody >
       <div>
          <div className="p-4 rounded-md">
            <div className="flex items-center justify-between">
              <div className="font-bold">{startTime} - {endTime}</div>
              {paid ? 
              (
                <div>{price}</div>
              ):
              (
              <div className="">Free</div>
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default SlotCard


