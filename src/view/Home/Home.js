import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Home 🏡</h1>
      <img src='https://png.pngtree.com/thumb_back/fh260/background/20230716/pngtree-illustrated-3d-render-of-a-logo-featuring-a-gold-house-image_3876060.jpg'></img>
      <p>this is the home page</p>
      <Footer/>
    </div>
  )
}

export default Home
