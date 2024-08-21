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
import { Provider} from 'react-redux'
import Bookings from './pages/Bookings'
import Availability from './pages/Availability'
import Billing from './pages/Billing'
import Settings from './pages/Settings'
import Customers from './pages/Customers'
import Slots from './pages/Slots'
import store from './store/store'
import BookSlot from './pages/BookSlot'
import AuthLayout from './components/ui/AuthLayout'
import LandingLayout from './LandingLayout'
import Landing from './pages/Landing'


const router = createBrowserRouter([
  {
    path: '',
    element: <LandingLayout/>,
    children: [
      {
        path:'',
        element:<Landing/>
      },
    ]},
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:'/dashboard',
          element: (
              <AuthLayout>
                <Dashboard/>
              </AuthLayout>
          )
        },
        {
          path:'/bookings',
          element: (
              <AuthLayout>
                <Bookings/>
              </AuthLayout>
          )
        },
        {
          path:'/availability',
          element: (
              <AuthLayout>
                <Availability/>
              </AuthLayout>
          )
        },
        {
          path:'/billing',
          element: (
              <AuthLayout>
                <Billing/>
              </AuthLayout>
          )
        },
        {
          path:'/settings',
          element: (
              <AuthLayout>
                <Settings/>
              </AuthLayout>
          )
        },
        {
          path:'/customers',
          element: (
              <AuthLayout>
                <Customers/>
              </AuthLayout>
          )
        },
        {
          path: '/slots',
          element: 
            <AuthLayout>
              <Slots/>
            </AuthLayout>
        },
        {
          path: '/:username',
          element: <BookSlot/>
        }
        
      ]
    }
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider  
    appearance={{baseTheme: dark}}  
    publishableKey={PUBLISHABLE_KEY}>
    <Provider store={store}>
     <NextUIProvider>
       <RouterProvider router={router}/>
      </NextUIProvider>
    </Provider>  
   </ClerkProvider>
  </React.StrictMode>
)
