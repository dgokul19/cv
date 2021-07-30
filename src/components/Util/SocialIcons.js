import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function SocialIcons() {
    return (
       <Fragment>
           <ul className="bodyIcons">
               <li><a target="_blank" href="https://www.facebook.com/gokulan.dhatchinamoorthy"><i className="fa fa-facebook"></i></a></li>
               <li><a target="_blank" href="https://www.linkedin.com/in/dgokul19/"><i className="fa fa-linkedin"></i></a></li>
               <li><a target="_blank" href="https://twitter.com/dgokul19"><i className="fa fa-twitter"></i></a></li>
           </ul>
       </Fragment>
    );
}

export default SocialIcons;