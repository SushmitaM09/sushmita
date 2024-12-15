
  import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    useEffect (() => {
        const saveTheme = localStorage.getItem('theme');
        if(saveTheme){
            setTheme(saveTheme);
        }
     },[]);
     
     useEffect (() => {
        document.body.className = theme;
    localStorage.setItem('theme', theme);
    },[theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};