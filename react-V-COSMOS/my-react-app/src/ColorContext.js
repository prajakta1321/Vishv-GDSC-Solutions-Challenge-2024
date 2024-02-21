import React, { createContext, useContext, useState, useEffect } from 'react';

const ColorContext = createContext();

export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
    const [colorPerspective, setColorPerspective] = useState(() => {
        return localStorage.getItem('colorPerspective') || 'default';
    });

    const handleColorPerspectiveChange = (newColor) => {
        setColorPerspective(newColor);
        localStorage.setItem('colorPerspective', newColor);
    };

    useEffect(() => {
        document.body.classList.remove('monochrome', 'dichrome', 'anomalous-trichromatism');

        switch (colorPerspective) {
            case 'monochromatism':
                document.body.classList.add('monochrome');
                break;
            case 'dichromatism':
                document.body.classList.add('dichrome');
                break;
            case 'anomalous-trichromatism':
                document.body.classList.add('anomalous-trichromatism');
                break;
            default:
                break;
        }
    }, [colorPerspective]);

    useEffect(() => {
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
