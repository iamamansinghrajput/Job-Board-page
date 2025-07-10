import React from 'react'
import Applicationstore from '../components/Myapplication.jsx/applicationstore';
import Applicationtop from '../components/Myapplication.jsx/Applicationtop';

const Myapplication = () => {
  return (
    <div className='bg-[#f8fbff]'>
    <Applicationtop/>
    <Applicationstore/>
    </div>
  )
}

export default Myapplication