

import { useState } from "react"
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";

export default function Component() {
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
  ]
  const [sortColumn, setSortColumn] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }
  const sortedCustomers = customers.sort((a, b) => {
    const modifier = sortDirection === "asc" ? 1 : -1
    if (a[sortColumn] < b[sortColumn]) return -1 * modifier
    if (a[sortColumn] > b[sortColumn]) return 1 * modifier
    return 0
  })
  return (
    <Card className="w-full">
      <CardHeader>
        <h1>Customer Data</h1>
        <h2>View and manage customer information and booked slots.</h2>
      </CardHeader>
      <CardBody>
        <Table>
          <TableHeader>
            <TableRow>
              <TableColumn onClick={() => handleSort("name")} className="cursor-pointer hover:bg-muted">
                Name {sortColumn === "name" && <ArrowUpDownIcon className="inline-block w-4 h-4" />}
              </TableColumn>
              <TableColumn onClick={() => handleSort("email")} className="cursor-pointer hover:bg-muted">
                Email {sortColumn === "email" && <ArrowUpDownIcon className="inline-block w-4 h-4" />}
              </TableColumn>
              <TableColumn onClick={() => handleSort("bookedSlots")} className="cursor-pointer hover:bg-muted">
                Booked Slots {sortColumn === "bookedSlots" && <ArrowUpDownIcon className="inline-block w-4 h-4" />}
              </TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.bookedSlots}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  )
}

function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}


function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}