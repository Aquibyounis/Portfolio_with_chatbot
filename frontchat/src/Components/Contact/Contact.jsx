import React from 'react'
import "../Contact/Contact.css"
import tri from "../../assets/images.png"

const Contact = () => {
  return (
    <div className='contact'>
        <h1 className='contact_side'>Contact</h1>
        <div className="inner_contact">
            <div className="left_contact">
                <img src={tri} alt="" className='tri_image'/>
            </div>
            <div className="right_contact">
                <ul className='c_ul'>
                    <a href="https://www.linkedin.com/in/aquib-younis-pula-6b205b275/" target="_blank" rel="noopener noreferrer">
                      <li>LINKEDIN</li>
                    </a>
                    <a href="https://t.me/codepixelsx" target="_blank" rel="noopener noreferrer">
                      <li>TELEGRAM</li>
                    </a>
                    <a href="https://www.instagram.com/code.pixelsx/?__pwa=1" target="_blank" rel="noopener noreferrer">
                      <li>INSTAGRAM</li>
                    </a>
                    <a href="https://www.threads.net/@code.pixelsx?__pwa=1" target="_blank" rel="noopener noreferrer">
                      <li>THREADS</li>
                    </a>
                </ul>
                <a href="mailto:aquibyounis2@gmail.com" className='o'>aquibyounis2@gmail.com</a>
            </div>
        </div>
    </div>
  )
}

export default Contact
