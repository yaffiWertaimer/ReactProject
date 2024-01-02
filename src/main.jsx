import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import User from './Commponents/user/User'
import Admin from './Commponents/admin/Admin'
import Header from './Commponents/Header/Header'
import BusinessData from './Commponents/businessDetails/BuisnessData'
import Service from './Commponents/service/Service'
import Meeting from './Commponents/meeting/Meeting'
import FormState from './Commponents/businessDetails/BuisnessData'
import ServiceData from './Commponents/service/ServiceData'
const router = createBrowserRouter([
  {
    path: '/',
    element: <User />,
    errorElement: <div>error contants</div>

  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error contants</div>,
    // children: [
    //   {
    //     path: '',
    //     element: <div>empty</div>,
    //   },
    //   {
    //     path: 'service',
    //     element: <div>services</div>,
    //     errorElement: <div>error contant not found</div>
    //   },
    //   {
    //     path: 'meeting',
    //     element: <div>meeting</div>,
    //     errorElement: <div>error contant not found</div>
    //   }
    // ]
  },
  {
    
    // path: '',
    // element: <Service/>,
    path:'service/Service',
    element:<ServiceData/>,
    errorElement: <div>error contants</div>,
  },
  // {
    
  //   path: 'bbb',
  //   element: <FormState/>,
  //   errorElement: <div>error contants</div>,
  // },
  {
    
    path: 'meeting/Meeting',
    element: <Meeting/>,
    errorElement: <div>error contants</div>,
  },
  {
    
    path: 'Header/Header',
    element: <Header/>,
    errorElement: <div>error contants</div>,
  }
  // {
  //   path: '/admin/Header',
  //   element: <BusinessData/>,
  //   errorElement: <div>error contants</div>,
  //   // children: [
  // },
  // {
    
  //   // children: [
  // }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
       <RouterProvider router={router} />
  </React.StrictMode>,
)
