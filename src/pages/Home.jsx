import { useUser } from '@clerk/clerk-react'
import axios from 'axios'
import React, { Fragment, useCallback, useEffect } from 'react'
import { Toaster, toast } from 'sonner';

function Home() {
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


  //console.log(user?.emailAddresses?.[0]?.emailAddress)
  return (
    <div className='bg-black text-white h-screen'>
    <Toaster position="bottom-center" />
    </div>
  )
}

export default Home
