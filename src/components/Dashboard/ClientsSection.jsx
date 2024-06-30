import React from 'react'
import {Tabs, Tab} from "@nextui-org/tabs";
import {Badge} from "@nextui-org/badge";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";

function ClientsSection() {
  return (
    <Tabs defaultValue="week">
    <div className="flex items-center">
        <Tab value="week">Week</Tab>
        <Tab value="month">Month</Tab>
        <Tab value="year">Year</Tab>
    </div>
      <Card x-chunk="dashboard-05-chunk-3">
        <CardHeader className="px-7">
          <h1>Orders</h1>
          <h2>Recent orders from your store.</h2>
        </CardHeader>
        <CardBody>
          <Table>
            <TableHeader>
              <TableRow>
                <TableColumn>Customer</TableColumn>
                <TableColumn className="hidden sm:table-cell">Type</TableColumn>
                <TableColumn className="hidden sm:table-cell">Status</TableColumn>
                <TableColumn className="hidden md:table-cell">Date</TableColumn>
                <TableColumn className="text-right">Amount</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-accent">
                <TableCell>
                  <div className="font-medium">Liam Johnson</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">Sale</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    Fulfilled
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
  </Tabs>
  )
}

export default ClientsSection
