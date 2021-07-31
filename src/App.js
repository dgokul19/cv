import React, {useEffect} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { spring, AnimatedSwitch } from 'react-router-transition';

// CSS Imports
import './App.css';
import './assets/css/common.scss';
import './assets/css/homepage.scss';
import './assets/css/about.scss';
import './assets/css/resumePage.scss';
import './assets/css/contactPage.scss';
import './assets/css/blogPage.scss';

import './assets/css/responsive.scss';

// Components imports
import AnimateLoaded from './components/Util/AnimatedComponent';
import LandingComponent from './components/LandingComponent';
import AboutComponent from './components/AboutComponent';
import ResumeComponent from './components/ResumeComponent';
import ContactComponent from './components/ContactComponent';
import BlogComponent from './components/BlogComponent';
import Navbar from './components/Navbar';

import  { mapStyles } from './common/utils';

function App() {
    // wrap the `spring` helper to use a bouncy config
    const bounce = (val) => {
        return spring(val, {
            stiffness: 210,
            damping: 20,
        });
    };

    // child matches will...
    const bounceTransition = {
        // start in a transparent, upscaled state
        atEnter: {
            opacity: 1,
            scale: 1.1,
        },
        atLeave: {
            opacity: 1,
            scale: .9,
        },
        // leave in a transparent, downscaled state
        // and rest at an opaque, normally-scaled state
        atActive: {
            opacity: bounce(1),
            scale: bounce(1),
        },
    };
    
    return (
        <div className="App">
            <Router basename='/'>
                <Navbar/>

                <AnimatedSwitch 
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-wrapper"
                >
                    <Route path="/about">
                        <AboutComponent />
                    </Route>
                    <Route path="/resume">
                        <ResumeComponent />
                    </Route>
                    <Route path="/blog">
                        <BlogComponent />
                    </Route>
                    <Route exact path="/">
                        <LandingComponent />
                    </Route>
                    <Route path="/contact">
                        <ContactComponent />
                    </Route>
                </AnimatedSwitch>
            </Router>
        </div>
    );
}

export default App;
