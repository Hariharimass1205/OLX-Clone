import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './pages/Home';
import Signup from './components/Sign/Signup';
import { AuthProvider } from './Context/AuthContext';

function App() {  
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;
