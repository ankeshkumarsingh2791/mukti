import React, { useEffect } from 'react'
import NavBar from '../components/Home/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Home/Footer'
import axios from 'axios'

const HomeLayput = () => {

  const getUserData = async () => {
    try {
      const res = await axios.post('/api/v1/user/getUserData', {}, {
        headers:{
          Authorization: "Bearer" + localStorage.getItem('getToken')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

   useEffect( () => {
      getUserData();
   },[])
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
