import React from 'react'
import Router from './Router'
import Navbar from './components/Navbar'



const App = () => {
  // const arr= [
  //   {
  //     title:"Job",
  //     to:"job"
  //   },
  //   {
  //     title:"My application",
  //   }
  // ]
  return (
    <>
    <Navbar/>
    <Router></Router>
    
    </>
  )
}

export default App