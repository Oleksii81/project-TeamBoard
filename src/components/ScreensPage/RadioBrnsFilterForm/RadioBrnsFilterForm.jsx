import { Formik } from 'formik';
//import icons from '../../../../src/images/sprite.svg';
import { useState } from 'react';
import { Radio, FormControlLabel, RadioGroup, FormControl } from '@mui/material';


import {
  Header,
 // IconsHeader,
  // IconsContainer,
  FormFilter,
  FormHeadersContainer,
} from './RadioBtnsFilterForm.styled';

const buttonColor = [
  { value: 'Without priority', color: '#FFFFFF' },
  { value: 'Low', color: '#8FA1D0' },
  { value: 'Medium', color: '#E09CB5' },
  {value: 'High', color: '#BEDBB0'}
]

const RadioBtnsFilterForm = ({ priority }) => {
  //const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedValue, setSelectedValue] = useState('')
 
  const primaryTextColor = `var(--primaryTextColor)`;


/*   const onFilterChange = value => {
   // setSelectedPriority(value);
    console.log(value);
  }; */
  const onRadioChange = event => {
    const { value } = event.target;
    console.log(value);
    setSelectedValue(value);
  }

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
        {/*    <IconsHeader onClick={setSelectedPriority('')}> 
              Show all
            </IconsHeader> */}
          </FormHeadersContainer>
          <FormControl>
          <RadioGroup value={selectedValue}
          onChange={onRadioChange}>
          {buttonColor.map((button) => (
            <FormControlLabel
            key={button.value}
            sx={{
              color: 'red',
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
                marginBottom: 1,
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
          {/* <IconsContainer priority={priority}>
            <label>
              <Field
                className="icons-filter"
                type="radio"
                name="priority"
                value="without-property"
                checked={values.priority === 'without-property'}
                onChange={() => onFilterChange('without-property')}
              />
              
               <svg width="14px" height="14px">
              <use href={`${icons}#icon-project`}></use>
            </svg> 
              Without property
            </label>
            <label>
              <Field
                className="icons-filter"
                type="radio"
                name="priority"
                value="low"
                checked={values.priority === 'low'}
                onChange={() => onFilterChange('low')}
              />
              <svg width="14px" height="14px">
              <use href={`${icons}#icon-project`}></use>
            </svg>
              Low
            </label>
            <label>
              <Field
                className="icons-filter"
                type="radio"
                name="priority"
                value="medium"
                checked={values.priority === 'medium'}
                onChange={() => onFilterChange('medium')}
              />
               <svg width="14px" height="14px">
              <use href={`${icons}#icon-project`}></use>
            </svg> 
              Medium
            </label>
            <label>
              <Field
                className="icons-filter"
                type="radio"
                name="priority"
                value="high"
                checked={values.priority === 'high'}
                onChange={() => onFilterChange('high')}
              />
              <svg width="14px" height="14px">
              <use href={`${icons}#icon-project`}></use>
            </svg>
              High
            </label>
          </IconsContainer> */}
        </FormFilter>
      )}
    </Formik>
  );
};

export default RadioBtnsFilterForm;
