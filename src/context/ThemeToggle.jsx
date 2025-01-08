import { createContext, useState } from "react"

const themes = {
    light: {
        color: '#000',
        fontWeight: '600',
        background: 'url(./src/img/claro.gif)',
    },
    darck: {
        color: '#fff',
        fontWeight: '400',
        background: 'url(./src/img/tema-escuro.gif)',
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