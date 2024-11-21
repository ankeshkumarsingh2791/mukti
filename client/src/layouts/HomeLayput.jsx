import React from 'react'
import NavBar from '../components/Home/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Home/Footer'

const HomeLayput = () => {
  return (
    <div className='w-full '>
        <NavBar />
        <div className='w-full mt-10'>
            <Outlet />
        </div>
        <Footer />
      
    </div>
  )
}

export default HomeLayput
