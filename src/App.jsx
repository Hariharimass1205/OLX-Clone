import React from 'react'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Sign/Signup';
import { AuthProvider } from './Context/AuthContext';


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
      <AuthProvider>
       <RouterProvider router={router}/>
       </AuthProvider>
    </div>
  )
}

export default App
