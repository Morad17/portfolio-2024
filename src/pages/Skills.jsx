import React from 'react'
import ProgressBar from "../components/ProgressBar"

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      
      <section className="skills-content">
      <h1 className="skills-title">Skills & Experience</h1>
        <div className="skills-text">
          <p className="main-text">
            From learing to write the first html code, to creating
            complex react and django e-commerce projects, I have always
            been keen to always learn new languages. My skills lie in designing a unique and 
            visually aesthetic project and applying the right applications, to achieve the
            perfect user experience.Whilst having Front-End and Back-End skills, I focus more 
            on Front End. Since 2021 my focus has been mainly on React Libraries.
          </p>
        </div>
        <div className="skills-bar">
          <div className="progress-group">
              <p>Css</p>
              <ProgressBar value={95} max={100}/>
          </div>
          <div className="progress-group">
              <p>Javascript</p>
              <ProgressBar value={85} max={100}/>
          </div>
          <div className="progress-group">
              <p>React Js</p>
              <ProgressBar value={75} max={100}/>
          </div>
          <div className="progress-group">
              <p>Python</p>
              <ProgressBar value={60} max={100}/>
          </div>
          <div className="progress-group">
              <p>Django</p>
              <ProgressBar value={60} max={100}/>
          </div>
        </div>
      </section>
      <section className="experience-content">
        <div className="e-card">
          <h3 className="e-title">International Business Degree</h3>
          <p>2014 - 2018</p>
          <p>
            Finished Internatinal Business Management Degree in
            Anlia Ruskin University
          </p>
        </div>
        <div className="e-card">
          <h3 className="e-title">Full Stack Web Diploma</h3>
          <p>2019 - 2021</p>
          <p>
            Completed Diploma in Full Stack Web development, accredited by
            Edinburgh University. 
          </p>
        </div>
        <div className="e-card">
          <h3 className="e-title">First Large Project</h3>
          <p>2021</p>
          <p>
            Started learning, improving & implementing React & JavaScript skills into
            a complete project.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Skills