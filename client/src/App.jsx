import 'remixicon/fonts/remixicon.css'

import Page from './Page';
import AdminDashBoard from './components/DashBoard.jsx/AdminDashBoard';
import DaNavBar from './components/DashBoard.jsx/DaNavBar';
import { Route, Router, Routes } from 'react-router';
import HomeLayput from './layouts/HomeLayput';
function App() {
  

  return (
     <Routes>
      <Route path='/' element={<HomeLayput />}>
      <Route index element={<Page />} />

      </Route>
     </Routes>
  )
}

export default App
