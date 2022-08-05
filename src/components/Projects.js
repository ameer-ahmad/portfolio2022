import React from 'react'
import projects from '../data/projectsData'
import Project from './Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects <FontAwesomeIcon icon={faLaptopCode} /></h2>
      <div className="projectsContainer">
        {projects.map((project, pos) => (
          <Project project={project} key={pos} />
        ))}
      </div>
    </div>
  )
}

export default Projects