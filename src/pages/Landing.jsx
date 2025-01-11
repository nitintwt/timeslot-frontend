import React from 'react';
import { 
  Button, 
  Card, 
  CardBody,
  Input,
  Divider 
} from '@nextui-org/react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Globe, 
  Calendar as CalendarIcon, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import { Link, NavLink, useNavigate } from "react-router-dom"
import PricingPage from '@/components/Landing/Pricing';
import { useEffect } from "react"
import { useCookies } from "react-cookie"


const Landing = () => {
  const [cookies] = useCookies()
  const navigate = useNavigate()

  useEffect(() => {
    if (cookies?.userData?._id) {
      navigate("/dashboard")
    }
  }, [cookies, navigate])
  return (
    <div className="bg-black text-white">
                <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
            <NavLink to="/" className="flex items-center gap-2 text-3xl font-semibold">
              <span className="text-white font-bold pt-5">Timeslot</span>
            </NavLink>
          </div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left side content */}
            <div className="lg:col-span-5 lg:pl-8">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                Easy <br />scheduling <br />
                <span className="text-gray-400">ahead</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 max-w-lg">
                Timeslot is your scheduling automation platform for eliminating the back-and-forth emails for finding the perfect time — and so much more.
              </p>
              <div className="space-y-4 mb-8">
                <Button 
                  size="lg"
                  className="w-full md:w-auto bg-white text-black font-bold"
                >
                  <Link to="/signup">Sign up for free</Link>
                </Button>
                <p className="text-sm text-gray-400">
                  Create your free account. No credit card required.
                </p>
              </div>
            </div>

            {/* Right side image */}
            <div className="lg:col-span-7">
              <div className="relative">
                <Card className="bg-gray-900 border border-gray-800">
                  <CardBody>
                    <img 
                      src="/timeslot.png" 
                      alt="Calendar Interface" 
                      className="rounded-lg w-full"
                    />
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="bg-black text-white py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How Timeslot Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6">
                <CalendarIcon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Set your availability</h3>
              <p className="text-gray-400">Share your schedule with rules and preferences</p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Globe className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Share your link</h3>
              <p className="text-gray-400">Send guests your Timeslot link or embed it on your website</p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <MessageSquare className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Get booked</h3>
              <p className="text-gray-400">Guests book available times and get confirmations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
            <div className="mx-auto grid max-w-7cxl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
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
              <Card className="bg-gray-900 border border-gray-800 ">
                <CardBody>
                  <img 
                    src="/Bookings.png" 
                    alt="Scheduling Interface" 
                    className="rounded-lg "
                     
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

      {/* Benefits Section */}
      <section className="bg-black text-white py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Schedule meetings without the back-and-forth</h2>
              <div className="space-y-6">
                {[
                  "Share your availability with one click",
                  "Let guests pick a time that works for them",
                  "Automatically sync with your calendar",
                  "Get notified when meetings are scheduled"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                className="mt-8 bg-white text-black"
              >
                <Link to="/signup">Start for free</Link>
              </Button>
            </div>
            <div>
              <Card className="bg-gray-900 border border-gray-800">
                <CardBody>
                  <img 
                    src="/timeslotBookingPage.png" 
                    alt="Scheduling Interface" 
                    className="rounded-lg"
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <PricingPage/>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start scheduling today</h2>
          <p className="text-xl text-gray-400 mb-8">
            Sign up for free, no credit card required. Upgrade when you're ready.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black font-bold"
          >
            <Link to="/signup">Get started for free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Security</li>
                <li>Integrations</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sales</li>
                <li>Marketing</li>
                <li>Customer Success</li>
                <li>Recruiting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Blog</li>
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <Divider className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Timeslot. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Landing