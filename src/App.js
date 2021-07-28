import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// CSS Imports
import './App.css';
import './assets/css/common.scss';
import './assets/css/homepage.scss';
import './assets/css/about.scss';
import './assets/css/responsive.scss';

// Components imports
import AnimateLoaded from './components/Util/AnimatedComponent';
import LandingComponent from './components/LandingComponent';
import AboutComponent from './components/AboutComponent';
import ResumeComponent from './components/ResumeComponent';
import Navbar from './components/Navbar';
import ContactComponent from './components/ContactComponent';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>

                <Switch>
                    <Route path="/about">
                        <AnimateLoaded>
                            <AboutComponent />
                        </AnimateLoaded>
                    </Route>
                    <Route path="/resume">
                        <AnimateLoaded>
                            <ResumeComponent />
                        </AnimateLoaded>
                    </Route>
                    <Route path="/portfolio">
                        <AnimateLoaded>
                            <ResumeComponent />
                        </AnimateLoaded>
                    </Route>
                    <Route exact path="/cv">
                        <AnimateLoaded>
                            <LandingComponent />
                        </AnimateLoaded>
                    </Route>
                    <Route path="/contact">
                        <AnimateLoaded>
                            <ContactComponent />
                        </AnimateLoaded>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
