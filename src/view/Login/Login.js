import React from 'react'
import "./Login.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


function Login() {
  return (
    <div>
      <Navbar/>
      <h1>Login</h1>
      <p>this is the login page</p>
      <img src='https://png.pngtree.com/thumb_back/fh260/background/20230716/pngtree-illustrated-3d-render-of-a-logo-featuring-a-gold-house-image_3876060.jpg'></img>
      <Footer/>
    </div>
  )
}

export default Login