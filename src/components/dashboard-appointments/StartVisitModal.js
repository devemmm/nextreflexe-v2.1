import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
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

import { startVisitSchema } from '../../validations/appointments.validation';
import ControlledDatePicker from '../ControlledDatePicker';
import ControlledSelectField from '../ControlledSelectField';
import InputFieldFilled from '../InputFieldFilled';
import SelectField from '../SelectField';
import { formatName_surname } from '../../utils/formatName_surname';

function StartVisitModal({ createVisit, openModal, setOpenModal }) {
  const theme = useTheme();
  const { data: servicesData } = useSelector((state) => state.servicesReducer);
  const { data: branchesData } = useSelector((state) => state.branchesReducer);
  const { data: usersData } = useSelector((state) => state.doctorReducer);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(startVisitSchema),
  });

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
            Start a Visit
          </Typography>
          <Stack
            direction="column"
            width="100%"
            margin={0}
            padding={0}
            gap="10px"
          >
            <ControlledSelectField
              input={SelectField}
              defaultValue=""
              name="branch"
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
              {branchesData.map((branch) => (
                <MenuItem key={branch.id} value={branch.id}>
                  {branch.name}
                </MenuItem>
              ))}
            </ControlledSelectField>
            <ControlledSelectField
              input={SelectField}
              defaultValue=""
              name="doctor"
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
              {usersData.map(({ id, fname, lname }) => (
                <MenuItem key={id} value={id}>
                  {formatName_surname(fname, lname)}
                </MenuItem>
              ))}
            </ControlledSelectField>
            <ControlledDatePicker
              input={InputFieldFilled}
              name="time"
              defaultValue=""
              disablePast={true}
              control={control}
              inputProps={{
                label: 'Time',
                width: '100%',
                ...(errors?.time && {
                  error: true,
                  helperText: errors.time.message,
                }),
              }}
            />

            <ControlledSelectField
              input={SelectField}
              defaultValue=""
              name="service"
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
              {servicesData.map(({ id, name }) => {
                return (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                );
              })}
            </ControlledSelectField>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontVariant: 'none', width: '100%' }}
              onClick={(e) => {
                console.log(e, 'event');
                handleSubmit(
                  (data) => {
                    console.log(data);
                  },
                  (error) => {
                    console.log(error);
                  },
                )(e);
              }}
            >
              Make Visit
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

StartVisitModal.propTypes = {
  createVisit: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

export default StartVisitModal;

