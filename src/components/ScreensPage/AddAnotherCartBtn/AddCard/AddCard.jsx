//import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//import Demo from '../../../ScreensPage/ColumnHeader/EditModal/Calendar';
//import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
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
import CalendarComponent from 'components/Modals/Calendar/CalendarComponent';

const AddCard = ({ closeModalWindow, idColumn }) => {
  const [selectedRadioValue, setSelectedRadioValue] = useState('');
  const [selectedDate, setselectedDate] = useState('');
  const dispatch = useDispatch();

  return (
    <EditCardWrapper>
      <EditCardTitle>Add Card</EditCardTitle>
      <Formik
        initialValues={{
          title: '',
          description: '',
          priority: 'without',
          deadline: 'no deadline',
        }}
        validationSchema={Yup.object({
          title: Yup.string().required('Title is required'),
          description: Yup.string().required('Description is required'),
        })}
        onSubmit={(values, actions) => {
          if (selectedRadioValue) {
            values.priority = selectedRadioValue;
          }
          if (selectedDate) {
            values.deadline = selectedDate.toString();
          }
          dispatch(addCard({ idColumn, form: values }))
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
            <Field
              as={RadioButtons}
              name="priority"
              onRadioChange={setSelectedRadioValue}
            />
          </div>
          <EditCardLabel>Deadline</EditCardLabel>

          <Field
            name="deadline"
            as={CalendarComponent}
            onSelectedDate={setselectedDate}
          />

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
