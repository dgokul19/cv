import React, {Fragment, useEffect, useMemo} from 'react';
import moment from "moment";
import {Link} from 'react-router-dom';

import SocialIcons from './Util/SocialIcons';
import SideHighlightContent from './Util/SideHighlightContent';

import { EXP_CONSTANT } from "../common/helper";
import { handleNavbarScroll } from '../common/utils';

import AboutPic from '../assets/images/pic_02.jpg';
const AboutComponent = () => {
    

    const totalExperience = useMemo(() => {
        const months = new Set();

        // convert date into unique integer month value based on year 1900
        function m1900(yyyymmdd) {
            if(!yyyymmdd){
                yyyymmdd = moment(new Date()).format('YYYY-MM-DD');
            }
            const [_, y, m, d] = yyyymmdd.match(/^(\d{4})-(\d{2})-(\d{2})$/).map(Number);
            return (y - 1900) * 12 + m;
        }

        EXP_CONSTANT.forEach(job => {
            const m1 = m1900(job?.joiningDate);
            const m2 = m1900(job?.endingDate);
            for (let m = m1; m < m2; m++) months.add(m);
        });
        // return (months.size / 12).toFixed(2).split('.').shift();
        return 8;
    },[]);

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

                            <h4>Apart from programming, some other activities i love to do..</h4>
                            <ul>
                                <li><i className="fa fa-angle-double-right" aria-hidden="true"></i>
 Chess Freak - Deeply learn and explore the world of 64 squares.</li>
                                <li><i className="fa fa-angle-double-right" aria-hidden="true"></i>
 Playing games - ( Cricket, Carrom, Video Games..,)</li>
                                <li><i className="fa fa-angle-double-right" aria-hidden="true"></i>
 Reading Tech Blogs..,</li>
                                <li><i className="fa fa-angle-double-right" aria-hidden="true"></i>
 Internet Surfing & Watching movies..</li>
                            </ul>
                            <Link to="/resume" className={`knowmore`}> Explore Qualification <i className="fa fa-angle-double-right"></i></Link>
                        </div>
                    </div>
                </div>
                <SideHighlightContent content={`Who am i`}/>
            </div>
        </Fragment>
    );
}
 
export default AboutComponent;
