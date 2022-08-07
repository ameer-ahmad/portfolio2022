import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import resume from './AmeerAhmadSoftwareEngineerResume.pdf'

function Header() {

    const [isHeaderVisible, setIsHeaderVisible] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const handleHeader = () => {
        const aboutBottom = document.getElementById('about').getBoundingClientRect().bottom
        if (aboutBottom <= 100) {
            setIsHeaderVisible(true)
        } else {
            setIsHeaderVisible(false)
        }
    }

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    window.addEventListener('scroll', handleHeader)

  return (
    <div className={isHeaderVisible ? "header show" : "header"}>
        <Link to="about" smooth={true} duration={500}>
            <FontAwesomeIcon className="logo" icon={faCode}/>
        </Link>
        <nav>
            <FontAwesomeIcon className='menu-icon' icon={isClicked ? faXmark : faBars} onClick={handleClick} />
            <ul className={isClicked ? "active" : ""}>
                <li><Link activeClass='linkActive' spy={true} to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link activeClass='linkActive' spy={true} to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link activeClass='linkActive' spy={true} to="experience" smooth={true} duration={500}>Experience</Link></li>
                <li><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header