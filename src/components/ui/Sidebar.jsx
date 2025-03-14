import { Outlet, NavLink, useNavigate, Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Sheet, SheetTrigger, SheetContent } from "./sheet";
import { LucideCalendarCheck } from "lucide-react";
import { IoTime } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { useCookies } from "react-cookie";

export default function Sidebar() {
  const navigate = useNavigate()
  const cookies = useCookies()
  
  return (
    <div className="grid w-full md:grid-cols-[180px_1fr] lg:grid-cols-[180px_1fr] font-roboto">
      <div className="hidden md:block" style={{ background: '#0a0a0a' }}>
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <NavLink to="/" className="flex items-center gap-2 text-3xl font-semibold">
              <span className="text-white font-bold">Timeslot</span>
            </NavLink>
          </div>

          {/* Navigation Section */}
          <div className="flex-1 flex flex-col justify-between">
            <nav className="grid items-start px-2 font-medium lg:px-4">
              <NavLink to="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                <GoGraph size={21} />
                Dashboard
              </NavLink>
              <NavLink to="/slots" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                <IoIosCreate size={21} />
                Slots
              </NavLink>
              <NavLink to="/bookings" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                <LucideCalendarCheck size={21} />
                Bookings
              </NavLink>
              <NavLink to="/availability" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                <IoTime size={21} />
                Availability
              </NavLink>
              <NavLink to="/billing" className="flex items-center gap-2 rounded-lg px-3 py-2 pb-5 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                <MdOutlineAttachMoney size={23} />
                Billing
              </NavLink>
              <NavLink to="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                <IoSettings size={20} />
                Settings
              </NavLink>
              <NavLink to="/customers" className="flex items-center gap-3 rounded-lg px-3 py-2 pb-5 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                <FaUsers size={21} />
                Customers
              </NavLink>
            </nav>
            { cookies?.[0]?.userData?.paidUser ? (""): (
              <div className="p-4 bg-gray-950 rounded-lg shadow-lg text-center mb-4 mx-2">
                <h3 className="text-lg font-bold text-white">Upgrade to Premium</h3>
                <Button color="primary" size="sm" className="mt-3" onClick={()=> navigate("/pricing")}>Explore Plans</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6" style={{ background: '#0a0a0a' }}>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="shrink-0 md:hidden" style={{ background: '#0a0a0a' }}>
                <IoMenu size={30} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col" style={{ background: '#0a0a0a' }}>
              <nav className="grid gap-2 text-lg font-medium">
                <NavLink to="/" className="flex items-center gap-2 text-2xl pb-5">
                  <span className="text-white font-bold">TimeSlot</span>
                </NavLink>
                <NavLink to="/dashboard" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                  <GoGraph size={21} />
                  Dashboard
                </NavLink>
                <NavLink to="/slots" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                  <IoIosCreate size={21} />
                  Slots
                </NavLink>
                <NavLink to="/bookings" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                  <LucideCalendarCheck size={21} />
                  Bookings
                </NavLink>
                <NavLink to="/availability" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                  <IoTime size={21} />
                  Availability
                </NavLink>
                <NavLink to="/billing" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                  <MdOutlineAttachMoney size={23} />
                  Billing
                </NavLink>
                <NavLink to="/settings" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                  <IoSettings size={20} />
                  Settings
                </NavLink>
                <NavLink to="/customers" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 transition-all hover:text-white" style={({ isActive }) => isActive ? { color: 'white' } : {}}>
                  <FaUsers size={21} />
                  Customers
                </NavLink>
                { cookies?.[0]?.paidUser ? (""): (
                  <div className="p-4 bg-gray-950 rounded-lg shadow-lg text-center mb-4 mx-2">
                    <h3 className="text-lg font-bold text-white">Upgrade to Premium</h3>
                    <Button color="primary" size="sm" className="mt-3">Explore Plans</Button>
                  </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
