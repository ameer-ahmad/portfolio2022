import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

function Header() {

    const [isHeaderVisible, setIsHeaderVisible] = useState(false)

    const handleHeader = () => {
        const aboutBottom = document.getElementById('about').getBoundingClientRect().bottom
        if (aboutBottom <= 0) {
            setIsHeaderVisible(true)
        } else {
            setIsHeaderVisible(false)
        }
    }

    window.addEventListener('scroll', handleHeader)

  return (
    <div className={isHeaderVisible ? "header show" : "header"}>
        <Link to="about" smooth={true} duration={500}>
            <FontAwesomeIcon className="logo" icon={faCode}/>
        </Link>
        <nav>
            <ul>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li>Experience</li>
                <li>Resume</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header