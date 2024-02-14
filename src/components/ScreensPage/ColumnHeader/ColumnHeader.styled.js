import styled from "styled-components";

export const ColumnHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    padding: 20px;
    width: 334px;
    height: 56px;
    border-radius: 8px;
    margin-bottom: 14px;
    background-color: var(--headerBgColor);
    color: var(--primaryTextColor);
`

export const ColumnHeaderText = styled.p`
    left: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--primaryTextColor);
`
export const ColumnHeaderButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const ColumnHeaderIcon = styled.svg`
    width: 16px;
     height: 16px;
     fill: transparent;
     stroke: var(--iconColor);
`

