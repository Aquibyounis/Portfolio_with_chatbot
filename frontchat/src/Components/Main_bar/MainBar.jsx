import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import "./MainBar.css"
import profile from "../../assets/jojo2.png"

const MainBar = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Preload the image
    useEffect(() => {
        const img = new Image();
        img.src = profile;
        img.onload = () => {
            // Add slight delay for smooth animation
            setTimeout(() => setImageLoaded(true), 300);
        };
    }, []);

    // Text animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    // Floating animation for profile image
    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className='mainbar'>
            <div className="inner_main">
                <motion.div
                    className="middle"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className='h1'
                        custom={0}
                        variants={textVariants}
                    >
                        PULA <bold className='bold'>AQUIB</bold> YOUNIS
                    </motion.h1>

                    <motion.span
                        className='ai_bot'
                        custom={1}
                        variants={textVariants}
                    >
                        <p>Welcome to my portfolio...</p>
                        <p>If you have any doubt about me...</p>
                        <p>You are just a <bold style={{ fontWeight: "800", color: '#BB65ff' }}>click</bold> away from using my AI assistant <strong style={{ color: "lightgreen" }}>Peanut</strong> <i style={{ "fontSize": "1.5em", "color": "#1C73A9FF" }} className="fa-solid fa-location-arrow"></i></p>
                    </motion.span>

                    <motion.h3
                        className='ai'
                        custom={2}
                        variants={textVariants}
                    >
                        Aspiring AI Engineer <i className="fa-solid fa-brain"></i>
                    </motion.h3>

                    <a
                        className='resume'
                        href='https://drive.google.com/file/d/1k1H6N5pbJXbr9RTMFy_rVLRjyPheEyR1/view?usp=sharing'
                        custom={3}
                        variants={textVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        RESUME
                    </a>
                </motion.div>

                <div className="right">
                    <motion.div
                        className="img-wrapper"
                        variants={floatingVariants}
                        animate="animate"
                    >
                        {/* Blurred placeholder */}
                        <img
                            src={profile}
                            alt='Profile'
                            className={`img_p img_blur ${imageLoaded ? 'hidden' : ''}`}
                        />
                        {/* Clear image */}
                        <img
                            src={profile}
                            alt='Profile'
                            className={`img_p img_clear ${imageLoaded ? 'visible' : ''}`}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default MainBar