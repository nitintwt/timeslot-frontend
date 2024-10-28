import { Check } from "lucide-react";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import axios from 'axios';
import React, { useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function PricingPage() {
  const [cookies , setCookies]= useCookies()
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

    // Function to load script and append in DOM tree.
    const loadScript = src => new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        console.log('Razorpay loaded successfully');
        resolve(true);
      };
      script.onerror = () => {
        console.log('Error in loading Razorpay');
        resolve(false);
      };
      document.body.appendChild(script);
    });
  
    // Load Razorpay checkout modal script
    const displayRazorpay = async () => {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      if (!res) {
        console.log('Razorpay SDK failed to load. Are you online?');
        return;
      }
    }
  
    useEffect(() => {
      console.log('Loading Razorpay script');
      displayRazorpay();
    }, []);
  
    const handleStart = async (id) => {
      try {
        // Create order
        const order = await axios.post("http://localhost:3005/api/v1/payment/order", {subscriptionId: id});
        console.log("Order created", order.data.data);
  
        const paymentObject = new window.Razorpay({
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          order_id: order.data.data.id,
          ...order.data.data,
          handler: async function (response) {
            try {
              const verify = await axios.post("http://localhost:3005/api/v1/payment/verify", {
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                userId: cookies?.userData?._id
              });
              console.log("Payment verified", verify);
              setCookies("userData", {...cookies.userData , paidUser:true})
              navigate("/dashboard")
            } catch (error) {
              console.log("Verification error", error);
            }
          }
        });
  
        paymentObject.open(); // Add open() to display Razorpay checkout
      } catch (error) {
        console.log("Error while creating order", error);
      }
    }
  

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
              {plan.name === "Free" ? "" : (
                plan.name ==="Monthly" ? (
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800" onClick={()=>handleStart(1)}>
                  Subscribe
                </Button>
                ) : (
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800" onClick={()=>handleStart(2)}>
                  Subscribe
                </Button>
                )
              )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
