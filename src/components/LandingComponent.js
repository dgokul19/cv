import React, { Fragment } from 'react';

import Navbar from './Navbar';
import TypeComponent from './Util/Typewritter';
import SocialIcons from './Util/SocialIcons';

import profPic from '../assets/images/pic_01.jpeg';
import ResumePdf from '../assets/docs/gokulan-resume.pdf';

const LandingComponent = () => {
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
                        <a href={`/about`} className={`knowmore`}> know more <i className="fa fa-angle-double-right"></i></a>
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