import React, { useState } from 'react'
import { easeIn, useAnimate } from 'framer-motion'

import ProjectCard1 from '../components/ProjectCard1'
import ProjectCard2 from '../components/ProjectCard2'
import DoughnutChart from '../components/doughnutChart'

import travelGif from '../assets/images/travelGif.gif'
import travelThumb from "../assets/images/travel-info-thumb.jpg"
import holidayPhotoThumb from "../assets/images/holiday-photo-thumb.png"
import {data }from "../assets/data/projects"



const Projects = () => {

  const [animateOn, turnAnimateOn ] = useState(false)

  //Animations//
  const [scope, animate ] = useAnimate()

  const chartData = {
    datasets: [{
      data: [60, 30, 10],
      backgroundColor: [
        '#7cc5d9',
        '#cc6699',
        '#0F9D58'
      ],
    }]
  };

  const handleAnimate = async (id) => {
    if (!animateOn) {
       //  await animate("#project-content", {x: "30vw"}, {duration: 1})
      await animate("#animated-content", {"margin-left":0},{duration: 1}, )
      await animate("#animated-content",{opacity: 1}, {duration: 1}, {ease: "linear"})
      turnAnimateOn(true)
    } else {
      await animate("#animated-content", {"margin-left":"-50vw"},{duration: .5}, )
      await animate("#animated-content",{opacity: 0}, {duration: .5}, {ease: "linear"})
      turnAnimateOn(false)
    }
 
  }
  

  return (
    <div ref={scope} className="projects-section" id="projects"> 
      <h1 className="projects-title">
        Projects
      </h1>
      <div className="main-content">
        <section id="animated-content" className="animated-content">

          
          <div className="animated-project-content">
            <div className="content-layout-top-row">
              <div className="content-top-left">
                <p className="about-box">
                  "An App designed to help find local restaurants
                  and other amenities. You can check ratings, add 
                  your own and other features"
                </p>
              </div>
              <div className="content-top-right">
                <h1 className="animated-content-title">Travel Maps App</h1>
              </div>
            </div>
            <div className="content-layout-middle-row">
              <div className="content-left">
                <div className="card-top">
                  <h3 className="card-title">
                    Functionality
                  </h3>
                  <p className="card-info">
                    Displays all local Restaurants in your area
                  </p>
                  <p className="card-info">
                    Search for Restaurants in a certain area
                  </p>
                  <p className="card-info">
                    Show clear information on google ratings, website, location etc.
                  </p>
                  <p className="card-info">
                    Accurate map on Restaurant and Hotel locations
                  </p>
                </div>
                <div className="card-bottom">
                  <h3 className="card-title">
                    Technologies
                  </h3>
                  <div className="tech-card">
                    <div className="techs">
                    <p className="card-info react-hex">
                    React / Javascript
                    </p>
                    <p className="card-info google-hex">
                      Google Maps Api
                    </p>
                    <p className="card-info scss-hex">
                      Scss
                    </p>
                  </div>
                  
                  <div className="chart">
                    <DoughnutChart data={chartData}/>
                  </div>
                  </div>
                  
                  
                </div>
              </div>
              <div className="content-right">
                <div className="animated-image-card">
                  <img className="animated-image" src={travelGif} alt="" />
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