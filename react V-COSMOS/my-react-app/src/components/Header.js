import React, { useState, useEffect } from 'react';
import './css/Header.css';
import headerVideo from './vid/vid2.mp4';
import { useColor } from '../ColorContext'; // Ensure the path matches your project structure

const Header = () => {
    const threshold = document.documentElement.scrollHeight * 0.12;
    const [showPersistentHeader, setShowPersistentHeader] = useState(false);
    const { colorPerspective, handleColorPerspectiveChange } = useColor(); // Use context

    useEffect(() => {
        const onScroll = () => {
            setShowPersistentHeader(window.scrollY > threshold);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Handle the change in color perspective
    const handleChangeColorPerspective = (newValue) => {
        handleColorPerspectiveChange(newValue); // Update the context state
    };

    // Determine the class for color perspective
    const colorPerspectiveClass = colorPerspective === 'monochromatism' 
        ? 'monochrome' 
        : colorPerspective === 'dichromatism' 
        ? 'dichrome'
        : colorPerspective === 'anomalous-trichromatism'
        ? 'anomalous-trichromatism' // This is the new class you need to add in your CSS
        : '';

    return (
        <>
            {showPersistentHeader && (
                <div className={`persistent-header ${colorPerspectiveClass}`}>
                    <div className="quote-box12"><p>How Can We Create A More Resilient Planet ?</p></div>
                    <div className="header-buttons">
                        <select
                            className="color-dropdown"
                            value={colorPerspective}
                            onChange={(e) => handleChangeColorPerspective(e.target.value)}
                            aria-label="Color Perspective"
                        >
                            <option value="default" disabled>Color Perspective</option>
                            <option value="monochromatism">Monochromatism</option>
                            <option value="dichromatism">Dichromatism</option>
                            <option value="anomalous-trichromatism">Trichromatism</option>
                            <option value="no-color-blindness">No, I am not color blind</option>
                        </select>
                        <button className="header-button">Language</button>
                    </div>
                </div>
            )}
            <header className="video-header">
                <video autoPlay loop muted className="video-background">
                    <source src={headerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="header-overlay">
                    <div className="video-text">V:Cosmos</div>
                    <div className="quote-box">
                        <p>How Can We Create A More Resilient Planet ?</p>
                    </div>
                </div>
                <div className="header-buttons">
                    <select
                        className="color-dropdown"
                        value={colorPerspective}
                        onChange={(e) => handleChangeColorPerspective(e.target.value)}
                        aria-label="Color Perspective"
                    >
                        <option value="default" disabled>Color Perspective</option>
                        <option value="monochromatism">Monochromatism</option>
                        <option value="dichromatism">Dichromatism</option>
                        <option value="anomalous-trichromatism">Trichromatism</option>
                        <option value="no-color-blindness">No, I am not color blind</option>
                    </select>
                    <button className="header-button2">Language</button>
                </div>
                
            </header>
        </>
    );
};

export default Header;
