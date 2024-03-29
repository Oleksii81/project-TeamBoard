import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import icons from '../../../../src/images/sprite.svg';
import Image0 from '../../../../src/images/background/00.png';
import Image1 from '../../../../src/images/background/01.png';
import Image2 from '../../../../src/images/background/02.png';
import Image3 from '../../../../src/images/background/03.png';
import Image4 from '../../../../src/images/background/04.png';
import Image5 from '../../../../src/images/background/05.png';
import Image6 from '../../../../src/images/background/06.png';
import Image7 from '../../../../src/images/background/07.png';
import Image8 from '../../../../src/images/background/08.png';
import Image9 from '../../../../src/images/background/09.png';
import Image10 from '../../../../src/images/background/10.png';
import Image11 from '../../../../src/images/background/11.png';
import Image12 from '../../../../src/images/background/12.png';
import Image13 from '../../../../src/images/background/13.png';
import Image14 from '../../../../src/images/background/14.png';
import Image15 from '../../../../src/images/background/15.png';

import {
  Header,
  Input,
  IconsHeaderIcons,
  IconsContainer,
  HeaderBackground,
  BackgroundContainer,
  BoardCreateBtn,
  ModalForm,
  SvgCloseBtn,
  Img,
  SubmitSvgWrapper,
  Error,
} from './EditBoardForm.styled';
import { editBoard } from '../../../redux/auth/authOperations';
import { getBoardSelector } from '../../../redux/auth/authSelectors';
import { useParams } from 'react-router';
import Loader from 'components/Loader/Loader';

const BoardFormSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too short').required('This field is required!'),
});

const EditBoardForm = ({ closeModalWindow, id }) => {
  const dispatch = useDispatch();
  const { idBoard } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const boards = useSelector(getBoardSelector);
  const { title, icnboard, background } = boards.find(board => {
    return board._id === idBoard;
  });

  return (
    <Formik
      initialValues={{
        title: title,
        icnboard: icnboard,
        background: background,
      }}
      validationSchema={BoardFormSchema}
      onSubmit={(values, actions) => {
        if (
          title === values.title &&
          icnboard === values.icnboard &&
          background === values.background
        ) {
          return toast.warning('Data has not changed');
        }
        
        setIsLoading(true);

        dispatch(editBoard({ id, values }))
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
      <ModalForm>
      {isLoading && <Loader />}
        <Header>Edit board</Header>
        <SvgCloseBtn type="button" onClick={closeModalWindow}>
          <svg>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </SvgCloseBtn>

        <label htmlFor="title"></label>
        <Error name="title" component="div" />
        <Input name="title" placeholder="Title" />

        <IconsHeaderIcons>Icons</IconsHeaderIcons>
        <IconsContainer>
          <label>
            <Field
              className="icons-field"
              type="radio"
              name="icnboard"
              value="icon-project"
            />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-project`}></use>
            </svg>
          </label>
          <label>
            <Field
              className="icons-field"
              type="radio"
              name="icnboard"
              value="icon-star"
            />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-star`}></use>
            </svg>
          </label>
          <label>
            <Field
              className="icons-field"
              type="radio"
              name="icnboard"
              value="icon-loading"
            />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-loading`}></use>
            </svg>
          </label>
          <label>
            <Field
              className="icons-field"
              type="radio"
              name="icnboard"
              value="icon-puzzle"
            />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-puzzle`}></use>
            </svg>
          </label>
          <label>
            <Field
              className="icons-field"
              type="radio"
              name="icnboard"
              value="icon-container"
            />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-container`}></use>
            </svg>
          </label>
          <label>
            <Field
              className="icons-field"
              type="radio"
              name="icnboard"
              value="icon-lightning"
            />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-lightning`}></use>
            </svg>
          </label>
          <label>
            <Field
              className="icons-field"
              type="radio"
              name="icnboard"
              value="icon-colors"
            />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-colors`}></use>
            </svg>
          </label>
          <label>
            <Field
              className="icons-field"
              type="radio"
              name="icnboard"
              value="icon-hexagon"
            />
            <svg width="18px" height="18px">
              <use href={`${icons}#icon-hexagon`}></use>
            </svg>
          </label>
        </IconsContainer>

        <HeaderBackground>Background</HeaderBackground>
        <BackgroundContainer>
          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="0"
            />
            <Img src={Image0} alt="background 0" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="7"
            />
            <Img src={Image7} alt="background 7" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="2"
            />
            <Img src={Image2} alt="background 2" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="1"
            />
            <Img src={Image1} alt="background 1" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="8"
            />
            <Img src={Image8} alt="background 8" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="3"
            />
            <Img src={Image3} alt="background 3" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="4"
            />
            <Img src={Image4} alt="background 4" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="9"
            />
            <Img src={Image9} alt="background 9" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="5"
            />
            <Img src={Image5} alt="background 5" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="10"
            />
            <Img src={Image10} alt="background 10" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="6"
            />
            <Img src={Image6} alt="background 6" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="11"
            />
            <Img src={Image11} alt="background 11" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="12"
            />
            <Img src={Image12} alt="background 12" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="13"
            />
            <Img src={Image13} alt="background 13" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="14"
            />
            <Img src={Image14} alt="background 14" />
          </label>

          <label>
            <Field
              className="background-field"
              type="radio"
              name="background"
              value="15"
            />
            <Img src={Image15} alt="background 15" />
          </label>
        </BackgroundContainer>

        <BoardCreateBtn type="submit">
          <SubmitSvgWrapper>
            <svg width="28px" height="28px">
              <use href={`${icons}#icon-plus`}></use>
            </svg>
          </SubmitSvgWrapper>
          Edit
        </BoardCreateBtn>
        <ToastContainer
          style={{ width: '280px' }}
          position="bottom-center"
          autoClose={1500}
          transition={Slide}
          closeOnClick={true}
          pauseOnHover={false}
          draggable={false}
          limit={1}
          theme="colored"
        />
      </ModalForm>
    </Formik>
  );
};

export default EditBoardForm;
