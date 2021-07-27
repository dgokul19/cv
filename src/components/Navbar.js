import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../assets/images/my_logo.jpeg';

const Navbar = () => {
    const [activeState, setActiveState] = useState('/');
    const { pathname } = useLocation();

    useEffect(() => {
        let activeLink = pathname.split('/')[1];
        if(activeLink) {
            setActiveState(activeLink);
        } else {
            setActiveState('/');
        }
    },[pathname]);

    return (
        <Fragment>
            <div className="navigationBar">
                <div className="menuContent">
                    <ul>
                        <li className={activeState === 'about' && 'active'}><Link to="/about">About</Link></li>
                        <li className={activeState === 'resume' && 'active'}><Link to="/resume">Resume </Link></li>
                        <li className={activeState === '/' && 'active'}><Link to="/"><img src={Logo} alt={`My Logo Image`}/></Link></li>
                        <li className={activeState === 'portfolio' && 'active'}><Link to="/portfolio">Portfolio</Link></li>
                        <li className={activeState === 'contact' && 'active'}><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Navbar;