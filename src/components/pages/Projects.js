import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom';
import '../../scss/Projects.scss';

// Projects
import HTML from '../HTML';
import CSS from '../CSS';
import Javascript from '../Javascript';
import Reacts from '../Reacts';
import Express from "../Express";

function Projects() {
    return (
        <div className="projects">
            <h1 className="project-title">Projects</h1>
            <div className="navlink-container">
                <NavLink className="link" to="/projects/html"> <span className="project-buttons">HTML</span> </NavLink>
                <NavLink className="link" to="/projects/css"> <span className="project-buttons">CSS</span> </NavLink>
                <NavLink className="link" to="/projects/javascript"> <span className="project-buttons">JavaScript</span> </NavLink>
                <NavLink className="link" to="/projects/react"> <span className="project-buttons">React</span> </NavLink>
                <NavLink className="link" to="/projects/express"> <span className="project-buttons">Express</span> </NavLink>
            </div>

            <Route exact path="/projects" render={ () => <Redirect to="/projects/html" /> }  />
            <Route path="/projects/html" component={HTML} />
            <Route path="/projects/css" component={CSS} />
            <Route path="/projects/javascript" component={Javascript} />
            <Route path="/projects/react" component={Reacts} />
            <Route path="/projects/express" component={Express} />
        </div>
    )
}

export default Projects
