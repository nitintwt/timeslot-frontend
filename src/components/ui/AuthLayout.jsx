
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner';

function AuthLayout({children}) {
  const navigate = useNavigate()
  const [loader , setLoader]= useState(true)
  const userDbId = sessionStorage.getItem('userDbId')

  useEffect(()=>{
    if (!userDbId){
      navigate("/")
    }
    setLoader(false)
  },[userDbId])
  
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default AuthLayout
