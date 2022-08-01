import React from 'react'
import ameer from './ameer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <div className="about">
        <div className="aboutLeft">
            <h1>Hi, my name is Ameer! 👋</h1>
            <h2>I am a Software Engineer</h2>
            <ul className="aboutSocials">
                <li><a href="https://github.com/ameer-ahmad" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.linkedin.com/in/ameerahmad/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><FontAwesomeIcon icon={faFile} /></li>
            </ul>
        </div>
        <div className="aboutRight">
            <img className="aboutImg" src={ameer} alt="Ameer Ahmad" />
            <p>Welcome to my portfolio! <br/><br/> I am a Software Engineering student at Sheridan College who loves to create dynamic web apps that solve problems and make people's lives easier. <br/><br/> On this website you can view my past experiences, as well as all
            my personal projects. Currently, I'm looking for Fall 2022 internships. Feel free to contact me on LinkedIn or through email.</p>
        </div>
        
    </div>
  )
}

export default About