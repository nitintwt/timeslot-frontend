import React, { Fragment } from 'react'
import Navbar from './ui/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>

  )
}

export default Layout
