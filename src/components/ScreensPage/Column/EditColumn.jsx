//import { useSelector, useDispatch } from 'react-redux';
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import 'react-toastify/dist/ReactToastify.css';

import {
    EditCardWrapper,
    EditCardTitle,
    EditCardInput,
    EditCardButton,
} from "../ColumnHeader/EditModal/EditColumn.styled"
import { SubmitSvgWrapper, SvgCloseBtn } from 'components/ScreensPage/AddColumnForm/AddColumnForm.styled';
import icons from '../../../images/sprite.svg'
import { editColumn } from "../../../redux/task/taskOperations";
import { useDispatch } from "react-redux";


const EditColumn = ({ closeModalWindow, id, idBoard }) => {

  const dispatch = useDispatch();
   return (
    <EditCardWrapper>
      <EditCardTitle>Edit Column</EditCardTitle>
      <Formik
        initialValues={{
                   title: "",
               }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
        })}
             onSubmit ={(values, actions) => {
        dispatch(editColumn({ idBoard: idBoard, id: id, body: values }))
          .unwrap()
          .then()
          .catch(error => error.message);
              actions.resetForm();
              console.log(id)
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
            <Field as={EditCardInput }type="text" name="title" placeholder="Title"/>
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
