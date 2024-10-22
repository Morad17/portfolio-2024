import React, { useState } from 'react'
import { easeIn, useAnimate, motion } from 'framer-motion'

import ProjectCard1 from '../components/ProjectCard1'
import ProjectCard2 from '../components/ProjectCard2'
import DoughnutChart from '../components/doughnutChart'

import travelGif from '../assets/images/travelGif.gif'
import travelThumb from "../assets/images/travel-info-thumb.jpg"
import holidayPhotoThumb from "../assets/images/holiday-photo-thumb.png"
import {data }from "../assets/data/projects"



const Projects = () => {

  const [animateOn, turnAnimateOn ] = useState(false)
  const [projectData, setProjectData ] = useState(null)
  const [techs, setTechs] = useState(null)
  const [fPoints, setFPoints] = useState([])
  const [dataNumbers,setDataNumbers] = useState([])

  //Animations//
  const [scope, animate ] = useAnimate()

  const pieColorKey = {
    "react":"#7cc5d9",
    "google-maps-api":"#cc6699",
    "scss":"#0F9D58",
    "firebase":"#FFC400"
  }
  const handleAnimate = (id) => {

      const info = []
      data.filter((obj)=> {
        if(obj.id === id){
          //Get Specific Projects Data //
          setProjectData(obj)
          setFPoints(obj.funcitonalityPoints)
          const allTechs = obj.techs
          setTechs(allTechs)
        }
      })
     
      console.log(techs, fPoints,)
    if (!animateOn) {
       //  await animate("#project-content", {x: "30vw"}, {duration: 1})
      animate("#animated-content", {"margin-left":0},{duration: 1}, )
      animate("#animated-content",{opacity: 1}, {duration: 1}, {ease: "linear"})
      turnAnimateOn(true)
    } else {
      animate("#animated-content", {"margin-left":"-50vw"},{duration: .5}, )
      animate("#animated-content",{opacity: 0}, {duration: .5}, {ease: "linear"})
      
      turnAnimateOn(false)
    }
 
  }

  const returnTechs = () => {
    
  }
  

  return (
    <div ref={scope} className="projects-section" id="projects"> 
      <h1 className="projects-title">
        Projects
      </h1>
      <div className="main-content">
    
        <section id="animated-content" className="animated-content">
          <div className="animated-project-content">
            { projectData && 

              <>
              <div className="content-layout-top-row">
              <div className="content-top-left">
                <p className="about-box">
                 {projectData.about}
                </p>
              </div>
              <div className="content-top-right">
                <h1 className="animated-content-title">{projectData.title}</h1>
              </div>
            </div>
            <div className="content-layout-middle-row">
              <div className="content-left">
                <div className="card-top">
                  <h3 className="card-title">
                    Functionality
                  </h3>
                  {
                    fPoints.map((p, index)=> {
                      return(
                      <p className="card-info" key={index}>
                        {p}
                      </p>)
                    })
                  }
                </div>
                <div className="card-bottom">
                  <h3 className="card-title">
                    Technologies
                  </h3>
                  <div className="tech-card">
                    <div className="techs">
                       { techs.map((t, index)=>{
                        return <div className="tech-progress-bar">
                                <motion.div className="tech-progress" id="tech-progress"
                                  initial={{width:0}}
                                  animate={{ width:`${Object.values(t)}%`,duration: 2.5, ease: "linear"}}
                                  >
                                    {Object.keys(t)}
                                </motion.div>
                                </div>
                        })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-right">
                <div className="animated-image-card">
                  <img className="animated-image" src={projectData.image} alt="" />
                </div>
              </div>
            </div>
            <div className="content-layout-bottom-row">
              <div className="content-bottom-left">
                <p>Live Preview</p>
                <button className="project-button">Click Here</button>
              </div>
              <div className="content-bottom-right">
                <p>Project Code</p>
                <button className="project-button">Click Here</button>
              </div>
            </div>
              </>
            
            }
          </div>
        </section>
        <section id="project-content" className="project-content">
          <div className="project-slides">
            <div id="project-1" className="project-1 project-card">
              <a onClick={() => handleAnimate(1)}>
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
              <a onClick={() => handleAnimate(2)}>
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
              <a onClick={() => handleAnimate(2)}>
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