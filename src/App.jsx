import React from 'react'
import Router from './Router'
import Navbar from './components/Navbar' 



const App = () => {
 
  return (
    <div className='bg-[#f8fbff]'>
    <Navbar/>
    <Router></Router>
    </div>
  )
}

export default App