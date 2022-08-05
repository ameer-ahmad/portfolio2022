import React from 'react'
import experiences from '../data/experienceData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"

function Experience() {
  return (
    <div className="experience" id="experience">
      <h2>Experience <FontAwesomeIcon icon={faBriefcase}/></h2>
      <VerticalTimeline>
        { 
          experiences.map(element => {
            return (
              <VerticalTimelineElement key={element.key} date={element.date} dateClassName="date" icon={<FontAwesomeIcon icon={faBriefcase} />} >
                <h3 className="vertical-timeline-element-title">{element.title} - {element.company}</h3>
                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                <p id="description">{element.desc}</p>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </div>
  )
}

export default Experience