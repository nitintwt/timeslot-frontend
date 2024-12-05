import React, { useEffect, useState, useSyncExternalStore } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import axios from 'axios';
import {ScrollShadow} from "@nextui-org/react";
import { useCookies } from 'react-cookie';

export default function Component() {
  const [customers , setCustomers]= useState([])
  const [isloading , setIsloading]= useState(true)
  const [cookies]= useCookies()
  const userDbId = cookies?.userData?._id



  useEffect (()=>{
    const fetchAllCustomersData = async ()=>{
      try {
        const data = await axios.get(`${import.meta.env.VITE_AWS_USERS_API}/api/v1/users/getAllCustomersData?userDbId=${userDbId}`)
        console.log("cutomers",data.data.data)
        setCustomers(data.data.data)
        setIsloading(false)
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
      <ScrollShadow className=" h-[400px]">
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
            { isloading ? (
              <h1>Loading....</h1>
            ):(
              <tbody>
                {customers.map((customer, index) => (
                  <tr
                    key={customer.id}
                    className='hover:bg-black transition-colors duration-200'
                  >
                    <td className="p-3">{customer.customerName}</td>
                    <td className="p-3">{customer.customerEmail}</td>
                    <td className="p-3">free</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </CardBody>
      </ScrollShadow>
    </Card>
  );
}


