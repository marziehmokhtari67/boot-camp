import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
function SharedLayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default SharedLayout
