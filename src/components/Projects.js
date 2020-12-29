import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom';
import '../css/Projects.css';

// Projects
import HTML from './HTML';
import CSS from './CSS';
import Javascript from './Javascript';
import Reacts from './Reacts';
import Express from "./Express";

function Projects() {
    return (
        <div className="projects">
            <h1 className="project__title">Projects</h1>
            <div className="navlink_container">
                <NavLink className="link" to="/projects/html"> <span className="project__buttons">HTML</span> </NavLink>
                <NavLink className="link" to="/projects/css"> <span className="project__buttons">CSS</span> </NavLink>
                <NavLink className="link" to="/projects/javascript"> <span className="project__buttons">JavaScript</span> </NavLink>
                <NavLink className="link" to="/projects/react"> <span className="project__buttons">React</span> </NavLink>
                <NavLink className="link" to="/projects/express"> <span className="project__buttons">Express</span> </NavLink>
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
