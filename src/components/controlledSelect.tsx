import React from 'react';
import { Controller } from 'react-hook-form';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';

const ControlledSelect = ({
  inputValue,
  name,
  label,
  menu,
  currentLocation,
  control,
  theme,
}) => (
  <FormControl
    sx={{
      '& .MuiInputBase-root': {
        color: '#018F55',
        '& fieldset': {
          borderColor: '#018F55',
        },

        '&.Mui-focused fieldset': {
          borderColor: '#018F55',
        },
      },
      '& .MuiFormLabel-root': {
        color: '#018F55',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: '#018F55',
      },
      width: '100%',
      margin: '15px 0',
    }}
  >
    <InputLabel>{inputValue}</InputLabel>
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select
          label={label}
          onChange={onChange}
          value={value}
          data-testid="locations-select"
        >
          <MenuItem value={''}>
            <em>None</em>
          </MenuItem>
          {menu}
          {currentLocation}
        </Select>
      )}
    />
  </FormControl>
);

export default ControlledSelect;

