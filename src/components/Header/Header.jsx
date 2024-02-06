import { useState, useEffect } from "react";
import HeaderSwitchTheme from "./HeaderSwitchTheme/HeaderSwitchTheme";
import HeaderUserBar from "./HeaderUserBar/HeaderUserBar";
import { HeaderWrapper } from "./Header.styled";
import {ReactComponent as BurgerIcon} from '../../images/burger.svg'

const Header = ({ toggleSidebar }) => {
    const burgerIconStyles = {
        cursor: 'pointer',
        position: 'absolute',
        left: '32px',

    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth >= 767) {
         Object.assign(burgerIconStyles, {
            display: 'none'
        });
    }

    
    
    return (
        <HeaderWrapper>
            <BurgerIcon onClick={toggleSidebar} style={burgerIconStyles}/>
            
            <HeaderSwitchTheme />
            <HeaderUserBar />
        </HeaderWrapper>
    );
}

export default Header;
