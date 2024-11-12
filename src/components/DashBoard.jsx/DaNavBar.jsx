import React, { useState } from 'react'
import Search from '../ui/Search'
import ProfileDropDown from '../ui/ProfileDropDown'
import { Link } from 'react-router-dom'
import SideNav from '../ui/SideNav'

const DaNavBar = () => {
   
  return (
    <div className='w-full bg-yellow-100 fixed z-50 '>
        <div className='w-full flex  justify-evenly items-center '>
            <div>
                Logo
            </div>
            <div className='w-1/2'>
                <Search />
            </div>
            <div className='flex '>
                <section className='w-10 h-10 rounded-full bg-slate-100 border-2 border-blue-500 '>
                <i className="ri-user-2-fill flex justify-center items-center mt-1 text-xl"></i>
                </section>
                

                <section  className=' justify-center flex  items-center  ' >
                <ProfileDropDown />
                  
                </section>
                
            </div>
        </div>
      
    </div>
  )
}

export default DaNavBar
