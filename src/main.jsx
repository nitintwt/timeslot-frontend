import React from 'react'
import ReactDOM from 'react-dom/client'
import { dark } from '@clerk/themes'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import {NextUIProvider} from '@nextui-org/react'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

import Sidebar from './components/ui/Sidebar'
import Bookings from './pages/Bookings'
import Availability from './pages/Availability'
import Billing from './pages/Billing'
import Settings from './pages/Settings'
import Customers from './pages/Customers'
import Slots from './pages/Slots'


const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path:'',
        element: <Home/>
      },
      {
        path:'/dashboard',
        element: <Dashboard/>
      },
      {
        path:'/bookings',
        element: <Bookings/>
      },
      {
        path:'/availability',
        element: <Availability/>
      },
      {
        path:'/billing',
        element: <Billing/>
      },
      {
        path:'/settings',
        element: <Settings/>
      },
      {
        path:'/customers',
        element: <Customers/>
      },
      {
        path: '/slots',
        element: <Slots/>
      }
    ]}
  
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider  
    appearance={{baseTheme: dark}}  
    publishableKey={PUBLISHABLE_KEY}>
     <NextUIProvider>
       <RouterProvider router={router}/>
      </NextUIProvider>
   </ClerkProvider>
  </React.StrictMode>
)
