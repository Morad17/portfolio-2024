import React from 'react'

import profileImage from "../assets/images/profile-me.jpg"
import react from "../assets/icons/react.png"
import firebase from "../assets/icons/firebase.png"
import python from "../assets/icons/python.png"
import django from "../assets/icons/django.png"
import mern from "../assets/icons/mern.png"
import mysql from "../assets/icons/mysql.png"
import { Canvas } from '@react-three/fiber'
import { VikingShip } from '../components/Viking_ship'

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="text-section">
         <div className="about-me-row">
        <div className="section-1">
          <h1 className="about-title">About Me</h1>
          <p className="about-text">
            Hello there. I am Morad an aspiring full stack web developer. 
            I have a passion for delivering unique, creative and thoughtfull 
            projects. My strengths lie in my creativity and unique way of thinking. 
            Through the Full Stack Web Diploma, and Self-learing I have gained the tools 
            to make anything that I can envision.
          </p>
        </div>
        <img className="profile-image"src={profileImage} alt="" />
        
        
      </div>
        <div className="tech-row">
          <img className="tech-logo"src={react} alt="" />
          <img className="tech-logo"src={firebase} alt="" />
          <img className="tech-logo"src={python} alt="" />
          <img className="tech-logo"src={django} alt="" />
          <img className="tech-logo"src={mysql} alt="" />
        </div>
      </div>
     
      
      <div className="three-animation">
        <Canvas style={{width:'100%', height:'100%'}}>
          
        <ambientLight intensity={1} />
        {/* <spotLight position={[0,25,0]} angle={1.3} castShadow intensity={5} shadow-bias={-0.0001}/> */}
         
         <VikingShip scale={0.18} rotation={[0,2,0]} position={[1,0,3]}/>
        </Canvas>
      </div>
    </div>
  )
}

export default About