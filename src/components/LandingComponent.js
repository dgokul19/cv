import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom';

import TypeComponent from './Util/Typewritter';
import SocialIcons from './Util/SocialIcons';

import profPic from '../assets/images/pic_01.png';
import { handleNavbarScroll } from '../common/utils';

const LandingComponent = () => {

    useEffect(() => {
        let scrollElement = document.querySelector('.landingPage');
        scrollElement.addEventListener('scroll', handleNavbarScroll);
        return () => scrollElement ? scrollElement.removeEventListener('scroll', handleNavbarScroll) : null;
    }, []);

    return ( 
        <Fragment>
            <div className="landingPage">
                <SocialIcons />
                <div className="homeContent">
                    <div className="heloContent">
                        <TypeComponent/>
                        <h1><span>{`Howdy, I'm`}</span><br></br> {`Gokul`} <span>.</span></h1>
                        <p>
                            {`Passion and diligence are two traits that I believe most reflect me as an individual. I love 
                            to generate new ideas and devise feasible solutions to broadly relevant problems.`}</p>
                            <p>{`I enjoy embracing the lessons 
                            learned from failure, stand up and continue to grow.`}
                        </p>
                        <Link to="/about" className={`knowmore`}> know more <i className="fa fa-angle-double-right"></i></Link>
                    </div>
                    <div className="heloPic">
                        <img src={profPic} alt="My profile"/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default LandingComponent;