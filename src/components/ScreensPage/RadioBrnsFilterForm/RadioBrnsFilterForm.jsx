import { Formik } from 'formik';
//import icons from '../../../../src/images/sprite.svg';
// import { useState } from 'react';
import {
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
} from '@mui/material';

import {
  Header,
  IconsHeader,
  // IconsContainer,
  FormFilter,
  FormHeadersContainer,
} from './RadioBtnsFilterForm.styled';

const buttonColor = [
  { value: 'without', color: 'var(--calendarWithoutColor)' },
  { value: 'low', color: '#8FA1D0' },
  { value: 'medium', color: '#E09CB5' },
  { value: 'high', color: '#BEDBB0' },
];

const RadioBtnsFilterForm = ({
  onRadioChange,
  removeFilters,
  selectedValue,
}) => {
  const primaryTextColor = `var(--primaryTextColor)`;

  return (
    <Formik
      initialValues={{
        priority: '',
      }}
    >
      {({ values, handleChange }) => (
        <FormFilter>
          <FormHeadersContainer>
            <Header>Label color</Header>
            <IconsHeader onClick={removeFilters}>Show all</IconsHeader>
          </FormHeadersContainer>
          <FormControl>
            <RadioGroup value={selectedValue} onChange={onRadioChange}>
              {buttonColor.map(button => (
                <FormControlLabel
                  key={button.value}
                  sx={{
                    color: 'red',
                    marginBottom: '8px',
                    '& .Mui-checked.MuiRadio-root': {
                      color: button.color,
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 14,
                    },
                    '& .MuiFormControlLabel-label': {
                      fontSize: 12,
                      letterSpacing: '0.02em',
                    },
                    '& .MuiButtonBase-root.MuiRadio-root': {
                      color: button.color,
                      padding: 0,
                      backgroundColor:
                        selectedValue === button.value
                          ? 'transparent'
                          : button.color,
                    },
                    '& .MuiTypography-root': {
                      marginLeft: 1,
                      color:
                        selectedValue === button.value
                          ? primaryTextColor
                          : 'var(--popupTextColor)',
                    },
                  }}
                  value={button.value}
                  control={<Radio />}
                  label={button.value}
                  onChange={onRadioChange}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </FormFilter>
      )}
    </Formik>
  );
};

export default RadioBtnsFilterForm;
