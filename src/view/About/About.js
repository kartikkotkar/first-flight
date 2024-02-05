import React from 'react'
import "./About.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function About() {
  return (
    <div>
      <Navbar/>
      <h1>About ℹ️ </h1>
      <img src='https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65046bf150d1abb7e5911702_x-65046bcfdc4f0.webp' className='image'></img>
      <p>this is about page</p>
      <Footer/>
    </div>
    
  )
}

export default About