import React from 'react'

function ClientsSection() {
  return (
    <Card className="sm:col-span-2 md:col-span-4 lg:col-span-2 xl:col-span-2">
    <CardHeader className="px-7">
      <CardTitle>Clients</CardTitle>
      <CardDescription>Manage your clients and their meeting details.</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="relative">
        <div className="absolute right-4 top-4 flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <div className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Inactive</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <div className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Sort</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Name</DropdownMenuItem>
              <DropdownMenuItem>Meetings</DropdownMenuItem>
              <DropdownMenuItem>Revenue</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden sm:table-cell">Email</TableHead>
                <TableHead className="hidden md:table-cell">Meetings</TableHead>
                <TableHead className="hidden md:table-cell">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">John Doe</TableCell>
                <TableCell className="hidden sm:table-cell">john@example.com</TableCell>
                <TableCell className="hidden md:table-cell">15</TableCell>
                <TableCell className="hidden md:table-cell">$2,500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Jane Smith</TableCell>
                <TableCell className="hidden sm:table-cell">jane@example.com</TableCell>
                <TableCell className="hidden md:table-cell">8</TableCell>
                <TableCell className="hidden md:table-cell">$1,200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bob Johnson</TableCell>
                <TableCell className="hidden sm:table-cell">bob@example.com</TableCell>
                <TableCell className="hidden md:table-cell">12</TableCell>
                <TableCell className="hidden md:table-cell">$1,800</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Alice Williams</TableCell>
                <TableCell className="hidden sm:table-cell">alice@example.com</TableCell>
                <TableCell className="hidden md:table-cell">10</TableCell>
                <TableCell className="hidden md:table-cell">$1,500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tom Davis</TableCell>
                <TableCell className="hidden sm:table-cell">tom@example.com</TableCell>
                <TableCell className="hidden md:table-cell">7</TableCell>
                <TableCell className="hidden md:table-cell">$1,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}

export default ClientsSection
