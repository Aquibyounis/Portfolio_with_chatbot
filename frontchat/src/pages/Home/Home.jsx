import React from 'react'
import MainBar from "../../Components/Main_bar/MainBar.jsx"
import "./Home.css"
import Contact from '../../Components/Contact/Contact.jsx'
import Links from '../../Components/Links/Links.jsx'
import About from '../../Components/About/About.jsx'
import Skills from '../../Components/Skills/Skills.jsx'
import CommandBar from '../../Components/CommandBar/CommandBar.jsx'
const Home = () => {
  return (
    <div className='home'>
        <MainBar/>
        <Contact/>
        <About/>
        <CommandBar/>
        <Links/>
        <Skills/>
    </div>
  )
}

export default Home