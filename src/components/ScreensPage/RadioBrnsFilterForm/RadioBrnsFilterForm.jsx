import { Field, Formik } from 'formik';
import icons from '../../../../src/images/sprite.svg';
import { useState } from 'react';

import {
  Header,
  IconsHeader,
  IconsContainer,
  FormFilter,
  FormHeadersContainer,
} from './RadioBtnsFilterForm.styled';

const RadioBtnsFilterForm = ({ priority }) => {
  const [selectedPriority, setSelectedPriority] = useState('');

  const onFilterChange = value => {
    setSelectedPriority(value);
    console.log(value);
  };

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
            <IconsHeader onClick={setSelectedPriority('')}>
              Show all
            </IconsHeader>
          </FormHeadersContainer>
          <IconsContainer priority={priority}>
            <label>
              <Field
                className="icons-filter"
                type="radio"
                name="priority"
                value="without-property"
                checked={values.priority === 'without-property'}
                onChange={() => onFilterChange('without-property')}
              />
              {/* <svg width="14px" height="14px">
              <use href={`${icons}#icon-project`}></use>
            </svg> */}
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
              {/* <svg width="14px" height="14px">
              <use href={`${icons}#icon-project`}></use>
            </svg> */}
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
              {/* <svg width="14px" height="14px">
              <use href={`${icons}#icon-project`}></use>
            </svg> */}
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
              {/* <svg width="14px" height="14px">
              <use href={`${icons}#icon-project`}></use>
            </svg> */}
              High
            </label>
          </IconsContainer>
        </FormFilter>
      )}
    </Formik>
  );
};

export default RadioBtnsFilterForm;
