import React from 'react';
// Components
import Projects from './components/Projects';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
// Styles
import './css/App.css';

import { BrowserRouter as Router, Switch, Route, HashRouter} from "react-router-dom";

function App() {

    return (
        <HashRouter basename='/'>
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
        </HashRouter>
    );
}

export default App;
