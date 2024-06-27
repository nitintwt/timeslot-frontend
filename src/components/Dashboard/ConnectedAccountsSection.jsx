import React from 'react'

function ConnectedAccountsSection() {
  return (
    <div className="grid gap-4">
    <Card>
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle>Connected Accounts</CardTitle>
          <CardDescription>Manage your connected accounts.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ChromeIcon className="h-5 w-5" />
            </div>
            <div className="grid gap-1">
              <div className="font-semibold">Google</div>
              <div className="text-muted-foreground">Connected and syncing meetings</div>
            </div>
            <Badge variant="secondary" className="ml-auto">
              Active
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <ComputerIcon className="h-5 w-5" />
            </div>
            <div className="grid gap-1">
              <div className="font-semibold">Microsoft</div>
              <div className="text-muted-foreground">Connected and syncing meetings</div>
            </div>
            <Badge variant="secondary" className="ml-auto">
              Active
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <ZoomInIcon className="h-5 w-5" />
            </div>
            <div className="grid gap-1">
              <div className="font-semibold">Zoom</div>
              <div className="text-muted-foreground">Connected but not syncing meetings</div>
            </div>
            <Badge variant="outline" className="ml-auto">
              Inactive
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
  )
}

export default ConnectedAccountsSection

function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function ComputerIcon(props) {
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
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function ZoomInIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  )
}
