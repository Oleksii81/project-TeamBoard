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
import { editCard } from '../../../../redux/task/taskOperations';
import Loader from 'components/Loader/Loader';




import CalendarComponent from 'components/Modals/Calendar/CalendarComponent';
import { useState } from 'react';

const EditCard = ({ closeModalWindow, id, columnId, title, description }) => {
  const [selectedRadioValue, setSelectedRadioValue] = useState('');
  const [selectedDate, setselectedDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await getOneCardApi({
          idColumn: columnId,
          idCard: id,
        });
        setSelectedRadioValue(response.data.priority);
        setselectedDate(response.data.deadline);
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
          title: title,
          description: description,
          priority: 'without',
          deadline: 'no deadline',
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(3, 'must be at least 3 characters')
            .required('Title is required'),
          description: Yup.string()
            .min(6, 'must be at lease 6 characters')
            .required('Description is required'),
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

          setIsLoading(true);
          dispatch(editCard({ idColumn: columnId, id: id, body }))
            .unwrap()
            .then(() => {
              actions.resetForm();
              closeModalWindow();
            })
            .catch(error => error.message)
            .finally(() => {
              setIsLoading(false);
            });
        }}
      >
        <Form>
        {isLoading && <Loader />}
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
            ></Field>
            <ErrorMessage name="title" />
          </div>
          <div>
            <Field
              as={EditCardTextArea}
              name="description"
              placeholder="description"
              // validateOnChange={true}
            />
            {/* <ErrorMessage name="description" /> */}
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
