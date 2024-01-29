import React, { useState, useEffect } from 'react';
import './css/Header.css';
import headerVideo from './vid/vid2.mp4';

const Header = () => {
    const [showPersistentHeader, setShowPersistentHeader] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // Set the state to true if scrolled more than 50 pixels, for example
            setShowPersistentHeader(window.scrollY > 655);
        };

        // Bind the scroll event listener
        window.addEventListener('scroll', onScroll);

        // Clean up the scroll event listener
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* Persistent header that appears after scrolling */}
            {showPersistentHeader && (
                <div className="persistent-header">
                    <div className="quote-box12"><p>How Can We Create A More Resilient Planet?</p></div>
                    <div className="header-buttons">
                        <button className="header-button">Color Perspective</button>
                        <button className="header-button">Language</button>
                    </div>
                </div>
            )}

            <header className="video-header">
                {/* Rest of the initial header content */}
                <video autoPlay loop muted className="video-background">
                    <source src={headerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="header-overlay">
                    <div className="video-text">V:Cosmos</div>
                    <div className="quote-box">
                        <p>How Can We Create A More Resilient Planet?</p>
                    </div>
                </div>
                <div className="header-buttons">
                    <button className="header-button2">Color Perspective</button>
                    <button className="header-button2">Language</button>
                </div>
            </header>
        </>
    );
};

export default Header;
