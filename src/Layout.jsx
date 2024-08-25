import Sidebar from "./components/ui/Sidebar"; // import the Sidebar component
import { Outlet, NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import UserAvatar from "./components/ui/UserAvatar";

export default function MainLayout() {
  const [cookies]= useCookies()
  const [auth , setAuth]= useState(false)

  useEffect(()=>{
    if(cookies?.userData?._id){
      setAuth(true)
    }
  },[cookies])

  return (
    <div className="grid min-h-screen bg-gray-950 w-full md:grid-cols-[180px_1fr] lg:grid-cols-[180px_1fr] font-roboto">
    <Sidebar />
    <div className="flex flex-col">
      <header className="flex h-1 items-center gap-4 px-4 lg:h-[60px] lg:px-6" style={{ background: '#0a0a0a' }}>
        <div className="ml-auto pb-10 lg:pb-1">
          {auth ? (
            <UserAvatar/>
          ):(
            ('')
          )}
        </div>
      </header>
      <div className="flex-1 bg-black">
        <Outlet />
      </div>
    </div>
  </div>
  );
}

