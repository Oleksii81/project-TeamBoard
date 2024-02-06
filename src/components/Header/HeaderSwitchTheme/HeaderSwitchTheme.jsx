import { ThemeWrapper, ThemeSelectWraper, ThemeTitle, ThemeItems,ThemeSelectIcon } from "./HeaderSwitchTheme.styled";
import { useState, useEffect } from "react";
import sprite from '../../../images/sprite.svg'

const HeaderSwitchTheme = () => {
    const [theme, setTheme] = useState('light');
    const [list, setList] = useState(false)

     useEffect(() => {
    document.body.setAttribute('data-theme', theme);
     }, [theme]);
    
     useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);
    
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme)
        setList('false')
    }

    const toogleList = () => {
        setList(!list);
    }

    return (
        <ThemeWrapper>
            <ThemeTitle onClick={toogleList}>Theme
                <ThemeSelectIcon>
                    <use href={sprite + "#icon-chevron-down"} />
            </ThemeSelectIcon>
            </ThemeTitle>
            {list && (
                <ThemeSelectWraper theme={theme} onClick={toogleList}>
                    <ThemeItems onClick={() => handleThemeChange('light')}>Light</ThemeItems>
                    <ThemeItems onClick={() => handleThemeChange('dark')}>Dark</ThemeItems>
                    <ThemeItems onClick={() => handleThemeChange('violet')}>Violet</ThemeItems>
                </ThemeSelectWraper>
            )
            }
            
        </ThemeWrapper>
)
}

export default HeaderSwitchTheme;