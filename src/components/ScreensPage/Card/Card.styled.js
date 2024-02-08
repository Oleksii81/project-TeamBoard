import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  &:not(:first-of-type) {
    margin-top: 10px;
  }
  position: relative;
  width: 334px;
  height: 130px;
  margin-right: 5px;
  padding: 15px 15px 5px 15px;
  border-radius: 8px;
  background-color: var(--primary-card-background-color);
  border-left: 4px solid
    ${props => {
      if (props.priority === 'Low') return '#8fa1d0';
      if (props.priority === 'Medium') return '#E09CB5';
      if (props.priority === 'High') return '#BEDBB0';
      return '#5b5b5b';
    }};
`;

export const PriorityWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h4`
  margin-bottom: 10px;
  color: var(--primary-heading-color);
  font-size: 14px;
  font-weight: 600;
`;

export const SubTitle = styled.p`
  max-width: 290px;
  height: 35px;
  color: var(--primary-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  text-overflow: ellipsis;
  overflow: hidden;
`;

export const PrioryTitle = styled.p`
  margin: 0;
  color: var(----secondary-deadline-color);
  font-size: 8px;
  font-weight: 400;
`;

export const PriorySubTitle = styled.h5`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  color: var(--primary-heading-color);
  font-size: 10px;
  font-weight: 400;
`;

export const DeadlineSubTitle = styled.h5`
  margin: 0;
  color: var(--primary-heading-color);
  font-weight: 400;
  font-size: 10px;
`;

export const DeadlineTitle = styled.p`
  margin-bottom: 10px;
  color: var(--secondary-deadline-color);
  font-weight: 400;
  font-size: 8px;
`;

export const Ball = styled.hr`
  width: 12px;
  height: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 50%;
  background-color: #8fa1d0;
  background-color: var(--primary-priority-color);
  background-color: ${props => {
    if (props.priority === 'Low') return '#8fa1d0';
    if (props.priority === 'Medium') return '#E09CB5';
    if (props.priority === 'High') return '#BEDBB0';
    return '#535353';
  }};
`;

export const Line = styled.hr`
  margin: 5px 0;
  border: 1px solid #232323;
  border: 1px solid var(--secondary-line-color);
`;

export const Icon = styled.svg`
  cursor: pointer;
  transition: box-shadow 0.3s;
  stroke: var(--tertiary-priority-color);
  fill: none;
  &:hover,
  &:focus {
    stroke: var(--primary-button-color);
    filter: drop-shadow(0 0 5px var(--primary-button-color));
  }
`;

export const Bell = styled.svg`
  cursor: pointer;
  transition: box-shadow 0.3s;
  stroke: var(--primary-button-color);
  fill: none;
  filter: drop-shadow(0 0 5px var(--primary-button-color));
  &:hover,
  &:focus {
    stroke: #b2fc8d;
    filter: drop-shadow(0 0 5px var #b2fc8d);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: ${props => (props.isEqualDate ? '5px' : '5px')};
  top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
