import React, { createContext, useContext, useState, useEffect } from 'react';

const ColorContext = createContext();

export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
    const [colorPerspective, setColorPerspective] = useState(() => {
        // Initialize from local storage or use the default value
        return localStorage.getItem('colorPerspective') || 'default';
    });

    const handleColorPerspectiveChange = (newColor) => {
        setColorPerspective(newColor);
        // Store in local storage
        localStorage.setItem('colorPerspective', newColor);
    };

    useEffect(() => {
        // Remove all classes and filters related to color perspectives
        document.body.classList.remove('monochrome', 'dichrome', 'anomalous-trichromatism');

        // Apply the class or filter based on colorPerspective
        switch (colorPerspective) {
            case 'monochromatism':
                document.body.classList.add('monochrome');
                break;
            case 'dichromatism':
                // Apply the 'dichrome' class to the body without grayscale filter
                document.body.classList.add('dichrome');
                break;
            case 'anomalous-trichromatism':
                // Apply the 'anomalous-trichromatism' class to the body
                document.body.classList.add('anomalous-trichromatism');
                break;
            default:
                // Remove any classes or filters when the perspective is not defined
                break;
        }
    }, [colorPerspective]);

    useEffect(() => {
        // Clean up: remove any filters and classes when the component unmounts
        return () => {
            document.body.classList.remove('monochrome', 'dichrome', 'anomalous-trichromatism');
        };
    }, []);

    return (
        <ColorContext.Provider value={{ colorPerspective, handleColorPerspectiveChange }}>
            {children}
        </ColorContext.Provider>
    );
};
