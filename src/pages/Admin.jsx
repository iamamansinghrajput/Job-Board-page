import React from 'react'
import Topadmin from '../components/admin/Topadmin'
import JobTable from '../components/admin/JobTable'

const Admin = () => {
  return (
    <div className='bg-[#f8fbff]'>
    <Topadmin/>
    <JobTable/>
    </div>
  )
}

export default Admin