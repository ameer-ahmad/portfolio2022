import React from 'react'
import resume from '../Ameer Ahmad - Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer">
        <hr/>
        <div className="footerContainer">
            <ul className="footerSocials">
                <li><a href="https://github.com/ameer-ahmad" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.linkedin.com/in/ameerahmad/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href={resume} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFile} /></a></li>
            </ul>
            <p>&#169; Ameer Ahmad 2022</p>
        </div>
    </div>
  )
}

export default Footer