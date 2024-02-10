import { useState } from 'react';
import RadioBtnsFilterForm from '../../../../src/components/ScreensPage/RadioBrnsFilterForm/RadioBrnsFilterForm';

import icons from '../../../../src/images/sprite.svg';
import {
  Container,
  FilterText,
  WindowContainer,
  FilerModalBtn,
  FilterFormHeading,
} from './Filter.styled';

const Filter = () => {
  const [window, setWindow] = useState(false);
  

  const toggleWindow = () => {
    setWindow(!window);
  };

  const closeFilterModal = () => {
    setWindow(false);
  };
  return (
    <>
      <Container>
        <svg width="16px" height="16px" fill='transparent'> 
          <use href={`${icons}#icon-filter`}></use>
        </svg>
        <FilterText onClick={toggleWindow}>Filters</FilterText>
      </Container>
      {window && (
        <WindowContainer>
          <FilerModalBtn type="button" onClick={closeFilterModal}>
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </FilerModalBtn>
          <FilterFormHeading>Filters</FilterFormHeading>
          <RadioBtnsFilterForm/>
        </WindowContainer>
      )}
    </>
  );
};

export default Filter;
