import React from 'react'

import profileImage from "../assets/images/about-me-picture.jpg"
import react from "../assets/icons/react.png"
import firebase from "../assets/icons/firebase.png"
import python from "../assets/icons/python.png"
import django from "../assets/icons/django.png"
import mern from "../assets/icons/mern.png"
import mysql from "../assets/icons/mysql.png"

const About = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">About Me</h1>
      <div className="about-row">
        <p className="about-text">
        Hello there. I am Morad an aspiring full stack web developer. 
        I have a passion for delivering unique, creative and thoughtfull 
        projects. My strengths lie in my creativity and unique way of thinking. 
        Through the Full Stack Web Diploma, and Self-learing I have gained the tools 
        to make anything that I can envision.
        </p>
        <img className="profile-image"src={profileImage} alt="" />
      </div>
      <div className="tech-row">
        <img className="tech-logo"src={react} alt="" />
      <img className="tech-logo"src={firebase} alt="" />
      <img className="tech-logo"src={python} alt="" />
      <img className="tech-logo"src={django} alt="" />
      <img className="tech-logo"src={mern} alt="" />
      <img className="tech-logo"src={mysql} alt="" />
      </div>
      
    </div>
  )
}

export default About