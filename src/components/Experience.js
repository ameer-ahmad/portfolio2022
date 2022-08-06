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
      <VerticalTimeline className="timeline">
        { 
          experiences.map(element => {
            return (
              <VerticalTimelineElement className="timelineText" key={element.key} date={element.date} dateClassName="date" iconStyle={{background: 'white'}} icon={<FontAwesomeIcon icon={faBriefcase} />} >
                <div className="timelineTextContainer">
                  <h3 className="vertical-timeline-element-title">{element.title}</h3>
                  <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                </div>
                <h5 className="vertical-timeline-element-subtitle">{element.company}</h5>
                <p id="description">{element.desc}</p>
                <h5 className="vertical-timeline-element-subtitle">{element.date}</h5>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </div>
  )
}

export default Experience