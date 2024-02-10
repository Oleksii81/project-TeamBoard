import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import icons from '../../../images/sprite.svg';
import {
  ModalContainerHelp,
  FormHelp,
  InputHelp,
  ModalTitleHelp,
  CommentHelp,
  BtnSendHelp,
  IconHelp,
} from '../../../components/Modals/ModalNeedHelp/ModalNeedHelp.styled';

import { fetchHelpApi } from '../../../services/backApi';
import { getUserEmail } from '../../../redux/auth/authSelectors';


const NeedHelpSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  comment: Yup.string().required('Comment is required'),
});


const FormNeedHelp = ({ onClose }) => {
  const userEmail = useSelector(getUserEmail);

  return (
    <ModalContainerHelp>
      <ModalTitleHelp>Need help</ModalTitleHelp>
      
       <IconHelp onClose={onClose}>
        <use href={`${icons}#icon-close`}></use>
      </IconHelp>

      <Formik
        initialValues={{
          email: `${userEmail}`,
          comment: '',
        }}
        validationSchema={NeedHelpSchema}
        onSubmit={(values, {resetForm}) => { 
          fetchHelpApi(values);
          resetForm();
          onClose();
        }}
      >
        {({ handleChange, values }) =>(
          <FormHelp>
            <InputHelp
              type="email"
              name="email"
              required
              placeholder="Email address"
              onChange={handleChange}
              value={values.email}
            />
            <CommentHelp
              type="comment"
              name="comment"
              required
              placeholder="Comment"
              onChange={handleChange}
            />
            <BtnSendHelp type="submit">Send</BtnSendHelp>
          </FormHelp>
        )}
      </Formik>

     
    </ModalContainerHelp>
  );
};

export default FormNeedHelp;