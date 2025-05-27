import React from 'react'
import MainBar from "../../Components/Main_bar/MainBar.jsx"
import "./Home.css"
import Contact from '../../Components/Contact/Contact.jsx'
import Links from '../../Components/Links/Links.jsx'
import About from '../../Components/About/About.jsx'
const Home = () => {
  return (
    <div className='home'>
        <MainBar/>
        <Contact/>
        <About/>
        <Links/>
    </div>
  )
}

export default Home