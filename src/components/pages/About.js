import React from 'react'
import Greece from '../../images/Greece-2.jpg';
import "../../scss/About.scss"
// import '../../css/About.css';
import pdf from '../../images/Resume.pdf';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

function About() {
    return (
        <div className="about">
            <h1 className="about-title">Who I am</h1>

            <div className="intro">
                <p>Designer & Developer based in NYC</p>
            </div>

            <div className="about-container">
                <p> My name is Ramces Gil. I graduated from the University of Albany about 2 years ago. I majored in Cyber-Security in college, but decided to become a full stack developer after graduating. Since then I have completed a front-end course at Team TreeHouse and have completed a full stack course on Udemy. I have created numerous applications for both front-end and back-end work. I may lack professional experience, but I believe that I can provide a fresh take and exceptional approach to every project that I take on. I am open minded and have the ability to learn things quickly. My goal is to become a team player that creates high-quality and unique products to my clients </p>
                <p> If you would like to contact me my email is Ramces2580@gmail.com </p>  
                <div className="about-links">
                    <a href={pdf} className="about-resume" download>
                        Resume
                        <CloudDownloadIcon className="download-icon" />
                    </a>
                </div>
            </div>

            <div className="img-container">
                <img 
                    src={Greece}
                    alt="Ramces's in Greece" 
                />
            </div>
        </div>
    )
}

export default About
