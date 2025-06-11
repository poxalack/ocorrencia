import { useState } from 'react'
import './App.css'
import Index from './ocorrencia/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Login from './ocorrencia/login'
import Home from './ocorrencia/home'
import CriarOcorrencia from '../src/components/Ocorrencia'
import ListadeOcorrencia from '../src/components/ListadeOcorrencia'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/login/home' element={<Home />}/>
          <Route path='/ocorrencia' element={<CriarOcorrencia />}/>
          <Route path='/historicoOcorrencia' element={<ListadeOcorrencia />} />
        </Routes>
      </Router >
    </>
  )
}

export default App
