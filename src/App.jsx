import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './ocorrencia/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Login from './ocorrencia/login'
import Home from './ocorrencia/home'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/login/home' element={<Home />}/>
        </Routes>
      </Router >
    </>
  )
}

export default App
