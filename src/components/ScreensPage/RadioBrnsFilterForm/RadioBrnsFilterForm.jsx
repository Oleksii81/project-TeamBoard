import { Field, Formik } from 'formik';

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
              onChange={() => onSelect('without')}
            />
            Without property
          </label>
          <label>
            <Field
              className="icons-filter"
              type="radio"
              name="priority"
              value="low"
              onChange={() => onSelect('low')}
            />
            Low
          </label>
          <label>
            <Field
              className="icons-filter"
              type="radio"
              name="priority"
              value="medium"
              onChange={() => onSelect('medium')}
            />
            Medium
          </label>
          <label>
            <Field
              className="icons-filter"
              type="radio"
              name="priority"
              value="high"
              onChange={() => onSelect('high')}
            />
            High
          </label>
        </IconsContainer>
      </FormFilter>
    </Formik>
  );
};

export default RadioBtnsFilterForm;
