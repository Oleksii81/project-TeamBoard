import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import {
  EditCardWrapper,
  EditCardTitle,
  EditCardInput,
  EditCardButton,
} from '../ColumnHeader/EditModal/EditColumn.styled';
import {
  SubmitSvgWrapper,
  SvgCloseBtn,
} from 'components/ScreensPage/AddColumnForm/AddColumnForm.styled';
import icons from '../../../images/sprite.svg';
import { editColumn } from '../../../redux/task/taskOperations';
import { useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';

const EditColumn = ({ closeModalWindow, id, idBoard, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  return (
    <EditCardWrapper>
      <EditCardTitle>Edit Column</EditCardTitle>
      <Formik
        initialValues={{
          title: title,
        }}
        validationSchema={Yup.object({
          title: Yup.string().required('Title is required'),
        })}
        onSubmit={(values, actions) => {
          setIsLoading(true);
          dispatch(editColumn({ idBoard: idBoard, id: id, body: values }))
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
            />
            <ErrorMessage name="title" />
          </div>
          <EditCardButton type="submit">
            <SubmitSvgWrapper>
              <svg width="28px" height="28px">
                <use href={`${icons}#icon-plus`}></use>
              </svg>
            </SubmitSvgWrapper>
            Add
          </EditCardButton>
        </Form>
      </Formik>
    </EditCardWrapper>
  );
};

export default EditColumn;
