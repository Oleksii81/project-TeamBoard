import styled from 'styled-components';

export const ItemContainer = styled.div`
  height: 61px;
  padding: 20px 24px;
  margin-bottom: 4px;

  .active {
    background: #1f1f1f;
    opacity: 0.4;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  margin-left: 8px;

  color: rgba(255, 255, 255, 0.5);

  .active {
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const CurrentLine = styled.div`
  border-radius: 4px 0 0 4px;
  width: 4px;
  height: 61px;

  background: #bedbb0;
`;
