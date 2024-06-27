import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Landing page/LandingPage'
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={ <LandingPage/> } />
      </Routes>
     </Router>
     <Toaster/>
    </>
  )
}

export default App