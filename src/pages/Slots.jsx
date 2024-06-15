import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import InputSlotsTime from "@/components/Slots/InputSlotsTime"
import TimeSlotPreview from "@/components/Slots/TimeSlotPreview"
import SelectDate from "@/components/Slots/SelectDate"

export default function Component() {
  return (
    <div className="bg-black  flex flex-col h-screen">
      <header className=" text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Create Your Slots</h1>
      </header>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
        <div className=" dark p-4 md:p-8 overflow-auto">
           <SelectDate/>
        </div>
        <div>
          <InputSlotsTime/>
        </div>
      </div>
    </div>
  )
}
