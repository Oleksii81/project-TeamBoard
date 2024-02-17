import { Radio, FormControlLabel, RadioGroup } from '@mui/material';
import { useState } from 'react';

export const RadioButtons = props => {
  const buttonColor = [
    { value: 'without', color: 'var(--calendarWithoutColor)' },
    { value: 'low', color: '#8FA1D0' },
    { value: 'medium', color: '#E09CB5' },
    { value: 'high', color: '#BEDBB0' },
  ];

  const [selectedValue, setSelectedValue] = useState('');

  const onRadioChange = event => {
    const { value } = event.target;

    props.onRadioChange(value);
    setSelectedValue(value);
  };

  const primaryTextColor = `var(--primaryTextColor)`;

  return (
    <RadioGroup row value={selectedValue} onChange={onRadioChange}>
      {buttonColor.map(button => (
        <FormControlLabel
          key={button.value}
          sx={{
            color: 'red',
            marginBottom: '8px',
            '& .Mui-checked.MuiRadio-root': {
              color: button.color,
            },
            '& .MuiSvgIcon-root': {
              fontSize: 14,
            },
            '& .MuiFormControlLabel-label': {
              fontSize: 12,
              letterSpacing: '0.02em',
            },
            '& .MuiButtonBase-root.MuiRadio-root': {
              color: button.color,
              padding: 0,
              backgroundColor:
                selectedValue === button.value ? 'transparent' : button.color,
            },
            '& .MuiTypography-root': {
              marginLeft: 1,
              color:
                selectedValue === button.value
                  ? primaryTextColor
                  : 'var(--popupTextColor)',
            },
          }}
          value={button.value}
          control={<Radio />}
          onChange={onRadioChange}
        />
      ))}
    </RadioGroup>
  );
};
