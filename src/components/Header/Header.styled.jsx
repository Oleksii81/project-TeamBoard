import styled from "styled-components";

export const HeaderWrapper = styled.div`
//staying ate the top of page and locating elements
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0; 
    width: 100%;
    z-index: 5;
//colors
    background: var(--headerBgColor);
//padding
    padding: 20px;
    gap: 14px;
// smaller than 375px
    @media screen and (max-width: 375px) {
        justify-content: center;
    }
`