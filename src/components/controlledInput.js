import React from 'react';
import { Controller } from 'react-hook-form';

const ControlledInputs = ({
  name,
  control,
  placeholder,
  defaultValue,
  input: Input,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { onChange, value } }) => (
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    )}
  />
);

export default ControlledInputs;
