import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/" className="nav-link">
            <img src={Home} alt="" />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            <img src={About} alt="" />
            <p>About</p>
          </Link>
        </li>
        <li>
        <Link to="/" className="nav-link">
            <img src={Projects} alt="" />
            <p>Projects</p>
          </Link>

        </li>
        <li>
          <Link to="/" className="nav-link">
            <img src={Skills} alt="" />
            <p>Skills</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            <img src={Contact} alt="" />
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideNav