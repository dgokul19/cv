import React, {Fragment, useEffect} from 'react';
import SocialIcons from './Util/SocialIcons';
import SideHighlightContent from './Util/SideHighlightContent';
import { handleNavbarScroll } from '../common/utils';

import AboutPic from '../assets/images/pic_02.jpeg';
const AboutComponent = () => {
    const totalExperience = new Date().getFullYear() - 2015;
    useEffect(() => {
        let scrollElement = document.querySelector('.aboutPageComponent');
        scrollElement.addEventListener('scroll', handleNavbarScroll);
        return () => scrollElement ? scrollElement.removeEventListener('scroll', handleNavbarScroll) : null;
    }, []);
    return (
        <Fragment>
            <div className="aboutPageComponent">
                <SocialIcons />
                <div className="aboutContent">
                    <div className={`leftBox`}>
                        <h1>{`${totalExperience}`}</h1>
                        <span>.</span>
                        <p>
                            <pre>
                                {`Years
                                Experience
                                Working`}
                            </pre>
                        </p>

                    </div>
                    <div className={`rightBox`}>
                        <div className={`aboutPic`}>
                            <img src={AboutPic} alt='Gokulan Dhakshinamoorthy Pic' />
                        </div>
                        <h1>Let Me Introduce Myself</h1>
                        <div className="aboutPara">
                            <p>I possess over {totalExperience}+ years of experience in design, development, and implementation of software/applications of 
                            various enterprise projects in the Information & Technology Industry with excellent knowledge of Object-oriented 
                            programming concepts.</p>
                            <p>I love to generate new ideas and devise feasible solutions to broadly relevant problems.</p>

                            <p>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks 
                            like React.js,Next & Angular js</p>
                            <h4>Apart from programming, some other activities i love to do..</h4>
                            <ul>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>
 Chess Freak - Deeply learn and explore the world of 64 squares mostly.</li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>
 Playing games - ( Cricket, Carrom, Video Games..,)</li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>
 Reading Tech Blogs..,</li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>
 Surfing & Watching movies..</li>
                            </ul>
                            <a href="/resume" className={`knowmore`}> Explore Qualification <i className="fa fa-angle-double-right"></i></a>
                        </div>
                    </div>
                </div>
                <SideHighlightContent content={`Who am i`}/>
            </div>
        </Fragment>
    );
}
 
export default AboutComponent;