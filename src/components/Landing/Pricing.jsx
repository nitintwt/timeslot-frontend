import { Check } from "lucide-react";
import {Button, ButtonGroup} from "@nextui-org/button";
import { Link, useNavigate } from "react-router-dom";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

export default function PricingPage() {
  const navigate = useNavigate()
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Personalized URL", "30 Bookings per Month", "Google Meet Integration", "Unlimited Email Notifications", "Customer Analytics"],
    },
    {
      name: "Monthly",
      price: "$9",
      features: [
        "Personalized URL",
        "Unlimited Bookings",
        "Google Calendar Integration",
        "Unlimited Email Notifications",
        "Customer Analytics",
        "Customized Email Notifications",
        "Email & Live Chat Support"
      ],
    },
    {
      name: "Yearly",
      price: "$89",
      features: [
        "Personalized URL",
        "Unlimited Bookings",
        "Google Calendar Integration",
        "Unlimited Email Notifications",
        "Customer Analytics",
        "Customized Email Notifications",
        "Email & Live Chat Support"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold  sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="flex flex-col bg-gray-950 justify-between border-2 border-gray-200 text-white"
            >
              <CardHeader className="flex flex-col items-start text-center justify-start">
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <h3 className="text-4xl font-extrabold mt-2">{plan.price}</h3>
              </CardHeader>
              <CardBody >
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-900 mr-2" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 text-lg" onClick={()=> navigate("/signup")}>
                  Start
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

