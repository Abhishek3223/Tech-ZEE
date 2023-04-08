import './App.css';
import React from 'react'
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Screen from './components/Screen/Screen';
import Dashboard from './Pages/Dashboard';
import Createclass from './components/createClass/Createclass';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/screen' element={<Screen />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/createClass' element={<Createclass />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
