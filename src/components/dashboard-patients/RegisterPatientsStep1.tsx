import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ControlledDatePicker from '../ControlledDatePicker';
import ControlledInputs from '../controlledInput';
import InputFieldFilled from '../InputFieldFilled';
import ControlledSelectField from '../ControlledSelectField';
import SelectField from '../SelectField';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem } from '@mui/material';
import fetchDoctorsData from '../../utils/fetchDoctorsData';
import fetchServicesData from '../../utils/fetchServicesData';
import fetchBranchesData from '../../utils/fetchBranchesData';

function RegisterPatientsStep1({ control, errors }) {
  const dispatch = useDispatch();
  const { data: doctors } = useSelector((state: any) => state.doctorReducer);
  const { data: branches } = useSelector((state: any) => state.branchesReducer);
  const { data: services } = useSelector((state: any) => state.servicesReducer);
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
        {...(errors?.firstName && {
          error: true,
          helperText: errors.firstName.message,
        })}
      />
      <ControlledInputs
        name="lname"
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
        {...(errors?.nationalId && {
          error: true,
          helperText: errors.nationalId.message,
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
          ...(errors?.birthDate && {
            error: true,
            helperText: errors.birthDate.message,
          }),
        }}
      />
      <ControlledSelectField
        name="branchId"
        id="branchId"
        defaultValue=""
        control={control}
        input={SelectField}
        // customOnChange={handleSelectOption}
        variant="filled"
        label="Select Branch"
        sx={{ width: '100%', maxWidth: '942px' }}
        helperText={errors?.province ? errors.province.message : undefined}
        error={errors?.province ? true : false}
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
        helperText={errors?.province ? errors.province.message : undefined}
        error={errors?.province ? true : false}
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
        helperText={errors?.province ? errors.province.message : undefined}
        error={errors?.province ? true : false}
      >
        {services.map((service) => {
          return (
            <MenuItem key={service.id} value={service.id}>
              {service.name}
            </MenuItem>
          );
        })}
      </ControlledSelectField>
    </>
  );
}

RegisterPatientsStep1.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default RegisterPatientsStep1;

