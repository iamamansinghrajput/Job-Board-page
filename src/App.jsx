import React from 'react'
import Router from './Router'
import Navbar from './components/Navbar'
import Jobstore from './components/job/Jobstore'




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
    <Jobstore></Jobstore>
    
    </>
  )
}

export default App