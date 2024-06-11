import React, { Fragment, useState } from 'react'
import { Link , NavLink } from 'react-router-dom'
import { Button } from '@nextui-org/react';
import { SignedIn, SignedOut, SignInButton, UserButton , SignIn } from "@clerk/clerk-react";

function Navbar() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6  bg-gray-950 dark:bg-gray-950 shadow">
      <Link className="text-lg font-bold text-white" to="/">
        TimeSlot
      </Link>
      <SignedOut>
      <Button color="primary" variant="ghost" size="lg">
        <SignInButton mode='modal' />
      </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default Navbar