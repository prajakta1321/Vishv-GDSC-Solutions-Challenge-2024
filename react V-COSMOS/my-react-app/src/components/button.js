import React, { useState, useEffect } from 'react';
import './css/button.css';


const Button = () => {
    return (
        <>
            {/* Rest of the initial header content */}
            <div className="persistent-header">
                <div className="quote-box12">
                    <p>How Can We Create A More Resilient Planet?</p>
                </div>
                <div className="header-buttons">
                    <button className="header-button1">Color Perspective</button>
                    <button className="header-button1">Language</button>
                </div>
            </div>
        </>
    );
};


  export default Button;