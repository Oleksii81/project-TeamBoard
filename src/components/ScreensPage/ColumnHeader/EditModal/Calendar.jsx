import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const date = new Date();
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
const formattedDate = `${month} ${dayOfMonth}`;

const AirDatepickerComponent = () => {
  return (
    <>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label={formattedDate}
            //           style={{
            //   color: 'transparent', // Example inline style
            // }}/>
                  ></DatePicker>
        </LocalizationProvider>
      </div>
    </>
  );
};

export default AirDatepickerComponent;