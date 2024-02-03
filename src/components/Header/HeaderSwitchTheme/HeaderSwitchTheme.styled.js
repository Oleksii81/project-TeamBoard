import styled from "styled-components";

export const ThemeWrapper = styled.div`
    position: relative;
`;

export const ThemeTitle = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  width: 68px;
  height: 21px;
  color: var(--themeTitleTextColor);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  cursor: pointer;
  transition: opacity var(--transition_data);

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

export const ThemeSelectWraper = styled.ul`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px 44px 18px 18px;
    border-radius: 8px;
    box-sizing: border-box;
    width: 100px;
    height: 107px;
    border: 1px solid var(--greenGreenBlueColor);
    background-color: var(--themeListBgColor);
    box-shadow: var(--boxShadow);
    // z-index: 50;
    font-weight: 500;
    font-size: 14px;
`;

export const ThemeItems = styled.li`
font-weight: 400;
font-size: 14px;
letter-spacing: -0.28px;
cursor: pointer;
color: var(
    --${props => (props.theme === props.children.toLowerCase() ? 'greenGreenBlueColor' : 'popupTextColor')});
transition: opacity var(--transition_data);

&:hover {
    opacity: 0.7
}
`;

export const StyledP = styled.p`
    color: var(--popupColor)
`