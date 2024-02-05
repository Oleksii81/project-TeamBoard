import { useState } from 'react';
import RadioBtnsFilterForm from '../../../../src/components/ScreensPage/RadioBrnsFilterForm/RadioBtnsFilterForm';

import icons from '../../../../src/images/sprite.svg';
import {
  Container,
  FilterText,
  ModalWrapper,
  WindowContainer,
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
    <ModalWrapper>
      <Container>
        <svg width="16px" height="16px">
          <use href={`${icons}#icon-filter`}></use>
        </svg>
        <FilterText onClick={toggleWindow}>Filters</FilterText>
      </Container>
      {window && (
        <WindowContainer>
          <button type="button">
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
          <h3>Filters</h3>
          <RadioBtnsFilterForm closeFilterModalWindow={closeFilterModal} />
        </WindowContainer>
      )}
    </ModalWrapper>
  );
};

export default Filter;
