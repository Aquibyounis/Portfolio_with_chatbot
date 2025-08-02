import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='ul'>
            <NavLink className={({ isActive }) => isActive ? 'Link active' : 'Link'} to="/">Home <i className="fa-solid fa-house"></i></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'Link active' : 'Link'} to="/certifications">Certifications <i className="fa-regular fa-folder-open"></i></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'Link active' : 'Link'} to="/projects">Projects <i className="fa-solid fa-laptop-code"></i></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'Link active' : 'Link'} to="/assistant">Peanut <i style={{ fontSize: "0.8em" }} className="fa-solid fa-chevron-down"></i></NavLink>
        </span>
    </div>
  )
}

export default Navbar