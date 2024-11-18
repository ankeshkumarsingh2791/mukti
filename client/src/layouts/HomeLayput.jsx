import React from 'react'
import NavBar from '../components/Home/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Home/Footer'

const HomeLayput = () => {
  return (
    <div className='w-full '>
        <NavBar />
        <div>
            <Outlet />
        </div>
        <Footer />
      
    </div>
  )
}

export default HomeLayput
