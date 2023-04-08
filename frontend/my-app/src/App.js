import './App.css';
import React from 'react'
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/signup' element={<Signup />}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
