import { Outlet, NavLink } from "react-router-dom";
import { Button } from "./button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Badge } from "./badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';
import { Sheet, SheetTrigger, SheetContent } from "./sheet";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "./dropdown-menu";

export default function Sidebar() {
  // bg-muted , text-primary 
  return (
    <div className="grid min-h-screen  w-full md:grid-cols-[220px_1fr] lg:grid-cols-[200px_1fr]" >
      <div className="hidden md:block" style={{background:'#0a0a0a'}}>
        <div className="flex dark h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
            <NavLink to="/" className="flex items-center gap-2 text-4xl font-semibold">
              <span className="text-white font-bold">TimeSlot</span>
            </NavLink>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-m font-medium lg:px-4">
              <NavLink to="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}} >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </NavLink>
              <NavLink to="/bookings" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                <ShoppingCartIcon className="h-4 w-4" />
                Bookings
              </NavLink>
              <NavLink to="/availability" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                <ShoppingCartIcon className="h-4 w-4" />
                Availability
              </NavLink>
              <NavLink to="/billing" className="flex items-center gap-3 rounded-lg  px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}> 
                <PackageIcon className="h-4 w-4" />
                Billing
              </NavLink>
              <NavLink to="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                <UsersIcon className="h-4 w-4" />
                Settings
              </NavLink>
              <NavLink to="/customers" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-muted-foreground transition-all hover:text-primary" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                <LineChartIcon className="h-4 w-4" />
                Customers
              </NavLink>
            </nav>
          </div>
          <div className="mt-auto p-4">
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
              <Button variant="outline" size="icon" className="shrink-0 md:hidden ">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className=" flex flex-col" style={{background:'#0a0a0a'}}>
              <nav className="grid  gap-2 text-lg font-medium">
                <NavLink to="/" className="flex items-center  gap-2 text-2xl pb-5 ">
                  <span className=" text-white font-bold">TimeSlot</span>
                </NavLink>
                <NavLink to="/dashboard" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                  <HomeIcon className="h-5 w-5" />
                  Dashboard
                </NavLink>
                <NavLink to="/bookings" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl  px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                  <ShoppingCartIcon className="h-5 w-5" />
                  Bookings
                </NavLink>
                <NavLink to="/availability" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                  <PackageIcon className="h-5 w-5" />
                  Availability
                </NavLink>
                <NavLink to="/billing" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                  <UsersIcon className="h-5 w-5" />
                  Billing
                </NavLink>
                <NavLink to="/settings" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                  <LineChartIcon className="h-5 w-5" />
                  Settings
                </NavLink>
                <NavLink to="/cusomers" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white" style={({ isActive }) => {return isActive ? { color: 'white' } : {};}}>
                  <LineChartIcon className="h-5 w-5" />
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

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CircleUserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}