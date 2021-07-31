import React, { useState, useEffect } from 'react';

const AnimateLoaded = ( props ) => {
    console.log({props});
    const [didMount, SetMount ] = useState(false);

        useEffect(() => {
            setTimeout(() => {
                SetMount(true);
            }, 200);
        }, []);
           
    return (
        <div className={`fade-in ${didMount && 'visible'}`}>
            {props.children}
        </div>
    );
}

export default AnimateLoaded;