import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';
import icons from '../../../../src/images/sprite.svg';
import Image1 from '../../../../src/images/background/00.png';
import Image2 from '../../../../src/images/background/01.png';
import Image3 from '../../../../src/images/background/02.png';
import Image4 from '../../../../src/images/background/03.png';
import Image5 from '../../../../src/images/background/04.png';
import Image6 from '../../../../src/images/background/05.png';
import Image7 from '../../../../src/images/background/06.png';
import Image8 from '../../../../src/images/background/07.png';
import Image9 from '../../../../src/images/background/08.png';
import Image10 from '../../../../src/images/background/09.png';
import Image11 from '../../../../src/images/background/10.png';
import Image12 from '../../../../src/images/background/11.png';
import Image13 from '../../../../src/images/background/12.png';
import Image14 from '../../../../src/images/background/13.png';
import Image15 from '../../../../src/images/background/14.png';
import Image16 from '../../../../src/images/background/15.png';

import {
  Header,
  Input,
  IconsHeaderIcons,
  IconsContainer,
  HeaderBackground,
  BackgroundContainer,
  BoardSubmitBtn,
  ModalForm,
  SvgCloseBtn,
} from './CreateBoardForm.styled';

const BoardFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too short')
    .max(20, 'Too long')
    .required('This field is required!'),
});

const CreateBoardForm = ({ onSubmit, closeModalWindow }) => {
  return (
    <Formik
      initialValues={{
        topic: '',
        icon: 'icon-project',
        background: 'Image1',
      }}
      validationSchema={BoardFormSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <ModalForm>
        <Header>New board</Header>
        <SvgCloseBtn type="button" onClick={closeModalWindow}>
          <svg>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </SvgCloseBtn>

        <label htmlFor="topic"></label>
        <Input name="topic" placeholder="Title" />

        <ErrorMessage name="topic" />

        <IconsHeaderIcons>Icons</IconsHeaderIcons>
        <IconsContainer>
          <label className="icons-label">
            <Field type="radio" name="icon" value="icon-project" checked />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-project`}></use>
            </svg>
          </label>
          <label>
            <Field type="radio" name="icon" value="icon-star" />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-star`}></use>
            </svg>
          </label>
          <label>
            <Field type="radio" name="icon" value="icon-loading" />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-loading`}></use>
            </svg>
          </label>
          <label>
            <Field type="radio" name="icon" value="icon-puzzle" />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-puzzle`}></use>
            </svg>
          </label>
          <label>
            <Field type="radio" name="icon" value="icon-container" />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-container`}></use>
            </svg>
          </label>
          <label>
            <Field type="radio" name="icon" value="icon-lightning" />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-lightning`}></use>
            </svg>
          </label>
          <label>
            <Field type="radio" name="icon" value="icon-colors" />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-colors`}></use>
            </svg>
          </label>
          <label>
            <Field type="radio" name="icon" value="icon-hexagon" />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-hexagon`}></use>
            </svg>
          </label>
        </IconsContainer>

        <HeaderBackground>Background</HeaderBackground>
        <BackgroundContainer>
          <label>
            <Field type="radio" name="background" value="Image1" checked />
            <img src={Image1} alt="background 1" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image8" />
            <img src={Image8} alt="background 8" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image3" />
            <img src={Image3} alt="background 3" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image2" />
            <img src={Image2} alt="background 2" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image9" />
            <img src={Image9} alt="background 9" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image4" />
            <img src={Image4} alt="background 4" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image5" />
            <img src={Image5} alt="background 5" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image10" />
            <img src={Image10} alt="background 10" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image6" />
            <img src={Image6} alt="background 6" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image11" />
            <img src={Image11} alt="background 11" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image7" />
            <img src={Image7} alt="background 7" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image12" />
            <img src={Image12} alt="background 12" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image13" />
            <img src={Image13} alt="background 13" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image14" />
            <img src={Image14} alt="background 14" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image15" />
            <img src={Image15} alt="background 15" />
          </label>

          <label>
            <Field type="radio" name="background" value="Image16" />
            <img src={Image16} alt="background 16" />
          </label>
        </BackgroundContainer>

        <BoardSubmitBtn type="submit">
          <svg width="28px" height="28px">
            <use href={`${icons}#icon-plus`}></use>
          </svg>
          Create
        </BoardSubmitBtn>
      </ModalForm>
    </Formik>
  );
};

export default CreateBoardForm;
