import React, { Fragment } from 'react';
import { FaSmile } from 'react-icons/fa';
import { RiFacebookFill, RiLinkedinFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';
// Components imports
import SocialIcons from './Util/SocialIcons';
import SideHighlightContent from './Util/SideHighlightContent';

import '../assets/css/contactPage.scss';

const ContactComponent = () => {
    return (
        <Fragment>
            <div className="contactPageComponent">
                <SocialIcons />
                <div className={`contactContainer`}>
                    <h1>Think i can help, Let's Talk <FaSmile /> </h1>
                    <div className={`contactBox`}>
                        <div className={`contactLinks`}>
                            <h3>EMAIL</h3>
                            <ul>
                                <li><a href="mailto:g.dhakshinamoorthy@walmart.com">g.dhakshinamoorthy@walmart.com</a></li>
                                <li><a href="mailto:dgokul19@gmail.com">dgokul19@gmail.com</a></li>
                            </ul>

                            <h3>REACH</h3>
                            <ul>
                                <li><a href="mailto:g.dhakshinamoorthy@walmart.com">+91-(812)-(270)-1839</a></li>
                                <li><a href="mailto:dgokul19@gmail.com">+914367 - 271839</a></li>
                            </ul>
                            
                            <h3>CONNECT</h3>
                            <ul className="socialIcons">
                                <li><a target="_blank" href="https://www.facebook.com/gokulan.dhatchinamoorthy"><RiFacebookFill /></a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/dgokul19/"><RiLinkedinFill /></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/madnessonboard/"><RiInstagramFill /></a></li>
                                <li><a target="_blank" href="https://twitter.com/dgokul19"><RiTwitterFill /></a></li>
                            </ul>
                        </div>
                        <div className={`contactForm`}>

                        </div>
                    </div>
                </div>
                <SideHighlightContent content={`Contact`} />
            </div>
        </Fragment>
    );
}

export default ContactComponent;