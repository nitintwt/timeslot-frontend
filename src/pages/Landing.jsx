import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Calendar, Clock, Users, CheckCircle } from "lucide-react"
import HeroSection from "../components/Landing/HeroSection"
import Pricing from "../components/Landing/Pricing"

export default function Landing() {
  const [cookies] = useCookies()
  const navigate = useNavigate()

  console.log("cookies data from landing page" , cookies)

  useEffect(() => {
    if (cookies?.userData?._id) {
      navigate("/dashboard")
    }
  }, [cookies, navigate])

  return (
    <div className="flex flex-col min-h-[100dvh] text-white bg-black font-sans">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <div className="flex h-16 items-center px-4 lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 text-3xl font-bold">
            <Clock className="h-8 w-8" />
            <span className="text-white pt-1">TimeSlot</span>
          </NavLink>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <NavLink to="#features" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Features
          </NavLink>
          <NavLink to="#pricing" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Pricing
          </NavLink>
        </nav>
      </header>
      <main className="flex-1">
        <HeroSection />
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-gray-700 px-3 py-1 text-sm font-medium">
                  Key Features
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Streamline Your Scheduling with TimeSlot
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  TimeSlot offers a suite of powerful features to help you manage your bookings and appointments with
                  ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start space-x-4">
                    <Calendar className="h-6 w-6 text-blue-500 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Efficient Scheduling</h3>
                      <p className="text-gray-400">
                        Easily manage your availability and book appointments with just a few clicks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Easy Booking</h3>
                      <p className="text-gray-400">
                        Allow your clients to book appointments directly through your website or mobile app.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-purple-500 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Real-time Availability</h3>
                      <p className="text-gray-400">
                        Keep your clients informed with real-time updates on your availability.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                alt="TimeSlot features illustration"
                className="mx-auto w-full max-w-md h-auto overflow-hidden rounded-xl object-cover object-center shadow-xl"
              />
            </div>
          </div>
        </section>
        <Pricing />
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">&copy; 2024 TimeSlot. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Follow Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}