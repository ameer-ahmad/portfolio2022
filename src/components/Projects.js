import React from 'react'
import projects from '../data/projectsData'
import Project from './Project'

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projectsContainer">
        {projects.map((project, pos) => (
          <Project project={project} key={pos} />
        ))}
      </div>
    </div>
  )
}

export default Projects