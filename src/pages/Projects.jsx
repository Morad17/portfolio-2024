import React from 'react'
import travelThumb from "../assets/images/travel-info-thumb.jpg"
import holidayPhotoThumb from "../assets/images/holiday-photo-thumb.png"

const Projects = () => {
  return (
    <div className="projects-section" id="projects"> 
      <section className="info-section-left">
        
      </section>     
      <section className="project-content">
      <h1 className="projects-title">
        Projects
      </h1>
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
  )
}

export default Projects