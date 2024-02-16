//import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import Demo from '../../../ScreensPage/ColumnHeader/EditModal/Calendar';

//import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  EditCardWrapper,
  EditCardTitle,
  EditCardInput,
  EditCardTextArea,
  EditCardLabel,
  EditCardButton,
} from './EditColumn.styled';
import {
  SubmitSvgWrapper,
  SvgCloseBtn,
} from 'components/ScreensPage/AddColumnForm/AddColumnForm.styled';
import icons from '../../../../images/sprite.svg';
import { RadioButtons } from 'components/ScreensPage/RadioBrnsFilterForm/RadioButtons';
import { useDispatch } from 'react-redux';
import { editCard } from '../../../../redux/task/taskOperations';

const EditCard = ({ closeModalWindow, id, columnId }) => {
  const dispatch = useDispatch();

  return (
    <EditCardWrapper>
      <EditCardTitle>My Form</EditCardTitle>
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string(),
          description: Yup.string(),
        })}
        onSubmit={(values, actions) => {
          const body = {};
          if (values.title) {
            body.title = values.title;
          }
          if (values.description) {
            body.description = values.description;
          }
          console.log(body);
          dispatch(editCard({ idColumn: columnId, id: id, body }))
            .unwrap()
            .then()
            .catch(error => error.message);
          actions.resetForm();
          closeModalWindow();
        }}
      >
        <Form>
          <SvgCloseBtn type="button" onClick={closeModalWindow}>
            <svg>
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </SvgCloseBtn>
          <div>
            <Field
              as={EditCardInput}
              type="text"
              name="title"
              placeholder="Title"
            />
            <ErrorMessage name="title" />
          </div>
          <div>
            <Field
              as={EditCardTextArea}
              name="description"
              placeholder="Description"
            />
            <ErrorMessage name="description" />
          </div>
          <EditCardLabel>Label color</EditCardLabel>
          <div style={{ marginLeft: '10px', marginBottom: '14px' }}>
            <RadioButtons />
          </div>
          <EditCardLabel>Deadline</EditCardLabel>

          <EditCardButton type="submit">
            <SubmitSvgWrapper>
              <svg width="28px" height="28px">
                <use href={`${icons}#icon-plus`}></use>
              </svg>
            </SubmitSvgWrapper>
            Submit
          </EditCardButton>
        </Form>
      </Formik>
    </EditCardWrapper>
  );
};

export default EditCard;