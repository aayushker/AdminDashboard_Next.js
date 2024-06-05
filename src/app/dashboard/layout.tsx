import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import NavBar from '../ui/dashboard/navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <NavBar />
        {children}
      </div>
    </div>
  )
}

export default Layout
