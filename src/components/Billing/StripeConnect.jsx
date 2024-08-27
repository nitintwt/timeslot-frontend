import { Link } from "react-router-dom"

export default function StripeConnect() {
  return (
    <div className="flex bg-black flex-col items-center justify-center h-screen text-neutral-300">
      <div className="max-w-md w-full space-y-6 px-4">
        <div className="text-center ml-9">
          <h1 className="text-3xl font-bold text-white">Connect Your Razorpay Account</h1>
          <p className="mt-2 text-muted-foreground">
            Integrate your Razorpay account to start accepting payments in your account.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center justify-center ml-32 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          prefetch={false}
        >
          <SquareStackIcon className="mr-2 h-5 w-5" />
          Connect with Razorpay
        </Link>
      </div>
    </div>
  )
}

function SquareStackIcon(props) {
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
      <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
      <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}