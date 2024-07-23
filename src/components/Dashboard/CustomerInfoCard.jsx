
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
              <TableColumn className="cursor-pointer hover:bg-muted">
                Name 
              </TableColumn>
              <TableColumn  className="cursor-pointer hover:bg-muted">
                Email 
              </TableColumn>
              <TableColumn  className="cursor-pointer hover:bg-muted">
                Booked Slots 
              </TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
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