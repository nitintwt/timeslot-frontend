import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import axios from 'axios';

export default function Component() {
  const userDbId = sessionStorage.getItem('userDbId')
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      bookedSlots: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      bookedSlots: 1,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      bookedSlots: 5,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      bookedSlots: 2,
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael@example.com",
      bookedSlots: 4,
    },
  ];

  useEffect (()=>{
    const fetchAllCustomersData = async ()=>{
      try {
        const data = await axios.get(`/api/v1/users/getAllCustomersData?userDbId=${userDbId}`)
        console.log(data)
      } catch (error) {
        console.log("Something went wrong while fetching customer data" , error)
      }
    }
    fetchAllCustomersData()
  }, [userDbId])

  return (
    <Card className="w-full shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-black text-white p-4">
        <h1 className="text-2xl font-semibold">Customer Data <br/> <p className="text-lg text-gray-400"> View your customers information.</p></h1>
      </CardHeader>
      <CardBody className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-">
                <th className="p-3 font-medium text-white">Name</th>
                <th className="p-3 font-medium text-white">Email</th>
                <th className="p-3 font-medium text-white">Paid</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={customer.id}
                  className='hover:bg-black transition-colors duration-200'
                >
                  <td className="p-3">{customer.name}</td>
                  <td className="p-3">{customer.email}</td>
                  <td className="p-3">{customer.bookedSlots}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}


