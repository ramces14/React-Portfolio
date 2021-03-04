import React from 'react';
// Components
import Projects from "./components/pages/Projects"
import About from "./components/pages/About";
import Header from './components/Header';
import Home from "./components/pages/Home";
// Styles
import './css/App.css';

import { HashRouter as Router, Switch, Route} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/projects">
                        <Projects />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>
            
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
