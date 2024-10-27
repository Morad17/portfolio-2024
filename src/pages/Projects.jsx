import React, { useState } from 'react'
import { easeIn, useAnimate, motion } from 'framer-motion'

import ProjectCard1 from '../components/ProjectCard1'
import DoughnutChart from '../components/doughnutChart'

import travelGif from '../assets/images/travelGif.gif'
import travelInfo from "../assets/images/travel-info.jpg"
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

  const colorKey = {
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
     
      // console.log(techs, fPoints,)
    if (!animateOn) {
       //  await animate("#project-content", {x: "30vw"}, {duration: 1})
      animate("#animated-content", {"margin-left":0},{duration: 1}, )
      animate("#animated-content",{opacity: 1}, {duration: 1})
      turnAnimateOn(true)
    } else {
      animate("#animated-content", {"margin-left":"-50vw"},{duration: .5}, )
      animate("#animated-content",{opacity: 0}, {duration: .5})
      
      turnAnimateOn(false)
    }
 
  }

  // const returnTechs = () => {
    
  //                     // techs.map((t, index)=> {
  //                     //   const color = Object.keys(t)
  //                     //   const hexColor = colorKey[color]
  //                     //  return <motion.div className="tech-bar" key={index}
  //                     //     initial={{width:0, backgroundColor: hexColor}}
  //                     //     animate={{ width:`${Object.values(t)}%`,duration: 2.5}}>
  //                     //   </motion.div>
  //                     // })
  // }
  

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
                <div className="card-bottom-left">
                  <h3 className="card-title">
                    Technologies
                  </h3>
                  <div className="tech-key-card">
                       { techs.map((t, index)=>{
                          const color = Object.keys(t)
                          const hexColor = colorKey[color]
                        const variants = {
                          inactive: {backgroundColor: "transparent"},
                          active: {
                            backgroundColor:hexColor
                          }
                        }
                      
                        return <div key={index} className="tech">
                                <p>{Object.keys(t)}</p>
                                <motion.div  className="tech-key"
                                variants={variants}
                                animate={animateOn ? "active": "inactive"}
                                >
                                </motion.div>
                                </div>
                        })}
                  </div>
                </div>
              </div>
              <div className="content-right">
                {/* Project Image */}
                <div className="animated-image-card">
                  <img className="animated-image" src={projectData. animationGif} alt="" />
                </div>
                <div className="tech-bar-card">
                  <div className="tech-bar-background">
                     {techs.map((t, index)=> {
                          const color = Object.keys(t)
                          const hexColor = colorKey[color]
                            const variants = {
                            inactive: {
                              width:0, transition:{type: "easeOut",duration:2},
                            },
                            active: {
                              width:`${Object.values(t)}%`,
                              transition:{type: "easeIn",duration:2},
                              backgroundColor: hexColor
                            
                            },
                    
                          }
                          
                         return <motion.div className="tech-bar" 
                          variants={variants} 
                          animate={ animateOn? "active" :"inactive"}
                         >
                          </motion.div>
                        })
                    }
                  </div>
                 
                </div>
                {/* Layout Links */}
                <div className="content-layout-links">
                  <div className="content-live-preview">
                    <p>Live Preview</p>
                    <button className="project-button">Click Here</button>
                  </div>
                  <div className="content-project-code">
                    <p>Project Code</p>
                    <button className="project-button">Click Here</button>
                  </div>
                </div>
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
                <img src={travelInfo} alt="" className="project-image"/>
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