import Sidebar from "./components/ui/Sidebar"; // import the Sidebar component
import { Outlet, NavLink } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function MainLayout() {
  return (
    <div className="grid min-h-screen bg-gray-950 w-full md:grid-cols-[180px_1fr] lg:grid-cols-[180px_1fr] font-roboto">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content Area */}
    <div className="flex flex-col">
      {/* Navbar */}
      <header className="flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6" style={{ background: '#0a0a0a' }}>
        <div className="ml-auto">
          <SignedOut>
            <Button color="primary" variant="ghost" size="lg">
              <SignInButton mode="modal" />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      {/* Outlet for Routed Components */}
      <div className="flex-1 bg-black">
        <Outlet />
      </div>
    </div>
  </div>
  );
}

