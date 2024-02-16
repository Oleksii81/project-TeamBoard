//import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Demo from '../../../ScreensPage/ColumnHeader/EditModal/Calendar';

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
      <EditCardTitle>Edit card</EditCardTitle>
      <Formik
        initialValues={{
          taskName: '',
          message: '',
        }}
        validationSchema={Yup.object({
          taskName: Yup.string().required('Title is required'),
          message: Yup.string().required('Description is required'),
        })}
        onSubmit={(values, actions) => {
          dispatch(editCard({ idColumn: columnId, id: id, body: values }))
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
              name="taskName"
              placeholder="Title"
            />
            <ErrorMessage name="taskName" />
          </div>
          <div>
            <Field
              as={EditCardTextArea}
              name="message"
              placeholder="Description"
            />
            <ErrorMessage name="message" />
          </div>
          <EditCardLabel>Label color</EditCardLabel>
          <div style={{ marginLeft: '10px', marginBottom: '14px' }}>
            <RadioButtons />
          </div>
          <EditCardLabel>Deadline</EditCardLabel>
          <Demo />

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
