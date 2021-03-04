import React from 'react';

import '../../scss/Home.scss';

import ProfilePic from "../../images/Profile-picture.jpg";
import js from "../../images/javascript.png";
import react from "../../images/react.png";
import mongoDB from "../../images/mongoDB.png";
import Node from "../../images/node.png";
import Express from "../../images/express.png";

function Home() {
    return (
        <div className="home">
            <div className="avatar-container">
                <img 
                    src={ProfilePic} 
                    alt="avatar" 
                    className="avatar-img"
                />
            </div>

            <div className="home-title">
                <h1>Hello I'm Ramces,</h1>
            </div>

            <div className="introduction">
                <p>a <b className="bold">A front-end developer</b> in New York City.</p>
                <p>I specialize in Javascript for my front-end and back-end development.</p>
                <p>
                    I believe that hard work can take you anywhere in life as long as you continue to pursue
                    your dreams. 
                </p>
            </div>

            <div className="skills-container">
                <h1 className="badge-title">What I do</h1>
                <div className="badge-container">
                    <div className="badges">
                        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Bootstrap-Logo-PNG.png" alt="Bootstrap Badge"/>
                    </div>
                    <div className="badges">
                        <img src={js} alt="JavaScript Badge"/>
                    </div>
                    <div className="badges">
                        <img src={react} alt="React Badge"/>
                    </div>
                    <div className="badges">
                        <img src={mongoDB} alt="MongoDB Badge"/>
                    </div>
                    <div className="badges">
                        <img src={Node} alt="NodeJs Badge"/>
                    </div>
                    <div className="badges">
                        <img src={Express} alt="Express Badge"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
