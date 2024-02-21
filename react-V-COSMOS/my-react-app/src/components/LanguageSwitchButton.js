import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitchButton = () => {
    const { switchLanguage } = useLanguage();
  
    const handleLanguageChange = (event) => {
      switchLanguage(event.target.value);
    };
  
    return (
      <select onChange={handleLanguageChange} style={{ width: '150px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} className="language-dropdown">
        <option value="en">English</option>
        <option value="es">Español (Spanish)</option>
        <option value="fr">Français (French)</option>
        <option value="de">Deutsch (German)</option>
        <option value="hi">हिन्दी (Hindi)</option>
        {/* Add more languages as needed */}
      </select>
    );
  };
  
  export default LanguageSwitchButton;