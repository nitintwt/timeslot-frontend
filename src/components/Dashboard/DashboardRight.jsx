const CONNECTED_ACCOUNTS = [
  "Google calender",
  "Stripe",
  "Mutual funds",
  "Stake",
];

export default function DashboardRight() {
  return (
    <div className=" lg:flex flex-col lg:basis-[25%] gap-4 bg-black rounded-md border border-stone-800 pb-7">
      <div className="flex justify-between items-center bg-[rgb(32_32_32)] px-4 py-5 rounded-t-md">
        <div className="basis-1/3 rounded-full lg:border lg:border-stone-600">

        </div>

        <div className="basis-[60%] text-xl lg:text-xl font-semibold">
          Nitin Kumar Singh
        </div>
      </div>
      <div className="flex flex-col px-4 gap-2">
        <div className="font-medium text-base lg:text-lg text-stone-500 px-3 mt-3">
          Username:
        </div>
        <div className="border border-stone-700 rounded-xl px-3 py-1 lg:py-2">
          niggaslayer
        </div>
      </div>

      <div className="flex flex-col gap-5 px-4 py-4">
        <h1 className="text-base lg:text-lg text-stone-500 font-medium">
          Connected accounts:
        </h1>
        <div className="flex flex-col gap-2 pl-2">
          {CONNECTED_ACCOUNTS.map((acc) => {
            return (
              <p key={acc} className="cursor-pointer text-stone-300 hover:text-white">
                &rarr; &nbsp;{acc}
              </p>
            );
          })}
        </div>
      </div>

      <div className="mx-5 max-sm:text-xs cursor-pointer border w-max hover:bg-stone-500 transition-all duration-300 border-stone-600 px-3 py-1 rounded-lg">Logout</div>
    </div>
  );
}