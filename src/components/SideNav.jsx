import React from 'react'
import { a } from 'react-router-dom'

import About from '../assets/icons/about.png'
import Contact from '../assets/icons/contact.png'
import Home from '../assets/icons/home.png'
import Projects from '../assets/icons/projects.png'
import Skills from '../assets/icons/skills.png'

const SideNav = () => {
  return (
    <div className="sidenav">
      <ul className="navigation">
        <li>
          <a href="#home" className="nav-link">
            <img src={Home} alt="" />
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            <img src={About} alt="" />
            <p>About</p>
          </a>
        </li>
        <li>
        <a href="#projects" className="nav-link">
            <img src={Projects} alt="" />
            <p>Projects</p>
          </a>

        </li>
        <li>
          <a href="#skills" className="nav-link">
            <img src={Skills} alt="" />
            <p>Skills</p>
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            <img src={Contact} alt="" />
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideNav