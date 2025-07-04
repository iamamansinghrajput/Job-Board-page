import React from 'react'
import Router from './Router'
import Navbar from './components/Navbar'
import Jobstore from './components/job/Jobstore'
import Login from './pages/Login'
import Register from './pages/Register'




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
    {/* <Navbar/>
    <Router></Router> */}
    <Login></Login>
    <Register></Register>
    
    </>
  )
}

export default App