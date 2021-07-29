import React, { Fragment, useEffect } from 'react';
import {
    DiHtml5, DiCss3, DiJavascript1, DiBootstrap, DiJqueryLogo,
    DiAngularSimple, DiReact, DiNodejs, DiMysql, DiMongodb, DiPhp, DiPython, DiPhotoshop, DiIllustrator,
    DiMaterializecss, DiGithubFull, DiBitbucket, DiJira, DiGoogleDrive, DiVisualstudio, DiSass, DiNpm, DiWindows, DiLinux
} from 'react-icons/di';
// Components imports
import SocialIcons from './Util/SocialIcons';
import SideHighlightContent from './Util/SideHighlightContent';


import { handleNavbarScroll } from '../common/utils';

import gokulanresume from '../assets/docs/gokulan-resume.pdf';

const ResumeComponent = () => {
    
    useEffect(() => {
        let scrollElement = document.querySelector('.resumePageComponent');
        scrollElement.addEventListener('scroll', handleNavbarScroll);
        return () =>  scrollElement ? scrollElement.removeEventListener('scroll', handleNavbarScroll) : null;
    }, []);

    return (
        <Fragment>
            <div className="resumePageComponent">
                <SocialIcons />
                <div className="resumeContent">
                    <div className={'glassContainer'}>
                        <div className={`contentBx education`}>
                            <div className="glassBox">
                                <h1>Education</h1>
                                <ul>
                                    <li>
                                        <h4>Bachelor of Engineering (CS)</h4>
                                        <span className={`timeLine`}>{` August 2010 - June 2014`}</span>
                                        <p>Jaya Institute of Technology, Tiruvallur</p>
                                        {/* <hr></hr> */}
                                    </li>

                                    <li>
                                        <h4>Higher Secondary (Second Year)</h4>
                                        <span className={`timeLine`}>{` April 2009 - June 2010`}</span>
                                        <p>National Higher Secondary School, Mannargudi</p>
                                    </li>

                                    <li>
                                        <h4>Higher Secondary (First Year)</h4>
                                        <span className={`timeLine`}>{` April 2008 - June 2009`}</span>
                                        <p>Ponnaiyah Ramajayam Public Hr Sec School, Thanjavur</p>
                                    </li>

                                    <li>
                                        <h4>SSLC (10<sup>th</sup>)</h4>
                                        <span className={`timeLine`}>{` till Mar 2008`}</span>
                                        <p>Nava Bharath Matriculation Hr Sec School, Ullikkottai</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`contentBx experience`}>
                            <div className="glassBox">
                                <h1>Experience</h1>
                                <ul>
                                    <li>
                                        <h4>Software Engineer IN3</h4>
                                        <span className={`timeLine`}>{` May 2020 - Present`}</span>
                                        <p>Walmart Global Tech,Chennai</p>
                                    </li>

                                    <li>
                                        <h4>Software Engineer</h4>
                                        <span className={`timeLine`}>{` May 2018 - April 2020`}</span>
                                        <p>Congruent Global, Inc.., Chennai</p>
                                    </li>

                                    <li>
                                        <h4>UI & UX Developer</h4>
                                        <span className={`timeLine`}>{` Feb 2017 - March 2018`}</span>
                                        <p>EDatalabs, Chennai</p>
                                    </li>

                                    <li>
                                        <h4>Web Designer</h4>
                                        <span className={`timeLine`}>{` Mar 2015 - Nov 2017`}</span>
                                        <p>Ecphasis Infotech, Chennai</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <div className={`skillContainer`}>



                        <h1>Professional Skillset</h1>
                        <div className={`skillSection`}>
                            <h3>{`------( Primary Prowess )------`}</h3>

                            <ul>
                                <li><DiHtml5 /></li>
                                <li><DiCss3 /></li>
                                <li><DiJavascript1 /></li>
                                <li><DiBootstrap /></li>
                                <li><DiJqueryLogo /></li>
                                <li><DiSass /></li>
                            </ul>

                            <ul>
                                <li><DiAngularSimple /></li>
                                <li><DiReact /></li>
                                <li><DiNodejs /></li>
                                <li><DiMysql /></li>
                                <li><DiMongodb /></li>
                            </ul>
                        </div>

                        <div className={`skillSection`}>
                            <h3>{`------( Rudementary Knowledge )------`}</h3>

                            <ul>
                                <li><DiPhp /></li>
                                <li><DiPython /></li>
                                <li><DiIllustrator /></li>
                                <li><DiMaterializecss /></li>
                            </ul>
                        </div>

                        <div className={`skillSection`}>
                            <h3>{`------( Tools )------`}</h3>

                            <ul>
                                <li><DiGithubFull /></li>
                                <li><DiBitbucket /></li>
                                <li><DiNpm /></li>
                                <li><DiJira /></li>
                                <li><DiVisualstudio /></li>
                            </ul>
                        </div>

                        <div className={`skillSection`}>
                            <h3>{`------( Operating System )------`}</h3>

                            <ul>
                                <li><DiWindows /></li>
                                <li><DiLinux /></li>
                            </ul>
                        </div>

                        <span>
                            <a target="_blank" href={gokulanresume} className={`knowmore`}> Download Resume <i className="fa fa-angle-double-right"></i></a>
                        </span>

                    </div>
                </div>

                <SideHighlightContent content={`Resume`} />
            </div>
        </Fragment>
    );
}

export default ResumeComponent;