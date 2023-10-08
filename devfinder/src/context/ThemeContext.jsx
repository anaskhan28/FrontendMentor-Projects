import { createContext, useEffect, useState } from "react";
const ThemeContext = createContext();

export default ThemeContext;


export  const ThemeProvider = ({children}) =>{
const [theme, setTheme] = useState('light');


const toggleTheme = () =>{
    setTheme(theme === 'light' ? 'dark': 'light')


}

useEffect(() => {
    // Set the theme class on the body element
    document.body.className = theme;
  }, [theme]);


return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
    </ThemeContext.Provider>

)
};

