import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='ul'>
            <Link className='Link' to="/">Home</Link>
            <Link className='Link' to="/certifications">Certifications</Link>
            <Link className='Link' to="projects">Projects</Link>
            <Link className='Link' to="assistant">AI Assistant <i style={{"fontSize":"0.8em"}} class="fa-solid fa-chevron-down"></i></Link>
        </span>
    </div>
  )
}

export default Navbar