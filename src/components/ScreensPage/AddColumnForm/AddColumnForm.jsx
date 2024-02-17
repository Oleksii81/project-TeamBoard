import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
// import { getColumn } from '../../../../src/redux/task/taskSelectors';
import { addColumn } from '../../../../src/redux/task/taskOperations';
import icons from '../../../../src/images/sprite.svg';
// import { ToastContainer, toast, Slide } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import {
  Input,
  Header,
  SvgCloseBtn,
  BoardCreateBtn,
  Error,
  SubmitSvgWrapper,
  ModalForm,
} from './AddColumnForm.styled';
import { useParams } from 'react-router-dom';

const AddColumnFormSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too short').required('This field is required!'),
});

const AddColumnForm = ({ closeModalWindow }) => {
  const { idBoard } = useParams();
  // const columns = useSelector(getColumn);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        title: '',
      }}
      validationSchema={AddColumnFormSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        closeModalWindow();
        // if (columns && columns.find(column => column.title === values.title)) {
        //   return toast.warning('The title already exists');
        // }

        dispatch(addColumn({ idBoard: idBoard, body: values }))
          .unwrap()
          .then()
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
        {/* <ToastContainer
          style={{ width: '280px' }}
          position="top-center"
          autoClose={1500}
          transition={Slide}
          closeOnClick={true}
          pauseOnHover={false}
          draggable={false}
          limit={1}
          theme="colored"
        /> */}
      </ModalForm>
    </Formik>
  );
};

export default AddColumnForm;
