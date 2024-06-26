import React from 'react'
import ProjectCard1 from '../components/ProjectCard1'
import ProjectCard2 from '../components/ProjectCard2'

import travelThumb from "../assets/images/travel-info-thumb.jpg"
import holidayPhotoThumb from "../assets/images/holiday-photo-thumb.png"
import {data }from "../assets/data/projects"

const Projects = () => {
  return (
    <div className="projects-section" id="projects"> 
      <h1 className="projects-title">
        Projects
      </h1>
      <div className="main-content">
        <section className="info-section-left">
          <div className="project-slides">
           {
            data.map((data,key)=> {
              if (data.featured === true) {
                return <ProjectCard2 data={data} />
              } else {
                return <ProjectCard1 data={data} />
              }
            })
           }
          </div>
        </section>     
        <section className="project-content">
          <div className="project-slides">
            <div className="project-1">
              <img src={travelThumb} alt="" className="project-image"/>
              <div className="project-text">
                <h3>Travel Adviser Guide</h3>
                <p>React | Google Maps Api</p>
              </div>
            </div>
            <div className="project-2">
              <img src={holidayPhotoThumb} alt="" className="project-image"/>
              <div className="project-text">
                <h3>Holiday Photo Gallery</h3>
                <p>React | Firebase</p>
              </div>
            </div>
            <div className="project-2">
              <img src={holidayPhotoThumb} alt="" className="project-image"/>
              <div className="project-text">
                <h3>Holiday Photo Gallery</h3>
                <p>React | Firebase</p>
              </div>
            </div>
            <div className="project-2">
              <img src={holidayPhotoThumb} alt="" className="project-image"/>
              <div className="project-text">
                <h3>Holiday Photo Gallery</h3>
                <p>React | Firebase</p>
              </div>
            </div>
          </div>
          
        </section>
        <section className="info-section-right">

        </section>
      </div>
    </div>
  )
}

export default Projects