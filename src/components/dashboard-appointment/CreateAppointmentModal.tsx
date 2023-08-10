import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Modal,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { createAppointmentSchema } from '../../validations/appointments.validation';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ControlledDatePicker from '../ControlledDatePicker';
import ControlledSelectField from '../ControlledSelectField';
import InputFieldFilled from '../InputFieldFilled';
import SelectField from '../SelectField';
import { formatName_surname } from '../../utils/formatName_surname';
import { ObjectType } from 'src/types/dashboardTypes';

const CreateAppointmentModal = ({
  createAppointment,
  openModal,
  setOpenModal,
  disableSelectPatient,
}: ObjectType) => {
  const theme = useTheme();
  const { data: servicesData } = useSelector(
    (state: any) => state.servicesReducer,
  );
  const { data: branchesData } = useSelector(
    (state: any) => state.branchesReducer,
  );
  const { data: usersData } = useSelector((state: any) => state.doctorReducer);
  const { data: patientsData } = useSelector(
    (state: any) => state.patientsReducer,
  );
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createAppointmentSchema) });

  function closeModal() {
    reset();
    setOpenModal(false);
  }

  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        overflow: 'auto',
        '& *::-webkit-scrollbar': {
          height: '2px',
          width: '5px',
          background: 'transparent',
        },
        '& *::-webkit-scrollbar-thumb': {
          background: theme.palette.primary.main,
          borderRadius: '15px',
        },
      }}
    >
      <Box
        sx={{
          maxHeight: 'max-content',
          maxWidth: '400px',
          width: '100%',
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            boxShadow:
              '0px 4px 4px rgba(0, 0, 0, 0.1), 5px 20px 25px 5px rgba(0, 0, 0, 0.05), 1px 1px 30px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            width: '100%',
            height: 'max-content',
            padding: '20px',
            position: 'relative',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '15px',
              right: '15px',
            }}
            onClick={closeModal}
          >
            <CloseRoundedIcon color="primary" />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 300,
              marginBottom: '20px',
            }}
          >
            Make an Appointment
          </Typography>
          <Stack
            direction="column"
            width="100%"
            margin={0}
            padding={0}
            gap="10px"
          >
            <ControlledDatePicker
              input={InputFieldFilled}
              name="startTime"
              defaultValue=""
              disablePast={true}
              control={control}
              inputProps={{
                label: 'Start Time',
                width: '100%',
                ...(errors?.startTime && {
                  error: true,
                  helperText: errors.startTime.message,
                }),
              }}
            />
            <ControlledSelectField
              input={SelectField}
              defaultValue=""
              name="branchId"
              control={control}
              label="Select a Branch"
              variant="filled"
              sx={{
                width: '100%',
              }}
              helperText={errors?.branch ? errors.branch.message : undefined}
              error={errors?.branch ? true : false}
            >
              <MenuItem value="">Select a Branch</MenuItem>
              {branchesData.map((branch: any) => (
                <MenuItem key={branch.id} value={branch.id}>
                  {branch.name}
                </MenuItem>
              ))}
            </ControlledSelectField>

            {disableSelectPatient ? null : (
              <ControlledSelectField
                input={SelectField}
                defaultValue=""
                name="patient"
                control={control}
                label="Select a Patient"
                variant="filled"
                sx={{
                  width: '100%',
                }}
                helperText={
                  errors?.patient ? errors.patient.message : undefined
                }
                error={errors?.patient ? true : false}
              >
                <MenuItem value="">Select a Patient</MenuItem>
                {patientsData.map(
                  ({
                    id,
                    fname,
                    lname,
                  }: {
                    id: string;
                    fname: string;
                    lname: string;
                  }) => (
                    <MenuItem key={id} value={id}>
                      {formatName_surname(fname, lname)}
                    </MenuItem>
                  ),
                )}
              </ControlledSelectField>
            )}

            <ControlledSelectField
              input={SelectField}
              defaultValue=""
              name="userId"
              control={control}
              label="Select a Doctor"
              variant="filled"
              sx={{
                width: '100%',
              }}
              helperText={errors?.doctor ? errors.doctor.message : undefined}
              error={errors?.doctor ? true : false}
            >
              <MenuItem value="">Select a Doctor</MenuItem>
              {usersData.map(
                ({
                  id,
                  fname,
                  lname,
                }: {
                  id: string;
                  fname: string;
                  lname: string;
                }) => (
                  <MenuItem key={id} value={id}>
                    {formatName_surname(fname, lname)}
                  </MenuItem>
                ),
              )}
            </ControlledSelectField>
            <ControlledSelectField
              input={SelectField}
              defaultValue=""
              name="serviceId"
              control={control}
              label="Select a Service"
              variant="filled"
              sx={{
                width: '100%',
              }}
              helperText={errors?.service ? errors.service.message : undefined}
              error={errors?.service ? true : false}
            >
              <MenuItem value="">Select a Service</MenuItem>
              {servicesData.map(
                ({ id, name }: { id: string; name: string }) => {
                  return (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  );
                },
              )}
            </ControlledSelectField>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontVariant: 'none', width: '100%' }}
              onClick={(e) => {
                handleSubmit(createAppointment)(e);
              }}
            >
              Make Appointment
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};

CreateAppointmentModal.propTypes = {
  createAppointment: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

export default CreateAppointmentModal;

