import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Hero/Hero"
import ML from "./components/ML/ml"
import DL from "./components/DL/dl"
import VizAlgo from './pages/vizalgo/vizalgo';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/ml' element={<ML/>}> </Route>
          <Route path='/dl' element={<DL/>}> </Route>
          <Route path="/ml/visualize/:algorithm" element={<VizAlgo />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
