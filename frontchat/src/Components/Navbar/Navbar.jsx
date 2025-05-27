import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='ul'>
            <li>Home</li>
            <li>Certifications</li>
            <li>Projects</li>
            <li>AI chat <i style={{"fontSize":"0.8em"}} class="fa-solid fa-chevron-down"></i></li>
        </ul>
    </div>
  )
}

export default Navbar