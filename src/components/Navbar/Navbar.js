import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <a href='/' className='nav-heder'>Home</a>&nbsp &nbsp  &nbsp  &nbsp  &nbsp &nbsp      
      <a href='/about' className='nav-heder'>About</a>&nbsp &nbsp  &nbsp  &nbsp  &nbsp   &nbsp   
      <a href='/contact' className='nav-heder'>Contact</a>&nbsp &nbsp  &nbsp  &nbsp   &nbsp &nbsp
      <a href='/login' className='nav-heder'>Login</a>
    </div>
   
  )
}

export default Navbar