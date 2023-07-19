import { createContext,useContext,useState,useEffect } from "react";

const AppContext=createContext();


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
        const body=document.querySelector('body');
        body.classList.toggle('dark-theme',isDarkTheme)
    },[isDarkTheme])

    return (
        <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,setSearchTerm,searchTerm}}>{children}
        </AppContext.Provider>
    );
};

export const useGlobalContext=()=>useContext(AppContext)
