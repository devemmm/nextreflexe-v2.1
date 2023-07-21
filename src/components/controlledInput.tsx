import React from 'react';
import { Controller } from 'react-hook-form';
import { ObjectType } from 'src/types/dashboardTypes';

const ControlledInputs = ({
  name,
  control,
  placeholder,
  defaultValue,
  input: Input,
  ...props
}: ObjectType) => (
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

