import React, { Fragment, useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
 import { RiMenuFoldLine } from 'react-icons/ri';
 import { AiFillCloseCircle } from 'react-icons/ai';
import Logo from '../assets/images/my_logo.jpeg';

const Navbar = () => {
    const [activeState, setActiveState] = useState('/');
    const [openMobileNav, SetMobileNav] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        let activeLink = pathname.split('/')[1];
        if(activeLink) {
            setActiveState(activeLink);
        } else {
            setActiveState('/');
        }
        SetMobileNav(false);
    },[pathname]);

    return (
        <Fragment>
            <div className="navigationBar">
                <div className="menuContent">
                    <ul>
                        <li className={activeState === 'about' && 'active'}><Link to="/about">About</Link></li>
                        <li className={activeState === 'resume' && 'active'}><Link to="/resume">Resume </Link></li>
                        <li className={activeState === '/cv' && 'active'}><Link to="/cv"><img src={Logo} alt={`My Logo Image`}/></Link></li>
                        <li className={activeState === 'portfolio' && 'active'}><Link to="/portfolio">Portfolio</Link></li>
                        <li className={activeState === 'contact' && 'active'}><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={`mobileMenu`}>
                    <div className={`logoClx`}><Link to="/cv"><img src={Logo} alt={`My Logo Image`}/></Link></div>
                    <div className={`menuBtn`} onClick={() => SetMobileNav(true)}>
                        <RiMenuFoldLine />
                    </div>
                </div>
            </div>
            <div className={`backDropMenu ${openMobileNav ? 'activate' : null}`}>
                <div className={`menuContainer`}>
                    <ul>
                        <li className={activeState === '/cv' && 'active'}><Link to="/cv">Home</Link></li>
                        <li className={activeState === 'about' && 'active'}><Link to="/about">About</Link></li>
                        <li className={activeState === 'resume' && 'active'}><Link to="/resume">Resume </Link></li>
                        <li className={activeState === 'portfolio' && 'active'}><Link to="/portfolio">Portfolio</Link></li>
                        <li className={activeState === 'contact' && 'active'}><Link to="/contact">Contact</Link></li>
                    </ul>
                    <AiFillCloseCircle className={'closeNav'} onClick={() => SetMobileNav(false)}/>
                </div>
            </div>
        </Fragment>
    );
}
 
export default React.memo(Navbar);