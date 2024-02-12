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


const FormNeedHelp = ({ closeModal }) => {
  const userEmail = useSelector(getUserEmail);

  const handleSubmit = (values, { resetForm }) => {
    fetchHelpApi(values);
    resetForm();
    closeModal();
  };

  return (
    <ModalContainerHelp>
      <ModalTitleHelp>Need help</ModalTitleHelp>
      
       <IconHelp onClick={closeModal}>
        <use href={`${icons}#icon-close`}></use>
      </IconHelp>

      <Formik
        initialValues={{
          email: `${userEmail}`,
          comment: '',
        }}
        validationSchema={NeedHelpSchema}
        onSubmit={handleSubmit}
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