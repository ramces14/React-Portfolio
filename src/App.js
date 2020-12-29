import React from 'react';
// Components
import Projects from './components/Projects';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
// Styles
import './css/App.css';

import { HashRouter as Router, Switch, Route} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/projects">
                        <Header />
                        <Projects />
                    </Route>

                    <Route path="/about">
                        <Header />
                        <About />
                    </Route>
            
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
