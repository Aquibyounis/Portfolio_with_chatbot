import React from 'react'
import "./MainBar.css"
import profile from "../../assets/favicon.jpg"

const MainBar = () => {
  return (
    <div className='mainbar'>
        <div className="inner_main">
            <div className="middle">
                <h1 className='h1'>PULA AQUIB YOUNIS</h1>
                <span className='ai_bot'>
                    <p>Welcome to my portfolio...</p>
                    <p>If you have any doubt about me...</p>
                    <p>You are just a click away from using my AI assistant BOT <i style={{"fontSize":"1.5em","color":"#065cb8c5"}} class="fa-solid fa-location-arrow"></i></p>
                </span>
                <h3 className='ai'>Aspiring AI Engineer <i class="fa-solid fa-brain"></i></h3>
                <a className='resume' href='https://drive.google.com/file/d/13Dic9YudvAwR1GFSogC_bfOZZFsy9jmg/view?usp=sharing'>RESUME</a>
            </div>
            <div className="right">
                <img src={profile} alt="" className='img_p'/>
            </div>
        </div>
    </div>
  )
}

export default MainBar