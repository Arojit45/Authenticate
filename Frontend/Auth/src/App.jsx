import React from 'react'
import { Route,Router,Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
    
  )
}

export default App