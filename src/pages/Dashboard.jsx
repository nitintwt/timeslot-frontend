import DashboardEarningsCard from "../components/Dashboard/DashboardEarningsCard";
import DashboardMeetingCard from "../components/Dashboard/DashboardMeetingCard";
import CustomerInfoCard from "@/components/Dashboard/CustomerInfoCard";
import UserInfoCard from "../components/Dashboard/UserInfoCard";
import { useCookies } from "react-cookie";

export default function Dashboard() {
  const cookies = useCookies()
  return (
    <div className="flex bg-black dark flex-col h-full w-full bg-muted/40 md:flex-row">
      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8 md:p-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-10">
          <DashboardEarningsCard/>
          <DashboardMeetingCard/>
        </div>
        <CustomerInfoCard/>
      </div>
      <UserInfoCard/>
    </div>
  )
}
