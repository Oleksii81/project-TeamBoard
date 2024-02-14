// import * as React from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// const date = new Date();
// const monthNames = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];
// const month = monthNames[date.getMonth()];
// const dayOfMonth = date.getDate();
// const formattedDate = `${month} ${dayOfMonth}`;

// const AirDatepickerComponent = props => {
//   return (
//     <>
//       <div>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DatePicker
//             onChange={newValue => props.onDateChange(newValue.$d)}
//             slotProps={{
//               openPickerIcon: { fontSize: 'small' },
//               openPickerButton: { color: 'warning' },
//               textField: {
//                 variant: 'filled',
//                 color: 'secondary',
//                 InputProps: {
//                   disableUnderline: true, // Убирает подчеркивание у текстового поля
//                   sx: { border: 'none' }, // Убирает границы у текстового поля
//                 },
//               },
//             }}
//             label={`${formattedDate}`}
//           />
//         </LocalizationProvider>
//       </div>
//     </>
//   );
// };

// export default AirDatepickerComponent;
