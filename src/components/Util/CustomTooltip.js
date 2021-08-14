import React, { useEffect, useState } from 'react';
import '../../assets/css/tooltip.css';

const CustomToolTip = ({ name, children, direction }) => {
    const [style, setStyle] = useState({});
    let styleDirection = {};

    useEffect(() => {
        switch (direction) {
            case 'left':
                styleDirection['right'] = '100%';
                styleDirection['top'] = '50%';
                break;
            case 'top':
                styleDirection['bottom'] = '100%';
                styleDirection['left'] = '0';
                break;
            case 'right':
                styleDirection['left'] = '100%';
                styleDirection['top'] = '50%';
                break;
            case 'bottom':
                styleDirection['top'] = '100%';
                styleDirection['left'] = '0';
                break;
            default:
                styleDirection['bottom'] = '100%';
                styleDirection['left'] = '0';
        }
        setStyle({ ...styleDirection });
    }, []);

    return (
        <div className={`tooltipContainer`}>
            {children}
            <div className={`tooltpBox`} style={style}>
                {name}
            </div>
        </div>
    );
}

export default React.memo(CustomToolTip);