import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Hero/Hero"
import ML from "./components/ML/ml"
import DL from "./components/DL/dl"

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/ml' element={<ML/>}> </Route>
          <Route path='/dl' element={<DL/>}> </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
