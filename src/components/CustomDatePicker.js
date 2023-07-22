import React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function CustomDatePicker({ label, input: Input, inputProps, ...props }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        {...props}
        renderInput={({
          inputRef,
          inputProps: renderInputProps,
          InputProps,
        }) => {
          return (
            <Input
              inputRef={inputRef}
              {...renderInputProps}
              InputProps={{ ...InputProps }}
              {...inputProps}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;

