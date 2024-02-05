import { Field, Formik, Form } from 'formik';
import icons from '../../../../src/images/sprite.svg';

import {
  Header,
  SvgCloseBtn,
  IconsHeader,
  IconsContainer,
} from './CreateBoardForm.styled';

// const BoardFormSchema = Yup.object().shape({
//   topic: Yup.string().min(2, 'Too short').required('This field is required!'),
// });

const RadioBtnsFilterForm = ({ closeFilterModalWindow }) => {
  return (
    <Formik
      initialValues={{
        color: 'without-property',
      }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        closeFilterModalWindow();
      }}
    >
      <Form>
        <Header>Label color</Header>
        <IconsHeader onClick={null}>Show all</IconsHeader>
        <SvgCloseBtn type="button" onClick={closeFilterModalWindow}>
          <svg>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </SvgCloseBtn>

        <IconsContainer>
          <label>
            <Field
              className="icons-filter"
              type="radio"
              name="color"
              value="without-property"
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
              name="color"
              value="low"
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
              name="color"
              value="medium"
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
              name="color"
              value="high"
            />
            <svg width="14px" height="14px">
              <use href={`${icons}#icon-project`}></use>
            </svg>
            High
          </label>
        </IconsContainer>
      </Form>
    </Formik>
  );
};

export default RadioBtnsFilterForm;
