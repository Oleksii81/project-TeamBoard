import styled from "styled-components"



export const EditCardWrapper = styled.div`


`
export const EditCardTitle = styled.p`
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.02em;
    color: var(--primaryTextColor);
    margin-bottom: 24px;
`

export const EditCardInput = styled.input`
    margin-bottom: 14px;
    border: 1px solid var(--activeBorder);
    border-radius: 8px;
    width: 302px;
    height: 49px;
    box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
    background: transparent;
    color: var(--primaryTextColor);
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 18px;
`

export const EditCardTextArea = styled.textarea`
    border: 1px solid var(--activeBorder);
    border-radius: 8px;
    width: 302px;
    height: 154px;
    resize: none;
    margin-bottom: 24px;
    box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
    background: transparent;
    color: var(--primaryTextColor);
    padding-top: 14px;
    padding-left: 18px;
`

export const EditCardLabel = styled.p`
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: var(--popupColor);
    margin-bottom: 4px;
`

export const EditCardButton = styled.button`
    border-radius: 8px;
    border-color: transparent;
    width: 302px;
    height: 49px;
    background: var(--addCardButtonBackground);
    color: var(--addCardButtonColor); 
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    svg {
    stroke-width: 1px;
    stroke: var(--addPlusIconColor);
  }
`