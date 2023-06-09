import { createContext,useContext,useState,useEffect } from "react";

const AppContext=createContext();

// setting up the functionality so that our app automatically set darkmode base don user browser theme
const getInitialDarkMode=()=>{
    const prefersDarkMode=window.matchMedia('(prefers-color-scheme:dark)').matches;
    console.log(prefersDarkMode)
    return prefersDarkMode;
}
export const AppProvider=({children})=>{
    const [isDarkTheme,setIsDarktheme]=useState(getInitialDarkMode());
    const [searchTerm,setSearchTerm]=useState('cat');
    const toggleDarkTheme=()=>{
        const newDarkTheme=!isDarkTheme;
        setIsDarktheme(newDarkTheme);   
    }

    useEffect(()=>{
        // adding or removing class base on dark theme toggle // more info in readme
        const body=document.querySelector('body');
        body.classList.toggle('dark-theme',isDarkTheme)
    },[isDarkTheme])

    return (
        <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,setSearchTerm,searchTerm}}>{children}
        </AppContext.Provider>
    );
};

export const useGlobalContext=()=>useContext(AppContext)