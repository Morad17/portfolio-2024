import React, { useState } from 'react'
import { easeIn, useAnimate } from 'framer-motion'

import ProjectCard1 from '../components/ProjectCard1'
import ProjectCard2 from '../components/ProjectCard2'

import travelThumb from "../assets/images/travel-info-thumb.jpg"
import holidayPhotoThumb from "../assets/images/holiday-photo-thumb.png"
import {data }from "../assets/data/projects"



const Projects = () => {

  const [animateOn, turnAnimateOn ] = useState(true)

  //Animations//
  const [scope, animate ] = useAnimate()

  const handleAnimate = async (id) => {
  //  await animate("#project-content", {x: "30vw"}, {duration: 1})
   await animate("#animated-content", {"margin-left":0},{duration: 1}, )
   await animate("#animated-content",{opacity: 1}, {duration: 1}, {ease: "linear"})
  }
  

  return (
    <div ref={scope} className="projects-section" id="projects"> 
      <h1 className="projects-title">
        Projects
      </h1>
      <div className="main-content">
        <section id="animated-content" className="animated-content">
          <div className="animated-content-title">
              <h1>Travel Maps App</h1>
          </div>
          <div className="animated-project-content">
            <div className="content-left">

            <div className="animated-card">
              <img className="animated-image" src={travelThumb} alt="" />
            </div>

            </div>
            <div className="content-right">

            </div>
          </div>
          
        </section>
        <section id="project-content" className="project-content">
          <div className="project-slides">
            <div id="project-1" className="project-1 project-card">
              <a onClick={() => handleAnimate("project-1")}>
                <img src={travelThumb} alt="" className="project-image"/>
                <div className="card-overlay">
                  <div className="project-text">
                    <h3>Travel Adviser Guide</h3>
                    <p>React | Google Maps Api</p>
                  </div>
                </div>
              </a>
            </div>
            <div id="project-2" className="project-2 project-card">
              <a onClick={() => handleAnimate("project-2")}>
                <img src={holidayPhotoThumb} alt="" className="project-image"/>
                <div className="card-overlay">
                  <div className="project-text">
                    <h3>Holiday Photo Gallery</h3>
                    <p>React | Firebasei</p>
                  </div>
                </div>
              </a>
            </div>
            <div id="project-3" className="project-3 project-card">
              <a onClick={() => handleAnimate("project-3")}>
                <img src={holidayPhotoThumb} alt="" className="project-image"/>
                <div className="card-overlay">
                  <div className="project-text">
                    <h3>Holiday Photo Gallerye</h3>
                    <p>React | Firebase</p>
                  </div>
              </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects