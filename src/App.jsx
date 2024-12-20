import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx'

const App = () => {

  const [playState, setPlayState] = useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title heading = "our programs" content = "what we offer"/>
        <Programs/>
        <About setPlayState = {setPlayState}/>
        <Title heading = "Gallery" content = "Campus Photos"/>
        <Campus/>
        <Title heading = "Testimonials" content = "What our students say"/>
        <Testimonials/>
        <Title heading = "Contact Us" content = "Get in touch"/>
        <Contact/>
        <Footer/>
        </div>
        <VideoPlayer playState = {playState} setPlayState = {setPlayState}/>
    </>
  )
}

export default App
