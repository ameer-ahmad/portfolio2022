import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function Project({project}) {
  return (
    <div className="project">
        <h3>{project.name}</h3>
        <div className="imageContainer">
          <img className="projectImg" src={project.image} alt={project.name}/>
          <div className="overlay">
            <p>{project.desc}</p>
          </div>
        </div>
        <div className="technologies">
          {project.technologies.map((technology) => (
            <span>{technology}</span>
          ))}
        </div>
        <div className="links">
            {project.demo === "" ? (
              <a href={project.code} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            ) : (
              <>
                <a href={project.code} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href={project.demo} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink} /></a>
              </>
            )}
        </div>
    </div>
  )
}

export default Project