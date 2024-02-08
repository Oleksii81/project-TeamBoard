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

const NeedHelpSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  comment: Yup.string().required('Comment is required'),
});

const FormNeedHelp = ({ closeModal }) => {
  return (
    <ModalContainerHelp>
      <ModalTitleHelp>Need help</ModalTitleHelp>
      
       <IconHelp onClick={closeModal}>
        <use href={`${icons}#icon-close`}></use>
      </IconHelp>

      <Formik
        initialValues={{
          email: '',
          comment: '',
        }}
        validationSchema={NeedHelpSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          closeModal();
        }}
      >
        {({ handleSubmit }) => (
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