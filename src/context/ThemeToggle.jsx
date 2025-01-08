import { createContext, useState } from "react"
import themeLight from '../img/claro.gif';
import themeDarck from '../img/tema-escuro.gif';

const themes = {
    light: {
        color: '#000',
        fontWeight: '600',
        background: `url(${themeLight})`,
    },
    darck: {
        color: '#fff',
        fontWeight: '400',
        background: `url(${themeDarck})`,
    }
}

const ThemeToggleContext = createContext({});

const ThemeToggleProvider = (props) => {
    const [ theme , setTheme ] = useState(themes.light)

    return(
        <ThemeToggleContext.Provider value={ {theme , setTheme} }>
            {props.children}
        </ThemeToggleContext.Provider>
    )
}

export { ThemeToggleProvider , ThemeToggleContext , themes }