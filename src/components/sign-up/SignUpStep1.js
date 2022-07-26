import React from 'react';
import PropTypes from 'prop-types';

import ControlledDatePicker from '../ControlledDatePicker';
import ControlledInputs from '../controlledInput';
import InputFieldFilled from '../InputFieldFilled';

function SignUpStep1({ control, errors }) {
  return (
    <>
      <ControlledInputs
        name="firstName"
        control={control}
        input={InputFieldFilled}
        defaultValue=""
        label="First Name"
        sx={{ maxWidth: '942px' }}
        {...(errors?.firstName && {
          error: true,
          helperText: errors.firstName.message,
        })}
      />
      <ControlledInputs
        name="lastName"
        control={control}
        input={InputFieldFilled}
        defaultValue=""
        label="Last Name"
        sx={{ maxWidth: '942px' }}
        {...(errors?.lastName && {
          error: true,
          helperText: errors.lastName.message,
        })}
      />
      <ControlledInputs
        name="email"
        control={control}
        input={InputFieldFilled}
        defaultValue=""
        label="Email"
        sx={{ maxWidth: '942px' }}
        {...(errors?.email && {
          error: true,
          helperText: errors.email.message,
        })}
      />
      <ControlledInputs
        name="password"
        control={control}
        input={InputFieldFilled}
        defaultValue=""
        label="Password"
        sx={{ maxWidth: '942px' }}
        {...(errors?.password && {
          error: true,
          helperText: errors.password.message,
        })}
      />
      <ControlledInputs
        name="phone"
        control={control}
        input={InputFieldFilled}
        defaultValue=""
        label="Phone"
        sx={{ maxWidth: '942px' }}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        {...(errors?.phone && {
          error: true,
          helperText: errors.phone.message,
        })}
      />
      <ControlledInputs
        name="nationalId"
        control={control}
        input={InputFieldFilled}
        defaultValue=""
        label="National ID"
        sx={{ maxWidth: '942px' }}
        {...(errors?.nationalId && {
          error: true,
          helperText: errors.nationalId.message,
        })}
      />
      <ControlledDatePicker
        name="birthDate"
        control={control}
        input={InputFieldFilled}
        defaultValue=""
        disableFuture={true}
        inputProps={{
          label: 'Birth Date',
          sx: { maxWidth: '942px' },
          inputMode: 'string',
          ...(errors?.birthDate && {
            error: true,
            helperText: errors.birthDate.message,
          }),
        }}
      />
    </>
  );
}

SignUpStep1.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default SignUpStep1;

