import { useUser } from '@clerk/clerk-react'
import React, { Fragment } from 'react'

function Home() {
  const {user}= useUser()

  console.log(user)
  return (
    <div className='bg-gray-950 text-white h-screen'>
      
    </div>
  )
}

export default Home
