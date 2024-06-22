import React from 'react'

const ProjectCard1 = ({data:{title, techs,image}}) => {
  return (
    <div className="project-card-1" >
        <img src={image} alt="" className="project-image"/>
        <div className="project-text">
            <h3 className="project-title">{title}</h3>
            <p className="project-tech">{techs}</p>
        </div>
    </div>
  )
}

export default ProjectCard1