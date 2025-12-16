import React, { useEffect, useRef } from 'react';
import "./Navbar.css";
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    // 1. We need refs to access DOM elements for measurement
    const navRef = useRef(null);
    const indicatorRef = useRef(null);
    
    // 2. Get current location to trigger updates when route changes
    const location = useLocation();

    // 3. Logic to move the indicator
    const moveIndicator = () => {
        if (navRef.current && indicatorRef.current) {
            // Find the currently active link inside our nav container
            const activeLink = navRef.current.querySelector('.active');

            if (activeLink) {
                // Get position and width of the active link
                const { offsetLeft, offsetWidth } = activeLink;
                
                // Apply styles to the indicator
                indicatorRef.current.style.left = `${offsetLeft}px`;
                indicatorRef.current.style.width = `${offsetWidth}px`;
                indicatorRef.current.style.opacity = "1"; // Show it
            } else {
                // Optional: Hide indicator if no link is active
                indicatorRef.current.style.opacity = "0";
            }
        }
    };

    // 4. Trigger on mount, route change, and window resize
    useEffect(() => {
        moveIndicator(); // Run initially and on route change
        
        // Add resize listener to fix position if window size changes
        window.addEventListener('resize', moveIndicator);
        return () => window.removeEventListener('resize', moveIndicator);
    }, [location.pathname]);

    return (
        <div className='navbar'>
            {/* Added ref to the container */}
            <span className='ul' ref={navRef}>
                
                {/* The new fluid indicator element */}
                <div className="floating-indicator" ref={indicatorRef}></div>

                <NavLink className={({ isActive }) => isActive ? 'Link active' : 'Link'} to="/">
                    Home <i className="fa-solid fa-house"></i>
                </NavLink>
                
                <NavLink className={({ isActive }) => isActive ? 'Link active' : 'Link'} to="/certifications">
                    Certifications <i className="fa-regular fa-folder-open"></i>
                </NavLink>
                
                <NavLink className={({ isActive }) => isActive ? 'Link active' : 'Link'} to="/projects">
                    Projects <i className="fa-solid fa-laptop-code"></i>
                </NavLink>
                
                <NavLink className={({ isActive }) => isActive ? 'Link active' : 'Link'} to="/assistant">
                    Peanut <i style={{ fontSize: "0.8em" }} className="fa-solid fa-chevron-down"></i>
                </NavLink>
            </span>
        </div>
    );
}

export default Navbar;