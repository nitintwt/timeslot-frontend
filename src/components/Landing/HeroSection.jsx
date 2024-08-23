import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { SignInButton } from "@clerk/clerk-react";

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Streamline Your Scheduling with Timeslot
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Timeslot is a powerful slot management SaaS app that helps you efficiently schedule appointments, manage availability, and provide a seamless booking experience for your clients.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button color="primary" size="lg">
                <SignInButton mode="modal" />
              </Button>
            </div>
          </div>
          <img
            src="/timeslot.png"
            alt="Hero"
            className="mx-auto w-full h-auto max-h-[400px] rounded-xl object-cover sm:w-full lg:order-last lg:max-h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

