import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 14px 20px 60px;
  /* background-color: #1f1f1f; //забрати потім */
  height: 100%;
  overflow-x: auto;

  @media screen and (max-width: 374px) {
    max-width: 375px;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding: 26px 32px 96px;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 20px 36px;
    width: 1180px;
  }
`;
