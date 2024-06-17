import React, { useEffect, useState } from 'react';
import { Calendar } from '@nextui-org/calendar';
import { useDispatch, useSelector } from 'react-redux';
import { createSlot } from '@/store/slotsSlice';
import { useSelect } from '@nextui-org/react';

function SelectDate() {
  const [date , setDate]= useState()
  const dispatch = useDispatch()
  const slots = useSelector((state)=> state?.slots)

  console.log(slots)
  
  useEffect(()=>{
    if(date){
      const formateDate = ()=>{
        const day = date?.day
        const month = date?.month
        const year = date?.year
    
        return `${day}/${month}/${year}`
      }
      console.log(formateDate(date))
      dispatch(createSlot({
        date: formateDate(date)
      }))
    }
  },[date])


  return (
  <div>
    
  </div>
  )
}

export default SelectDate
