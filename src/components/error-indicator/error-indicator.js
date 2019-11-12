import React from 'react';

import './error-indicator.css';
import icon from './icon.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error-icon"/>
            <span className="header-text">Sorry!!!</span>
            <span className="error-text">
                Something has gone wrong,
            </span>
            <span className="error-text">
                but we are trying to fix it!
            </span>
        </div>
    );
};

export default ErrorIndicator;