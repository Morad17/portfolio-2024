import React from 'react'
import travelThumb from "../assets/images/travel-info-thumb.jpg"

const ProjectCard2 = ({data:{title, techs,image}}) => {
  return (
    <div className="project-card-2" >
        <img src={image} alt="" className="project-image"/>
        <h3 className="project-title">{title}</h3>
        <p className="project-tech">{techs}</p>
    </div>
    // <div className="project-card-2" style={{backgroundImage:`url(${image})`}}>
    // {/* <img src={image} alt="" className="project-image"/> */}
    // <h3 className="project-title">{title}</h3>
    // <p className="project-tech">{techs}</p>
    // </div>
  )
}

export default ProjectCard2