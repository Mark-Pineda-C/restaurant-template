import { createContext, useEffect, useState } from "react";

interface ContextProps {
    theme: String;
    changeTheme: (theme: string) => void
}

export const ThemeContext = createContext<ContextProps>({
    theme: "os",
    changeTheme: () => {}
});

interface Props {
    children: JSX.Element
}

const ThemeProvider = ({children}: Props) => {
    const [theme, setTheme] = useState("os")
    const changeTheme = (theme: string) => {
        setTheme(theme);
    }
    useEffect(() => {
      switch(theme){
        case "dark":
            document.body.classList.add("dark");
            break;
        case "light":
            document.body.classList.contains("dark") && document.body.classList.remove("dark");
            break;
        case "os":
            window.matchMedia('(prefers-color-scheme: dark)').matches && document.body.classList.add("dark");
            !window.matchMedia('(prefers-color-scheme: dark)').matches && document.body.classList.remove("dark");
            break;
      }
    }, [theme])

    return <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;