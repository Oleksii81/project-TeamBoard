import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { updateUser } from '../../../redux/auth/authOperations';
import { getUserData } from '../../../redux/auth/authSelectors';
import { SpriteSVG } from 'assets/icons/SvgIcons';
import userFoto from 'assets/img/userWhite.png';
import ModalEditUser from 'components/Modals/ModalEditUser/ModalEditUser';
import {
  Ellipse222,
  Ellipse224,
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
} from './UserInfoModal.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  userName: Yup.string().min(5, 'Min 5'),
  userEmail: Yup.string().email('Invalid email'),
  userPassword: Yup.string().min(8, 'Min 8'),
});

export const UserInfoModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { username, email, avatar } = useSelector(getUserData);
  const [selectedFile, setSelectedFile] = useState(null);
  const [changedName] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [changedPassword, setChangedPassword] = useState(null);
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

  const onUpload = async event => {
    if (event.target.type === 'file') {
      const file = event.target.files[0];
      handleFileChange(file);
      return;
    }

    event.preventDefault();

    const formData = new FormData();
    formData.append('username', changedName || username);
    formData.append('avatar', selectedFile);
    formData.append('password', changedPassword || '');

    dispatch(updateUser(formData))
      .unwrap()
      .then(() => {
        onClose();
      })
      .catch(error => {
        console.error('Error updating user', error.message);
      });
  };
  const formik = useFormik({
    initialValues: { userName: '', userEmail: '', userPassword: '' },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <ModalEditUser onClose={onClose}>
      <StyledModal>
        <StyledBtnClose onClick={onClose}>
          <SpriteSVG name="close" />
        </StyledBtnClose>
        <p>Edit profile</p>
        <StyledModalHeader>
          <StyledUserFoto
            src={previewImage || avatar || userFoto}
            alt={previewImage ? 'Preview' : avatar ? 'Foto' : 'Default foto'}
          />

          <StyledInputAdd
            type="file"
            onChange={onFileChange}
            onClick={onUpload}
          ></StyledInputAdd>
          <StyledSvgWrapper
            onClick={() => document.querySelector('input[type=file]').click()}
          >
            <SpriteSVG name="add-modal-photo" />
          </StyledSvgWrapper>
        </StyledModalHeader>

        <StyledModalForm onSubmit={formik.handleSubmit}>
          <StyledModalInput
            name="userName"
            placeholder="Ivetta"
            value={formik.values.userName || username}
            onChange={formik.handleChange}
          />
          {formik.errors.userName && formik.touched.userName && (
            <p style={{ color: 'red', fontSize: '10px' }}>
              {formik.errors.userName}
            </p>
          )}
          <StyledModalInput
            name="userEmail"
            placeholder="ivetta34@gmail.com"
            value={formik.values.userEmail || email}
            onChange={formik.handleChange}
          />
          {formik.errors.userEmail && formik.touched.userEmail && (
            <p style={{ color: 'red', fontSize: '10px' }}>
              {formik.errors.userEmail}
            </p>
          )}
          <StyledModalInput
            name="userPassword"
            placeholder="ivetta1999.23"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.userPassword || ''}
            onChange={event => {
              formik.handleChange(event);
              setChangedPassword(event.target.value);
            }}
          />
          <StyledBtnEdit
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <SpriteSVG name= 'eye1' />
          </StyledBtnEdit>
          {formik.errors.userPassword && formik.touched.userPassword && (
            <p style={{ color: 'red', fontSize: '10px' }}>
              {formik.errors.userPassword}
            </p>
          )}
          <StyledBtnSave type="submit">Save</StyledBtnSave>
        </StyledModalForm>

        <Ellipse222 />
        <Ellipse224 />
      </StyledModal>
    </ModalEditUser>
  );
};

UserInfoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};



