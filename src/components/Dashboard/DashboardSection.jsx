import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import TotalMeetingTimeCard from "./TotalMeetingTimeCard"
import TotalRevenueCard from "./TotalRevenueCard"
import ClientsSection from "./ClientsSection"
import ConnectedAccountsSection from "./ConnectedAccountsSection"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-2">
            <div>
              <TotalMeetingTimeCard/>
            </div>
            <div>
              <TotalRevenueCard/>
            </div>
          </div>
          <div>
            <ClientsSection/>
          </div>
          <div>
            <ConnectedAccountsSection/>
          </div>
        </div>
      </main>
    </div>
  )
}