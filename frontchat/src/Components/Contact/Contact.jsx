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
                    <li>LINKEDIN</li>
                    <li>TELEGRAM</li>
                    <li>INSTAGRAM</li>
                    <li>WHATSAPP</li>
                </ul>
                <li className='o'>aquibyounis2@gmail.com</li>
            </div>
        </div>
    </div>
  )
}

export default Contact