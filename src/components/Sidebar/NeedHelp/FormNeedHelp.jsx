import { Formik } from 'formik';
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
import { fetchHelpApi } from 'services/backApi';

const NeedHelpSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  comment: Yup.string().required('Comment is required'),
});

const FormNeedHelp = ({ closeModal, handleSubmit, userEmail }) => {
  return (
    <ModalContainerHelp>
      <ModalTitleHelp>Need help</ModalTitleHelp>

      <IconHelp onClick={closeModal}>
        <use href={`${icons}#icon-close`}></use>
      </IconHelp>

      <Formik
        initialValues={{
          email: userEmail,
          comment: '',
        }}
        validationSchema={NeedHelpSchema}
        onSubmit={(values, {resetForm}) => {
         fetchHelpApi(values);
         resetForm();
          closeModal();
        }}
      >
        {(
          <FormHelp onSubmit={handleSubmit}>
            <InputHelp
              type="email"
              name="email"
              required
              placeholder="Email address"
            />
            <CommentHelp
              type="comment"
              name="comment"
              required
              placeholder="Comment"
            />
            <BtnSendHelp type="submit">Send</BtnSendHelp>
          </FormHelp>
        )}
      </Formik>
    </ModalContainerHelp>
  );
};

export default FormNeedHelp;
