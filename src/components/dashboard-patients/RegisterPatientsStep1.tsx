import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import fetchBranchesData from '../../utils/fetchBranchesData';
import fetchDoctorsData from '../../utils/fetchDoctorsData';
import fetchServicesData from '../../utils/fetchServicesData';
import ControlledDatePicker from '../ControlledDatePicker';
import InputFieldFilled from '../InputFieldFilled';
import ControlledInputs from '../controlledInput';

function RegisterPatientsStep1({ control, errors }) {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDoctorsData(dispatch);
    fetchServicesData(dispatch);
    fetchBranchesData(dispatch);
  }, [dispatch]);
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
            helperText: errors?.dob?.message,
          }),
        }}
      />
      {/* <ControlledSelectField
        name="branchId"
        id="branchId"
        defaultValue=""
        control={control}
        input={SelectField}
        // customOnChange={handleSelectOption}
        variant="filled"
        label="Select Branch"
        sx={{ width: '100%', maxWidth: '942px' }}
        helperText={errors?.branchId ? errors?.branchId?.message : undefined}
        error={errors?.branchId ? true : false}
      >
        {branches?.map((branch) => {
          return (
            <MenuItem key={branch.id} value={branch.id}>
              {branch.name}
            </MenuItem>
          );
        })}
      </ControlledSelectField>
      <ControlledSelectField
        name="userId"
        id="userId"
        defaultValue=""
        control={control}
        input={SelectField}
        // customOnChange={handleSelectOption}
        variant="filled"
        label="Select Doctor"
        sx={{ width: '100%', maxWidth: '942px' }}
        helperText={errors?.userId ? errors?.userId?.message : undefined}
        error={errors?.userId ? true : false}
      >
        {doctors.map((doctor) => {
          return (
            <MenuItem key={doctor.id} value={doctor.id}>
              {doctor.fname} {doctor.lname}
            </MenuItem>
          );
        })}
      </ControlledSelectField>
      <ControlledSelectField
        name="serviceId"
        id="serviceId"
        defaultValue=""
        control={control}
        input={SelectField}
        // customOnChange={handleSelectOption}
        variant="filled"
        label="Select Service"
        sx={{ width: '100%', maxWidth: '942px' }}
        helperText={errors?.serviceId ? errors.serviceId.message : undefined}
        error={errors?.serviceId ? true : false}
      >
        {services.map((service) => {
          return (
            <MenuItem key={service.id} value={service.id}>
              {service.name}
            </MenuItem>
          );
        })}
      </ControlledSelectField> */}
    </>
  );
}

RegisterPatientsStep1.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default RegisterPatientsStep1;

