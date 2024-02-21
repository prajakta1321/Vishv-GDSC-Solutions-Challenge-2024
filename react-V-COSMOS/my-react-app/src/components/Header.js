import React, { useState, useEffect } from 'react';
import './css/Header.css';
import headerVideo from './vid/vid2.mp4';
import { useColor } from '../ColorContext'; // Ensure the path matches your project structure
import LanguageSwitchButton from './LanguageSwitchButton';
import { useLanguage } from '../contexts/LanguageContext';
import { translateText } from './api/translate';

const Header = () => {
    const [showPersistentHeader, setShowPersistentHeader] = useState(false);
    const { colorPerspective, handleColorPerspectiveChange } = useColor(); // Use context
    const { language } = useLanguage(); // Destructure to get current language
    const [translatedTexts, setTranslatedTexts] = useState({
        headerText: '',
        quoteText: ''
    });

    useEffect(() => {
        // Function to translate texts
        const translateAllTexts = async () => {
            const headerTranslation = await translateText('Vishv', language);
            const quoteTranslation = await translateText('How Can We Create A More Resilient Planet ?', language);
            setTranslatedTexts({
                headerText: headerTranslation,
                quoteText: quoteTranslation
            });
        };

        translateAllTexts();
    }, [language]);

    useEffect(() => {
        // Function to handle scroll, moved inside useEffect
        const onScroll = () => {
            const threshold = document.documentElement.scrollHeight * 0.12;
            setShowPersistentHeader(window.scrollY > threshold);
        };

        // Setup scroll event listener
        window.addEventListener('scroll', onScroll);
        
        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', onScroll);
    }, []); // Removed language as a dependency to avoid re-adding the event listener on language changes. Add other dependencies as needed.

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
                    <div className="quote-box12"><p>{translatedTexts.quoteText}</p></div>
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
                        <LanguageSwitchButton/>
                    </div>
                </div>
            )}
            <header className="video-header">
                <video autoPlay loop muted className="video-background">
                    <source src={headerVideo} type="video/mp4" />
                </video>
                <div className="header-overlay">
                    <div className="video-text"><p>{translatedTexts.headerText}</p></div>
                    <div className="quote-box">
                        <p>{translatedTexts.quoteText}</p>
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
                    <LanguageSwitchButton/>
                </div>
                
            </header>
        </>
    );
};

export default Header;
