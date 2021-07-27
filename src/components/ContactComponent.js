import React, { Fragment } from 'react';

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

                </div>
                <SideHighlightContent content={`Contact`} />
            </div>
        </Fragment>
    );
}

export default ContactComponent;