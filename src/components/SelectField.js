import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, FormHelperText, InputLabel, Select } from '@mui/material';

function SelectField({
  label,
  id,
  children,
  selectProps,
  customOnChange,
  helperText,
  error,
  ...props
}) {
  return (
    <FormControl error={error} {...props}>
      <InputLabel id={`select ${label}`}>{label}</InputLabel>
      <Select
        labelId={`select ${label}`}
        id={id}
        label={label}
        {...selectProps}
        onChange={(e) => {
          e.target.id = id;
          if (customOnChange) {
            customOnChange(e);
          }
          selectProps.onChange(e);
        }}
      >
        {children}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.any,
  children: PropTypes.any.isRequired,
};

export default SelectField;

