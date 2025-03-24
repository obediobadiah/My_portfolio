import React, { createContext, useEffect, useContext } from 'react';

// Create theme context with fixed light theme
const ThemeContext = createContext({ theme: 'light' });

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Always use light theme
  const theme = 'light';
  
  // Set light theme on body element
  useEffect(() => {
    const body = document.body;
    body.classList.add('light');
    
    // Cleanup function if component unmounts
    return () => {
      body.classList.remove('light');
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext; 