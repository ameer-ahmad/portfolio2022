import React from 'react'
import ameer from './ameer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Typewriter from 'typewriter-effect'
import resume from './AmeerAhmadSoftwareEngineerResume.pdf'
import { Link } from 'react-scroll'

function About() {
  return (
    <div className="about" id="about">
        <div className="aboutLeft">
            <h1>Hi, my name is Ameer! 👋</h1>
            <h2>I am a&nbsp;
            <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Software Engineer.")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Designer.")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("problem solver.")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("life long learner.")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Software Engineer.")
                        .start()
                }}
            /> </h2>
            <ul className="aboutSocials">
                <li><a href="https://github.com/ameer-ahmad" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.linkedin.com/in/ameerahmad/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href={resume} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFile} /></a></li>
            </ul>
        </div>
        <div className="aboutRight">
            <img className="aboutImg" src={ameer} alt="Ameer Ahmad" />
            <p>Welcome to my portfolio! <br/><br/> I am a Software Engineering student at Sheridan College who loves to create dynamic web apps that solve problems and make people's lives easier. <br/><br/> On this website you can view my past experiences, as well as all
            my personal projects. Currently, I'm looking for Fall 2022 internships. Feel free to contact me on LinkedIn or through email.</p>
        </div>
        <div className="seeProjects">
            <Link className="seeProjectsLink" to="projects" smooth={true} duration={500}>
                <p>View Projects</p>
                <FontAwesomeIcon icon={faAngleDoubleDown} className="bounce" />
            </Link>
        </div>
        
    </div>
  )
}

export default About