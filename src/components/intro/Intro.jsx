// import React, { useEffect, useRef } from 'react'
import React from "react"
import "./Intro.scss"
// import { init } from 'ityped'
import Typewriter from "typewriter-effect"



const Intro = () => {
  // const textRef = useRef();

  // useEffect(() => {

  //   init(textRef.current, { 
  //     showCursor: false, 
  //     strings: ["UI/UX Designer", "Frontend Web & Mobile", "React & React Native"], 
  //   });
    


  // }, []);

const introText = "Hi there, I'm"
  return (
    <div className='intro' id="intro" >
      <div className="left">
        <div className="imageContainer">
          <img src="assets/facetoon.png" alt="my foto"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>{introText}</h2>
          <h1>Anthony Bassaw</h1>
          <h3>A Freelance </h3><span><Typewriter options={{ strings:["UI / UX Designer", "Web & Mobile Developer", "React & React Native Developer"],
           autoStart:true,
           delay:75,
           loop:true
           }}/></span>
        </div>
        <a href='#portfolio'>
          <img src="assets/dropDown.png" alt="dropdown" className="expandDown"/>
        </a>
      </div>

    </div>

  )
}

export default Intro;