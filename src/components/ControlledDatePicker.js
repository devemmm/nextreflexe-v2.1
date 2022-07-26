import React from 'react';
import PropTypes from 'prop-types';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Controller } from 'react-hook-form';

const ControlledDatePicker = ({
  name,
  control,
  defaultValue,
  input: Input,
  inputProps,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={value}
            onChange={onChange}
            {...props}
            renderInput={({
              inputRef,
              inputProps: renderInputProps,
              InputProps,
            }) => {
              return (
                <Input
                  onKeyDown={(e) => {
                    e.preventDefault();
                  }}
                  inputRef={inputRef}
                  InputProps={{ ...InputProps }}
                  {...renderInputProps}
                  {...inputProps}
                />
              );
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

ControlledDatePicker.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object,
  defaultValue: PropTypes.string,
  input: PropTypes.elementType,
};

export default ControlledDatePicker;

