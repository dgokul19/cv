import React, { useState,useEffect, Fragment, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaSmile } from 'react-icons/fa';
import { RiFacebookFill, RiLinkedinFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';
// Components imports
import SocialIcons from './Util/SocialIcons';
import SideHighlightContent from './Util/SideHighlightContent';

import { handleNavbarScroll } from '../common/utils';

const ContactComponent = () => {
    const [ form, setForm ] = useState({
        name : '',
        email : '',
        phone : '',
        message : ''
    });

    const handleInputChange = useCallback((event) => {
        let  { name , value } = event.target;
        setForm({ ...form, [name] : value});
    });

    useEffect(() => {
        let scrollElement = document.querySelector('.contactPageComponent');
        scrollElement.addEventListener('scroll', handleNavbarScroll);
        return () => scrollElement ? scrollElement.removeEventListener('scroll', handleNavbarScroll) : null;
    }, []);

    return (
        <Fragment>
            <div className="contactPageComponent">
                <SocialIcons />
                <div className={`contactContainer`}>
                    <h1>Think i can help, Let's Connect  <FaSmile /> </h1>
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
                            <div className={'formRow'}>
                                <div className={`formField`}>
                                    <input type={'text'} value={form.name} placeholder={`Name`} onChange={handleInputChange}/>
                                </div>
                                <div className={`formField`}>
                                    <input type={'email'} value={form.email} placeholder={`Email`} onChange={handleInputChange}/>
                                </div>
                                <div className={`formField`}>
                                    <input type={'text'} value={form.phone} placeholder={`Phone`} onChange={handleInputChange}/>
                                </div>
                            </div>

                            <div className={'formRow'}>
                                <div className={`formField textArea`}>
                                    <textarea value={form.name} placeholder={`Message`} onChange={handleInputChange}/>
                                </div>
                            </div>
                            <button className={`knowmore`} disabled={true}>Submit</button>
                        </div>
                    </div>
                </div>
                <SideHighlightContent content={`Contact`} />
            </div>
        </Fragment>
    );
}

export default ContactComponent;