
const CLIENTS = [
  {
    id: 1,
    name: "Nigga Dad",
    email: "bonknigga@robbers.com",
    date: "26th June,24",
    type: "Paid",
  },
  {
    id: 2,
    name: "Nigga Mom",
    email: "bonknigga@robbers.com",
    date: "12th June,24",
    type: "Paid",
  },
  {
    id: 3,
    name: "Lil Nigga",
    email: "lilnigga@robbers.com",
    date: "5th July,24",
    type: "Free",
  },
  {
    id: 4,
    name: "White Nigga",
    email: "whigga@snatchers.com",
    date: "2nd May,24",
    type: "Free",
  },
  {
    id: 5,
    name: "Big Nigga",
    email: "bigga456@kidnappers.com",
    date: "1st April,24",
    type: "Paid",
  },
];

export default function DashboardLeft() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8  lg:basis-[70%] px-2 md:px-4 lg:px-6 py-4">
        {/* <IoMenu className="lg:hidden text-xl font-bold"></IoMenu> */}

      <div className="flex items-center gap-4 lg:gap-10 w-full">

        <div className="flex flex-col gap-4 bg-black rounded-md border border-stone-800 px-4 lg:px-6 py-4 lg:py-7">
          <h3 className="text-lg lg:text-xl font-medium">Total revenue</h3>
          <span className="text-xl lg:text-2xl font-bold">$699</span>
          <p className="font-light text-xs lg:text-sm text-gray-300">
            Last 25 days
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-black rounded-md border border-stone-800 px-4 lg:px-6 py-4 lg:py-7">
          <h3 className="text-lg lg:text-xl font-medium">Total slots booked</h3>
          <span className="text-xl lg:text-2xl font-bold">$899</span>
          <p className="font-light text-xs lg:text-sm text-stone-400">
            Last 25 days
          </p>
        </div>

      </div>

      <div id="client-data" className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl lg:text3xl">Client data</h1>

        <div className="w-full flex flex-col gap-4 bg-black rounded-md border border-stone-800 px-1 md:px-3 lg:px-6 py-4 ">
          <div className="flex justify-between gap-4 font-medium text-stone-500 text-lg lg:text-xl">
                <p className="basis-1/6">Name</p>
                <p className="basis-1/3 max-sm:basis-1/2">Email</p>
                <p className="basis-1/5 max-sm:basis-1/6">Date</p>
                <p className="basis-1/6 max-sm:basis-[10%]">Type</p>
              </div>

          {CLIENTS.map((client) => {
            return (
              <div key={client.email} className="flex items-center justify-between gap-4 text-xs lg:text-sm">
                <p className="basis-1/6">{client.name}</p>
                <p className="basis-1/3 max-sm:basis-1/2">{client.email}</p>
                <p className="basis-1/5 max-sm:basis-1/6">{client.date}</p>
                <p className="basis-1/6 max-sm:basis-[10%]">{client.type}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}