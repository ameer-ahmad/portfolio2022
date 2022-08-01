import React from 'react'
import ameer from './ameer.png'

function About() {
  return (
    <div className="about">
        <div className="aboutLeft">
            <h1>Hi, my name is Ameer! 👋</h1>
            <h2>I am a Software Engineer</h2>
        </div>
        <div className="aboutRight">
            <img className="aboutImg" src={ameer} alt="Ameer Ahmad" />
            <p>Welcome to my portfolio! <br/><br/> I am a Software Engineering student at Sheridan College who loves to create dynamic web apps that make people's lives easier. My passion
            is to solve problems while creating meaningful projects that have an impact on a wide variety of people. <br/><br/> On this website you can view my past experiences, as well as all
            my personal projects along with links to the code and a live demo. Currently, I'm looking for Fall 2022 internships. Feel free to contact me on LinkedIn or through email.</p>
        </div>
        
    </div>
  )
}

export default About