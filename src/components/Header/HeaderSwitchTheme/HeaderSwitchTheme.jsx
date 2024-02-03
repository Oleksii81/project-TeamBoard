import { ThemeWrapper, ThemeSelectWraper, ThemeTitle, ThemeItems, StyledP } from "./HeaderSwitchTheme.styled";
import { useState, useEffect } from "react";

const HeaderSwitchTheme = () => {
    const [theme, setTheme] = useState('light');
    const [list, setList] = useState(false)

     useEffect(() => {
    document.body.setAttribute('data-theme', theme);
     }, [theme]);
    
    
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        setList('false')
    }

    const toogleList = () => {
        setList(!list);
    }

    return (
        <ThemeWrapper>
            <ThemeTitle onClick={toogleList}>Theme</ThemeTitle>
            {list && (
                <ThemeSelectWraper theme={theme} onClick={toogleList}>
                    <ThemeItems onClick={() => handleThemeChange('light')}>Light</ThemeItems>
                    <ThemeItems onClick={() => handleThemeChange('dark')}>Dark</ThemeItems>
                    <ThemeItems onClick={() => handleThemeChange('violet')}>Violet</ThemeItems>
                </ThemeSelectWraper>
            )
            }
        <StyledP>SDGFHJK</StyledP>
            
        </ThemeWrapper>
)
}

export default HeaderSwitchTheme;