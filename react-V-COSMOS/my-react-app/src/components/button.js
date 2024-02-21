import React from 'react';
import './css/Header.css';
import { useColor } from '../ColorContext'; 

const Header = () => {
    const { colorPerspective, handleColorPerspectiveChange } = useColor();

    return (
        <div className="persistent-header">
            <div className="quote-box12">
                <p><a href="/" className='UpperHeaderTExt'>How Can We Create A More Resilient Planet ?</a></p>
            </div>
            <div className="header-buttons">
                <select
                    className="color-dropdown"
                    value={colorPerspective}
                    onChange={(e) => handleColorPerspectiveChange(e.target.value)} 
                    aria-label="Color Perspective"
                >
                    <option value="default" disabled>Color Perspective</option>
                    <option value="monochromatism">Monochromatism</option>
                    <option value="dichromatism">Dichromatism</option>
                    <option value="anomalous-trichromatism">Anomalous Trichromatism</option>
                    <option value="no-color-blindness">No, I am not color blind</option>
                </select>
                <button className="header-button">Language</button>
            </div>
        </div>
    );
};

export default Header;
