import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { getColumn } from '../../../../src/redux/task/taskSelectors';
import { addColumn } from '../../../../src/redux/task/taskOperations';
import icons from '../../../../src/images/sprite.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBoard } from '../../../redux/auth/authSelectors';

import {
  Input,
  Header,
  SvgCloseBtn,
  BoardCreateBtn,
  Error,
  SubmitSvgWrapper,
  ModalForm,
} from './AddColumnForm.styled';

const AddColumnFormSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too short').required('This field is required!'),
});

const AddColumnForm = ({ closeModalWindow }) => {
  const columns = useSelector(getColumn);
  const dispatch = useDispatch();
  const boards = useSelector(getBoard);

  const activeBoard = boards.find(board => board.isActive);
  const idBoard = activeBoard._id;

  return (
    <Formik
      initialValues={{
        title: '',
      }}
      validationSchema={AddColumnFormSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        closeModalWindow();
        if (columns && columns.some(column => column.title === values.title)) {
          return toast.warning('The title already exists');
        }

        dispatch(addColumn({ values, idBoard }))
          .unwrap()
          .then(() =>
            toast.success(`${values.title} has been successfully added`)
          )
          .catch(error => error.message);
      }}
    >
      <ModalForm>
        <Header>Add Column</Header>
        <SvgCloseBtn type="button" onClick={closeModalWindow}>
          <svg>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </SvgCloseBtn>

        <label htmlFor="title"></label>
        <Error name="title" component="div" />
        <Input name="title" placeholder="Title" />

        <BoardCreateBtn type="submit">
          <SubmitSvgWrapper>
            <svg width="28px" height="28px">
              <use href={`${icons}#icon-plus`}></use>
            </svg>
          </SubmitSvgWrapper>
          Add
        </BoardCreateBtn>
        <ToastContainer
          position="center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="light"
        />
      </ModalForm>
    </Formik>
  );
};

export default AddColumnForm;
