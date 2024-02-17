import icons from '../../../images/sprite.svg';
import {
  //   Container,
  //   IconCloseModal,
  //   SvgForm,
  //   TextAddCard,
  //   FormCreateCard,
  //   InputCreateCard,
  //   CommentCreateCard,
  //   EditCardLabel,
  CalendarWrapp,
  CalendarText,
  CalendarArrow,
  //   EditButton,
} from './CreateCardForm.styled';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import './Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarComponent = event => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [unixFromat, setUnixFormat] = useState(
    new Date(new Date().toUTCString()).getTime()
  );

  const toggleDatePicker = () => {
    setShowDatePicker(prevState => !prevState);
  };
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
  const handleDateInputChange = date => {
    const UTC = date.toUTCString();
    const UNIX = new Date(UTC).getTime();
    setUnixFormat(UNIX);
    // console.log(unixFromat);
    setShowDatePicker(false);
    event.onSelectedDate(unixFromat);
  };
  return (
    <div>
      <CalendarWrapp onClick={toggleDatePicker}>
        <CalendarText>Today, {formatTimestamp(unixFromat)}</CalendarText>
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
        <div style={{ position: 'absolute', top: '58%', left: '53%' }}>
          <DatePicker
            selected={new Date()}
            onChange={handleDateInputChange}
            dateFormat="dd/MM/yyyy"
            inline
            minDate={new Date()}
          />
        </div>
      )}
    </div>
  );
};
export default CalendarComponent;
