//import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import Demo from '../../../ScreensPage/ColumnHeader/EditModal/Calendar';

//import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getOneCardApi } from '../../../../services/backApi';
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
import { editCard, /*getOneCard*/ } from '../../../../redux/task/taskOperations';
import CalendarComponent from 'components/Modals/Calendar/CalendarComponent';
import { useState } from 'react';

const EditCard = ({ closeModalWindow, id, columnId }) => {
  // const [selectedTitle, setselectedTitle] = useState('');
  // const [selectedDescription, setselectedDescription] = useState('');
  const [selectedRadioValue, setSelectedRadioValue] = useState('');
  const [selectedDate, setselectedDate] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await getOneCardApi({
          idColumn: columnId,
          idCard: id,
        });
        console.log(response.data);
        setSelectedRadioValue(response.data.priority);
        setselectedDate(response.data.deadline);
        // setselectedDescription(response.data.description);
        // setselectedTitle(response.data.title);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardData();
  }, [id, columnId]);
  return (
    <EditCardWrapper>
      <EditCardTitle>Edit card</EditCardTitle>
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
          const body = {};
          if (values.title) {
            body.title = values.title;
          }
          if (values.description) {
            body.description = values.description;
          }
          if (values.priority) {
            body.priority = values.priority;
          }
          if (values.deadline) {
            body.deadline = values.deadline;
          }
          console.log(closeModalWindow, id, columnId);
          console.log(values);
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
            >
              {/* {selectedTitle} */}
            </Field>
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

export default EditCard;
