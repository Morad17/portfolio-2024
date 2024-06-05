import React from 'react'
import SideNav from '../components/SideNav'

import github from "../assets/icons/github.png"
import linkedin from "../assets/icons/linkedin.png"

const Home = () => {
  return (
    <div className="home">
      <div className="hero-title-row">
        <h1 className="hero-name">Morad</h1>
        <h1 className="hero-name">El Bouchikhi</h1>
        <p className="hero-title">Full Stack Developer</p>
        <ul className="social-icons">
                <li>
                  <a href="https://github.com/Morad17">
                  <img className="sIcon" src={github} alt="" />
                  </a>
                </li>
                <li>
                  <a href="http://linkedin.com/in/morad-elbouchikhi">
                    <img className="sIcon" src={linkedin} alt="" />
                  </a>
                </li>
        </ul>
        <div className="contact-button">
            <a href="#contact-section" className="basic-button">Get In Touch</a>
        </div>
      </div>
    </div>
  )
}

export default Home