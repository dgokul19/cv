import React, { useState, useEffect } from 'react';

const SideHighlightContent = ({ content }) => {
           
    return (
        <div className={`sideFadedContent`}>
            <h1>{content}</h1>
        </div>
    );
}

export default SideHighlightContent;