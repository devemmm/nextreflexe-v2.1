import React from 'react';
import PropTypes from 'prop-types';

import ControlledDatePicker from '../ControlledDatePicker';
import ControlledInputs from '../controlledInput';
import InputFieldFilled from '../InputFieldFilled';

function SignUpStep1({ control, errors }) {
  return (
    <>
      <ControlledInputs
        name="fname"
        control={control}
        input={InputFieldFilled}
        defaultValue=""
        label="First Name"
        sx={{ maxWidth: '942px' }}
        {...(errors?.fname && {
          error: true,
          helperText: errors.fname.message,
        })}
      />
      <ControlledInputs
        name="lname"
        control={control}
        input={InputFieldFilled}
        defaultValue=""
        label="Last Name"
        sx={{ maxWidth: '942px' }}
        {...(errors?.lname && {
          error: true,
          helperText: errors.lname.message,
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
        name="nid"
        control={control}
        input={InputFieldFilled}
        defaultValue=""
        label="National ID"
        sx={{ maxWidth: '942px' }}
        {...(errors?.nid && {
          error: true,
          helperText: errors.nid.message,
        })}
      />
      <ControlledDatePicker
        name="dob"
        control={control}
        input={InputFieldFilled}
        defaultValue=""
        disableFuture={true}
        inputProps={{
          label: 'Birth Date',
          sx: { maxWidth: '942px' },
          inputMode: 'string',
          ...(errors?.dob && {
            error: true,
            helperText: errors.dob.message,
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

