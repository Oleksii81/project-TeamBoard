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
} from '../../ColumnHeader/EditModal/EditColumn.styled';
import {
  SubmitSvgWrapper,
  SvgCloseBtn,
} from 'components/ScreensPage/AddColumnForm/AddColumnForm.styled';
import icons from '../../../../images/sprite.svg';
import { RadioButtons } from 'components/ScreensPage/RadioBrnsFilterForm/RadioButtons';
import { useDispatch } from 'react-redux';
import { addCard } from '../../../../redux/task/taskOperations';

const AddCard = ({ closeModalWindow, idColumn }) => {
  const date = new Date();
  const dateNow = date.toLocaleDateString();
  console.log(dateNow);
  const dispatch = useDispatch();
  return (
    <EditCardWrapper>
      <EditCardTitle>Add Card</EditCardTitle>
      <Formik
        initialValues={{
          title: '',
          description: '',
          priority: 'without',
          deadline: dateNow,
        }}
        validationSchema={Yup.object({
          title: Yup.string().required('Title is required'),
          description: Yup.string().required('Description is required'),
        })}
        onSubmit={(values, actions) => {
          const { title, description } = values; // Assuming your Field names are cardTitle and cardDescr
          const form = {
            title,
            description,
            priority: 'without',
            deadline: dateNow,
          };
          console.log({ ...form });
          console.log(idColumn);
          dispatch(addCard({ idColumn, form }))
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
            <ErrorMessage name="taskName" />
          </div>
          <div>
            <Field
              as={EditCardTextArea}
              name="description"
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

export default AddCard;
