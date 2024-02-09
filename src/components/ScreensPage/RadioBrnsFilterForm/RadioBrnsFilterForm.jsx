import { Field, Formik } from 'formik';
//import icons from '../../../../src/images/sprite.svg';
//import { useState } from 'react';

import {
  Header,
  IconsHeader,
  IconsContainer,
  FormFilter,
  FormHeadersContainer,
} from './RadioBtnsFilterForm.styled';

const RadioBtnsFilterForm = ({ onSelect, setFilterByPriority }) => {
  const removeFilters = () => {
    setFilterByPriority('');
  };
  return (
    <Formik
      initialValues={{
        priority: '',
      }}
    >
      {({ values }) => (
        <FormFilter>
          <FormHeadersContainer>
            <Header>Label color</Header>
            <IconsHeader onClick={removeFilters}>Show all</IconsHeader>
          </FormHeadersContainer>
          <IconsContainer>
            <label>
              <Field
                className="icons-filter"
                type="radio"
                name="priority"
                value="without"
                // checked={values.priority === 'without-property'}
                onChange={() => onSelect('without')}
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
                // checked={values.priority === 'low'}
                onChange={() => onSelect('low')}
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
                // checked={values.priority === 'medium'}
                onChange={() => onSelect('medium')}
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
                // checked={values.priority === 'high'}
                onChange={() => onSelect('high')}
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
