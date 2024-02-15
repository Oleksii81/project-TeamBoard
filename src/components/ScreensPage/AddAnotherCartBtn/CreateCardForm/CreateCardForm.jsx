import { Formik } from 'formik';
import * as Yup from 'yup';
import icons from '../../../../images/sprite.svg';
import {
  Container,
  IconCloseModal,
  SvgForm,
  TextAddCard,
  FormCreateCard,
  InputCreateCard,
  CommentCreateCard,
  EditCardLabel,
  CalendarWrapp,
  CalendarText,
  CalendarArrow,
  EditButton,
} from './CreateCardForm.styled';
// import { RadioButtons } from './RadioButtons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import './Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import { addCard } from '../../../../redux/task/taskOperations';
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthNames[date.getMonth()];
  const dayOfMonth = date.getDate();
  return `${month} ${dayOfMonth}`;
}
const CreateCardSchema = Yup.object().shape({
  title: Yup.string().required('title is required'),
  description: Yup.string().required('Description is required'),
});

const CreateCardForm = ({ closeModal }) => {
  // const [selectedRadioValue, setSelectedRadioValue] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [unixFromat, setUnixFormat] = useState(
    new Date(new Date().toUTCString()).getTime()
  );

  const handleDateInputChange = date => {
    const UTC = date.toUTCString();
    const UNIX = new Date(UTC).getTime();
    setUnixFormat(UNIX);
    setShowDatePicker(false);
  };
  const toggleDatePicker = () => {
    setShowDatePicker(prevState => !prevState);
  };

  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <TextAddCard>Add card</TextAddCard>
        <IconCloseModal onClick={closeModal}>
          <SvgForm width={18} height={18}>
            <use href={`${icons}#icon-close`}></use>
          </SvgForm>
        </IconCloseModal>

        <Formik
          initialValues={{
            title: '',
            description: '',
            priority: '',
          }}
          validationSchema={CreateCardSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false); // Помечаем форму как "не отправленную"
            dispatch(addCard(values));
          }}
        >
          {({ handleSubmit }) => (
            <FormCreateCard
              onSubmit={e => {
                e.preventDefault(); // Предотвращаем перезагрузку страницы
                handleSubmit(e); // Вызываем стандартный обработчик отправки формы из Formik
              }}
            >
              <InputCreateCard
                type="title"
                name="title"
                required
                placeholder="title"
              />
              <CommentCreateCard
                type="description"
                name="description"
                required
                placeholder="Description"
              />
              <EditCardLabel>Label color</EditCardLabel>
              {/* <RadioButtons onRadioChange={setSelectedRadioValue} /> */}
              <EditCardLabel>Deadline</EditCardLabel>
              <CalendarWrapp onClick={toggleDatePicker}>
                <CalendarText>
                  Today, {formatTimestamp(unixFromat)}
                </CalendarText>
                <CalendarArrow
                  style={{ width: 18, height: 18 }}
                  aria-label="open theme select icon"
                >
                  <svg>
                    <use href={`${icons}#icon-chevron-down`} use="true"></use>
                  </svg>
                </CalendarArrow>
              </CalendarWrapp>
              {showDatePicker && (
                <DatePicker
                  selected={new Date()}
                  onChange={handleDateInputChange}
                  dateFormat="dd/MM/yyyy"
                  inline
                  minDate={new Date()}
                />
              )}

              <EditButton type="submit">add card</EditButton>
            </FormCreateCard>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default CreateCardForm;
