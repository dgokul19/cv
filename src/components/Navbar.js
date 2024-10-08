import React, { Fragment, useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
 import { RiMenuFoldLine } from 'react-icons/ri';
 import { AiFillCloseCircle, AiOutlineCloudDownload } from 'react-icons/ai';
import Logo from '../assets/images/my_logo.jpeg';

import ResumeMine from '../assets/docs/gokulan-dhatchinamoorthy.pdf';

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
        window.scrollTo(0, 0);
        document.querySelector('.navigationBar').classList.remove('navBackground');
    },[pathname]);

    return (
        <Fragment>
            <div className="navigationBar">
                <div className="menuContent">
                    <ul>
                        <li className={activeState === 'about' && 'active'}><Link to="/about">About</Link></li>
                        <li className={activeState === 'resume' && 'active'}><Link to="/resume">Resume </Link></li>
                        <li className={activeState === '/' && 'active'}><Link to="/"><img src={Logo} alt={`My Logo Image`}/></Link></li>
                        <li className={activeState === 'blog' && 'active'}><Link to="/blog">Blogs</Link></li>
                        <li className={activeState === 'contact' && 'active'}><Link to="/contact">Contact</Link></li>
                    </ul>
                    <a target="_blank" href={ResumeMine} className={`resumeBtn`}>Resume <AiOutlineCloudDownload /></a>
                </div>
                <div className={`mobileMenu`}>
                    <div className={`logoClx`}><Link to="/"><img src={Logo} alt={`My Logo Image`}/></Link></div>
                    <div className={`menuBtn`}>
                        <a target="_blank" href={ResumeMine} className={`resumeBtn`}>Resume <AiOutlineCloudDownload /></a>
                        <RiMenuFoldLine  onClick={() => SetMobileNav(true)}/>
                    </div>
                </div>
            </div>
            <div className={`backDropMenu ${openMobileNav ? 'activate' : null}`}>
                <div className={`menuContainer`}>
                    <ul>
                        <li className={activeState === '/' && 'active'}><Link to="/">Home</Link></li>
                        <li className={activeState === 'about' && 'active'}><Link to="/about">About</Link></li>
                        <li className={activeState === 'resume' && 'active'}><Link to="/resume">Resume </Link></li>
                        <li className={activeState === 'blog' && 'active'}><Link to="/blog">Blog</Link></li>
                        <li className={activeState === 'contact' && 'active'}><Link to="/contact">Contact</Link></li>
                    </ul>
                    <AiFillCloseCircle className={'closeNav'} onClick={() => SetMobileNav(false)}/>
                </div>
            </div>
        </Fragment>
    );
}
 
export default React.memo(Navbar);