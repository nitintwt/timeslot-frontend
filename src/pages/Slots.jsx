import {Calendar} from "@nextui-org/calendar";
import { Label } from "../components/ui/label"
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover"
import { Button } from "../components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select"

export default function Slots() {
  return (
    <div className="flex flex-col h-screen bg-black">
      <header className=" text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Create Your Slots</h1>
      </header>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
        <div className=" p-4 md:p-8 overflow-auto">
        <Calendar aria-label="Date (Uncontrolled)"  />
        </div>
        <div className="bg-white dark:bg-gray-950 p-4 md:p-8 space-y-6 overflow-auto">
          <div>
            <h2 className="text-xl font-bold mb-2">Time Slot Settings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start-time">Start Time</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <ClockIcon className="mr-1 h-4 w-4 -translate-x-1" />
                      9:00 AM
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <div />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="end-time">End Time</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <ClockIcon className="mr-1 h-4 w-4 -translate-x-1" />
                      5:00 PM
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <div />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="30 minutes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="90">1.5 hours</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="break-time">Break Time</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="15 minutes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">No break</SelectItem>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Time Slot Preview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="font-bold">9:00 AM - 9:30 AM</div>
                    <div className="text-gray-500 dark:text-gray-400">30 min</div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mt-1">Available</div>
                </div>
              </div>
              <div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="font-bold">9:30 AM - 10:00 AM</div>
                    <div className="text-gray-500 dark:text-gray-400">30 min</div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mt-1">Available</div>
                </div>
              </div>
              <div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="font-bold">10:00 AM - 10:30 AM</div>
                    <div className="text-gray-500 dark:text-gray-400">30 min</div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mt-1">Unavailable</div>
                </div>
              </div>
              <div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="font-bold">10:30 AM - 11:00 AM</div>
                    <div className="text-gray-500 dark:text-gray-400">30 min</div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mt-1">Available</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Save Time Slots</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ClockIcon(props) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}