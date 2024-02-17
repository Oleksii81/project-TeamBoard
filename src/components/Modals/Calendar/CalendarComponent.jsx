import icons from '../../../images/sprite.svg';
import {
  CalendarWrapp,
  CalendarText,
  CalendarArrow,
} from './CreateCardForm.styled';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import './Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarComponent = event => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [unixFormat, setUnixFormat] = useState(formatTodayDate());

  const toggleDatePicker = () => {
    setShowDatePicker(prevState => !prevState);
  };

  function formatTodayDate(time) {
    if (!time) {
      const months = [
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

      const currentDate = new Date();
      const day = currentDate.getDate();
      const monthIndex = currentDate.getMonth();
      const month = months[monthIndex];

      return ` ${day} ${month}`;
    } else {
      const date = new Date(time);
      const options = { month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      return ` ${formattedDate} `;
    }
  }

  const handleDateInputChange = date => {
    const UTC = date.toUTCString();
    const UNIX = new Date(UTC).getTime();
    setUnixFormat(UNIX);

    event.onSelectedDate(UNIX); // Передаем новое значение в родительский компонент
    // localStorage.setItem('selectedDate', new Date(UNIX));
    // setUnixFormat(localStorage.getItem('selectedDate'));

    formatTodayDate(UNIX);

    setShowDatePicker(false);
  };
  return (
    <div>
      <CalendarWrapp onClick={toggleDatePicker}>
        <CalendarText>Today, {formatTodayDate(unixFormat)}</CalendarText>
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
