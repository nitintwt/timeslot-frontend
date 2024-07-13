
import DashboardLeft from '@/components/Dashboard/DashboardLeft'
import DashboardRight from '@/components/Dashboard/DashboardRight'
import React from 'react'

function Dashboard() {
  return (
    <section className="flex flex-col-reverse lg:flex-row w-screen overflow-x-hidden bg-[rgb(14_13_12)] gap-4 px-2 py-4 md:px-8  lg:px-12 ">
      <DashboardLeft/>
      <DashboardRight/>
    </section>
  )
}

export default Dashboard
