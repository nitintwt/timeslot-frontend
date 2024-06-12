import React, { Fragment } from 'react'
import Navbar from './components/ui/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/ui/Sidebar'

function Layout() {
  return (
    <>
    <Sidebar/>
    <Outlet/>
    </>

  )
}

export default Layout
