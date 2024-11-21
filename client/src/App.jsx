import 'remixicon/fonts/remixicon.css'

import Page from './Page';
import { Route, Router, Routes } from 'react-router';
import HomeLayput from './layouts/HomeLayput';
import About from './components/Home/About';
import Register from './components/Forms/Register'
import Login from './components/Forms/Login'
function App() {
  

  return (
     <Routes>
      <Route path='/' element={<HomeLayput />}>
      <Route index element={<Page />} />
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<Register />} />
       <Route path='/login' element={<Login />} />


      </Route>
     </Routes>
  )
}

export default App
