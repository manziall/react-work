import React, { createContext, useContext, useState } from 'react';
import './context.css'
const ThemeContext = createContext();



export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('green'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'green' ? 'red' : 'green'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const UseContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consuming the context value

  return (
    <fieldset><div className='w-50' style={{ backgroundColor: theme === 'green' ? '#02f606' : '#f64b02'}}>
        <h1>Usecontext</h1>
     <h6>Current Theme: {theme}</h6>
      <button className='btn btn-primary btn-hover' onClick={toggleTheme}>Change Color</button>
    </div></fieldset>
  );
};

export default UseContext;