import React from 'react';
import '../css/Home.css';
import ProfilePic from "../images/Profile-picture.jpg";
import js from "../images/javascript.png";
import react from "../images/react.png";
import mongoDB from "../images/mongoDB.png";
import Node from "../images/node.png";
import Express from "../images/express.png";

function Home() {
    return (
        <div className="home">
            <div className="avatar__container">
                <img 
                    src={ProfilePic} 
                    alt="avatar" 
                    className="home__avatar"
                />
            </div>
           
            <div className="home__introduction">
                <h1>Hello I'm Ramces,</h1>
                <p>a <b className="bold">A full-stack developer</b> in New York City.</p>
                <p className="introduction__p">I specialize in Javascript for my front-end and back-end development.</p>
                <p className="introduction__p">
                    I believe that hard work can take you anywhere in life as long as you continue to pursue
                    your dreams. 
                </p>
            </div>

            <div className="WhatIDo-container">
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
