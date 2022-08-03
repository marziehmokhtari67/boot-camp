import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    const navLinkStyle=({isActive})=>{
        return{
            fontWeight:isActive ? 'bold' : 'normal',
            textDecoration:isActive ? 'none': 'none',
            color:isActive ? 'red' : 'black'
        }

    }
  return (
    <>
    <nav>
        <h3>Maktab Sharif</h3>
        <div className='contents'>
        <NavLink to='/' style={navLinkStyle}>خانه</NavLink>
        <NavLink to='/about' style={navLinkStyle}>درباره ما</NavLink>
        <NavLink to='/contactUs' style={navLinkStyle}>ارتباط با ما</NavLink>
        <NavLink to='/bootCamp' style={navLinkStyle}>بوت کمپ</NavLink>
        <NavLink to ='/contact' style={navLinkStyle}>تماس</NavLink>
        </div>
        <img src='logo-maktabsharif.png' alt='logo'/>
      
    </nav>

    </>
  )
}

export default Navbar

