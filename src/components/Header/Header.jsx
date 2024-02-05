import HeaderSwitchTheme from "./HeaderSwitchTheme/HeaderSwitchTheme";
import HeaderUserBar from "./HeaderUserBar/HeaderUserBar";
import { HeaderWrapper } from "./Header.styled";


const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderSwitchTheme />
            <HeaderUserBar/>
        </HeaderWrapper>
    )

}

export default Header;