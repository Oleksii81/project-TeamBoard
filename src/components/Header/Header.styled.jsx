import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  //staying ate the top of page and locating elements
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  margin-left: auto;
  margin-right: auto;

  //colors
  background: var(--headerBgColor);
  //padding
  padding: 20px;
  gap: 14px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 68px;
  }
  @media screen and (min-width: 768px) {
    width: calc(-260px + 100vw);
    left: 260px;
  }
`;