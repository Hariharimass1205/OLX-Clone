import React from 'react'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Sign/Signup';
import { auth } from './Firebase'; 

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path :'/login',
      element : <Login></Login>
    },
    {
      path : '/signup',
      element : <Signup></Signup>
    }
  ])
  
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}

export default App
