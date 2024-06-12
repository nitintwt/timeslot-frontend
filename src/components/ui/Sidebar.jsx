import { Outlet, NavLink } from "react-router-dom";
import { Button } from "./button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Badge } from "./badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';
import { Sheet, SheetTrigger, SheetContent } from "./sheet";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "./dropdown-menu";
import { LucideCalendarCheck } from "lucide-react";
import { IoTime } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";

export default function Sidebar() {
  // bg-muted , text-primary 
  return (
    <div className="grid min-h-screen  w-full md:grid-cols-[220px_1fr] lg:grid-cols-[200px_1fr]" >
      <div className="hidden md:block" style={{background:'#0a0a0a'}}>
        <div className="flex dark h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
            <NavLink to="/" className="flex items-center gap-2 text-3xl font-semibold">
              <span className="text-white font-bold">TimeSlot</span>
            </NavLink>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-m font-medium lg:px-4">
              <NavLink to="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}} >
              <GoGraph size={21}/>
               Dashboard
              </NavLink>
              <NavLink to="/profile" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}} >
              <CgProfile size={21}/>
               Profile
              </NavLink>
              <NavLink to="/bookings" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                <LucideCalendarCheck size={21}/>
                Bookings
              </NavLink>
              <NavLink to="/availability" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                <IoTime size={21}/>
                Availability
              </NavLink>
              <NavLink to="/billing" className="flex text-lg items-center gap-2 rounded-lg  px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}> 
                <MdOutlineAttachMoney size={25} />
                Billing
              </NavLink>
              <NavLink to="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
               <IoSettings size={20} />
                Settings
              </NavLink>
              <NavLink to="/customers" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                 <FaUsers size={21} />
                Customers
              </NavLink>
            </nav>
          </div>
          <div className="mt-auto p-2">
            <Card className='text-white bg-black'>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>Unlock all features and get unlimited access to our support team.</CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col " >
        <header className="flex h-14 items-center gap-4   px-4 lg:h-[60px] lg:px-6" style={{background:'#0a0a0a'}}>
          <Sheet>
            <SheetTrigger asChild>
              <Button  size="icon" className="shrink-0 md:hidden" style={{background:'#0a0a0a'}}>
                <IoMenu size={30}/>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className=" flex flex-col" style={{background:'#0a0a0a'}}>
              <nav className="grid  gap-2 text-lg font-medium">
                <NavLink to="/" className="flex items-center  gap-2 text-2xl pb-5 ">
                  <span className=" text-white font-bold">TimeSlot</span>
                </NavLink>
                <NavLink to="/dashboard" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                 <GoGraph size={21}/>
                  Dashboard
                </NavLink>
                <NavLink to="/profile" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                <CgProfile size={21}/>
                  Profile
                </NavLink>
                <NavLink to="/bookings" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl  px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                 <LucideCalendarCheck size={21}/>
                  Bookings
                </NavLink>
                <NavLink to="/availability" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                 <IoTime size={21}/>
                  Availability
                </NavLink>
                <NavLink to="/billing" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                 <MdOutlineAttachMoney size={23} />
                  Billing
                </NavLink>
                <NavLink to="/settings" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                 <IoSettings size={20} />
                  Settings
                </NavLink>
                <NavLink to="/customers" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                 <FaUsers size={21} />
                  Customers
                </NavLink>
              </nav>
              <div className="mt-auto ">
                <Card className='bg-black'>
                  <CardHeader className='text-white'>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>Unlock all features and get unlimited access to our support team.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="ml-auto ">
          <SignedOut>
            <Button color="primary" variant="ghost" size="lg">
              <SignInButton mode='modal' />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}