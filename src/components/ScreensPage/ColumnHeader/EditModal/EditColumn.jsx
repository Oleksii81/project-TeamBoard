import { useSelector, useDispatch } from 'react-redux';
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    EditCardWrapper,
    EditCardTitle,
    EditCardInput,
    EditCardTextArea,
    EditCardLabel,
    EditCardButton,
    EditCardSvg
} from "./EditColumn.styled"
import { SubmitSvgWrapper, SvgCloseBtn } from 'components/ScreensPage/AddColumnForm/AddColumnForm.styled';
import icons from '../../../../images/sprite.svg'
import { RadioButtons } from 'components/ScreensPage/RadioBrnsFilterForm/RadioButtons';


const EditColumn = ({ closeModalWindow }) => {
  
   return (
    <EditCardWrapper>
      <EditCardTitle>My Form</EditCardTitle>
      <Formik
        initialValues={{
                   taskName: "",
                   message: ""
               }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email address").required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
            <SvgCloseBtn type="button" onClick={closeModalWindow}>
            <svg>
                <use href={`${icons}#icon-close`}></use>
            </svg>
        </SvgCloseBtn>
          <div>
            <Field as={EditCardInput }type="text" name="taskName" placeholder="Title"/>
            <ErrorMessage name="taskName" />
          </div>
          <div>
            <Field as={EditCardTextArea} name="message" placeholder="Description"/>
            <ErrorMessage name="message" />
                   </div>
                   <EditCardLabel>Label color</EditCardLabel>
                   <div style={{ marginLeft: '10px' , marginBottom: '14px'}}>
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

export default EditColumn;
