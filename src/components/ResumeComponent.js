import React, { Fragment, useEffect } from 'react';
import {
    DiHtml5, DiCss3, DiJavascript1, DiBootstrap, DiJqueryLogo,
    DiAngularSimple, DiReact, DiNodejs, DiMysql, DiMongodb, DiPhp, DiPython, DiPhotoshop, DiIllustrator,
    DiMaterializecss, DiGithubFull, DiBitbucket, DiJira, DiGoogleDrive, DiVisualstudio, DiSass, DiNpm, DiWindows, DiLinux
} from 'react-icons/di';
// Components imports
import SocialIcons from './Util/SocialIcons';
import SideHighlightContent from './Util/SideHighlightContent';
import CustomToolTip from './Util/CustomTooltip';


import { handleNavbarScroll } from '../common/utils';

import gokulanresume from '../assets/docs/gokulan.pdf';

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
                                <li><CustomToolTip direction="top" name="HTML5"><DiHtml5 /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="CSS3"><DiCss3 /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="JAVASCRIPT"><DiJavascript1 /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="BOOTSTRAP"><DiBootstrap /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="JQUERY"><DiJqueryLogo /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="SASS"><DiSass /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="PHOTOSHOP"><DiPhotoshop /></CustomToolTip></li>
                            </ul>

                            <ul>
                                <li><CustomToolTip direction="top" name="ANGULAR JS"><DiAngularSimple /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="REACT JS"><DiReact /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="NODE JS"><DiNodejs /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="MYSQL"><DiMysql /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="MONGO DB"><DiMongodb /></CustomToolTip></li>
                            </ul>
                        </div>

                        <div className={`skillSection`}>
                            <h3>{`------( Rudimentary Knowledge )------`}</h3>

                            <ul>
                                <li><CustomToolTip direction="top" name="PHP"><DiPhp /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="PYTHON"><DiPython /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="MATERIAL UI"><DiMaterializecss /></CustomToolTip></li>
                            </ul>
                        </div>

                        <div className={`skillSection`}>
                            <h3>{`------( Tools )------`}</h3>

                            <ul>
                                <li><CustomToolTip direction="top" name="GITHUB"><DiGithubFull /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="BITBUCKET"><DiBitbucket /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="NPM"><DiNpm /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="JIRA"><DiJira /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="VS CODE"><DiVisualstudio /></CustomToolTip></li>
                            </ul>
                        </div>

                        <div className={`skillSection`}>
                            <h3>{`------( Operating System )------`}</h3>

                            <ul>
                                <li><CustomToolTip direction="top" name="WINDOWS"><DiWindows /></CustomToolTip></li>
                                <li><CustomToolTip direction="top" name="LINUX"><DiLinux /></CustomToolTip></li>
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