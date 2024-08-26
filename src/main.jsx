import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import {NextUIProvider} from '@nextui-org/react'
import Dashboard from './pages/Dashboard.jsx'
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
import Signup from './pages/Signup'
import Login from './pages/Login'


const router = createBrowserRouter([
  {
    path: '',
    element: <LandingLayout/>,
    children: [
      {
        path:'',
        element:<Landing/>
      },
      {
        path:"/signup",
        element:<Signup/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path: '/:username',
        element: <BookSlot/>
      }
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
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <NextUIProvider>
       <RouterProvider router={router}/>
      </NextUIProvider>
    </Provider>  
  </React.StrictMode>
)
