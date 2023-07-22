import React from 'react';
import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';
import { ObjectType } from 'src/types/dashboardTypes';

function ControlledSelectField({
  name,
  defaultValue,
  control,
  input: Input,
  selectProps,
  ...props
}: ObjectType) {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <Input selectProps={{ ...selectProps, value, onChange }} {...props} />
        );
      }}
    />
  );
}

ControlledSelectField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.any.isRequired,
  input: PropTypes.elementType.isRequired,
};

export default ControlledSelectField;

