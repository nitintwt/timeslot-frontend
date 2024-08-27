import { useEffect } from "react";
import HeroSection from "../components/Landing/HeroSection";
import { useCookies } from "react-cookie";
import { Link, NavLink, useNavigate} from "react-router-dom";
import Pricing from "../components/Landing/Pricing";

export default function Landing() {
  const cookies = useCookies()
  const navigate = useNavigate()

  useEffect(()=>{
    if(cookies?.[0]?.userData?._id){
      navigate('/dashboard')
    }
  },[])
  
  return (
    <div className="flex flex-col min-h-[100dvh] text-white font-roboto">
      <header className="px-4 lg:px-6 h-14 flex items-center ">
          <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
            <NavLink to="/" className="flex items-center gap-2 text-3xl font-semibold">
              <span className="text-white font-bold pt-5">TimeSlot</span>
            </NavLink>
          </div>
      </header>
      <main className="flex-1">
        <HeroSection/>
        <section id="features" className="w-full py-12 md:py-24 lg:py-3 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Scheduling with Timeslot
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Timeslot offers a suite of powerful features to help you manage your bookings and appointments with
                  ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Efficient Scheduling</h3>
                      <p className="text-muted-foreground">
                      Easily manage your availability and book appointments with just a few clicks.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Easy Booking</h3>
                      <p className="text-muted-foreground">
                      Allow your clients to book appointments directly through your website or mobile app.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Real-time Availability</h3>
                      <p className="text-muted-foreground">
                      Keep your clients informed with real-time updates on your availability.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                alt="Image"
                className="mx-auto w-full h-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <Pricing/>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Timeslot. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact Us
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Follow Us
          </Link>
        </nav>
      </footer>
      </main>
    </div>
  );
}
