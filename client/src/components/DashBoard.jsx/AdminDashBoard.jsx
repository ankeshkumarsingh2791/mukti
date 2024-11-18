import React from 'react'
import SideNav from '../ui/SideNav'
import DaNavBar from './DaNavBar'

const AdminDashBoard = () => {
  return (
    <div className='w-full bg-yellow-200 '>
       
        <div className='w-full grid grid-cols-4'>
           <div className='col-span-1'>
            <SideNav />

           </div>

        </div>
      
    </div>
  )
}

export default AdminDashBoard
