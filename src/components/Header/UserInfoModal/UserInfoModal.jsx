import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { updateUser } from '../../../redux/auth/authOperations';
import { getUserData } from '../../../redux/auth/authSelectors';
import { SpriteSVG } from 'assets/icons/SvgIcons';
import userFoto from 'assets/img/userWhite.png';
import ModalEditUser from 'components/Modals/ModalEditUser/ModalEditUser';
import {
  StyledBtnClose,
  StyledBtnEdit,
  StyledBtnSave,
  StyledInputAdd,
  StyledModal,
  StyledModalForm,
  StyledModalHeader,
  StyledModalInput,
  StyledSvgWrapper,
  StyledUserFoto,
  EditProfileText,
  StyledError,
  StyledErrorMail,
  StyledErrorName,
} from './UserInfoModal.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  userEmail: Yup.string().email('Invalid email'),
  userPassword: Yup.string().min(8, 'Min 8'),
});

export const UserInfoModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { name, email, avatarURL } = useSelector(getUserData);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = file => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }

    setSelectedFile(file);
  };

  const onFileChange = event => {
    const file = event.target.files[0];
    handleFileChange(file);
  };
const formik = useFormik({
    initialValues: { userName: '', userEmail: '', userPassword: '' },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        const formData = new FormData();
        if (selectedFile) {
          formData.append('avatar', selectedFile);
        }
        if (values.userName) {
          formData.append('userName', values.userName);
        }
        if (values.userEmail) {
          formData.append('email', values.userEmail);
        }
        if (values.userPassword) {
          formData.append('password', values.userPassword);
        }
        dispatch(updateUser(formData));
        onClose(); // Закрываем модальное окно после успешной отправки данных
      } catch (error) {
        console.error('Error updating user', error.message);
      }
    },
  });

  return (
    <ModalEditUser onClose={onClose}>
      <StyledModal>
        <StyledBtnClose onClick={onClose}>
          <SpriteSVG name="close" />
        </StyledBtnClose>
        <EditProfileText>Edit profile</EditProfileText>
        <StyledModalHeader>
          <StyledUserFoto
            src={previewImage || avatarURL || userFoto}
            alt={previewImage ? 'Preview' : avatarURL ? 'Foto' : 'Default foto'}
          />

          <StyledInputAdd type="file" onChange={onFileChange} />
          <StyledSvgWrapper
            onClick={() => document.querySelector('input[type=file]').click()}
          >
            <SpriteSVG name="add-modal-photo" />
          </StyledSvgWrapper>
        </StyledModalHeader>
        <StyledModalForm onSubmit={formik.handleSubmit}>
          <StyledModalInput
            name="userName"
            value={formik.values.userName || name}
            onChange={formik.handleChange}
          />
          {formik.errors.userName && formik.touched.userName && (
            <StyledErrorName>{formik.errors.userName}</StyledErrorName>
          )}
          <StyledModalInput
            name="userEmail"
            value={formik.values.userEmail || email}
            onChange={formik.handleChange}
          />
          {formik.errors.userEmail && formik.touched.userEmail && (
            <StyledErrorMail>{formik.errors.userEmail}</StyledErrorMail>
          )}
          <div style={{ position: 'relative' }}>
            <StyledModalInput
              name="userPassword"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.userPassword || ''}
              onChange={formik.handleChange}
            />
            <StyledBtnEdit
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <SpriteSVG name="eye1" />
            </StyledBtnEdit>
          </div>
          {formik.errors.userPassword && formik.touched.userPassword && (
            <StyledError>{formik.errors.userPassword}</StyledError>
          )}
          <StyledBtnSave type="submit" onClick={formik.handleSubmit}>
            Send
          </StyledBtnSave>
        </StyledModalForm>
      </StyledModal>
    </ModalEditUser>
  );
};

UserInfoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
