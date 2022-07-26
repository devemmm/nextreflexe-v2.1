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
        color: theme.colors.primary,
        '& fieldset': {
          borderColor: theme.colors.primary,
        },

        '&.Mui-focused fieldset': {
          borderColor: theme.colors.primary,
        },
      },
      '& .MuiFormLabel-root': {
        color: theme.colors.primary,
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: theme.colors.primary,
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
          <MenuItem value={'' || null}>
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

