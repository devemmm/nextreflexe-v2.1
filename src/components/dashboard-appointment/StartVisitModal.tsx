import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  startVisitAction,
  loadingGetVisitsAction,
  visitsErrorAction,
} from '../../redux/reducers/visits.reducer';
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

import { formatName_surname } from '../../utils/formatName_surname';
import { startVisitSchema } from '../../validations/appointments.validation';
import ControlledInputs from '../controlledInput';
import ControlledSelectField from '../ControlledSelectField';
import InputFieldFilled from '../InputFieldFilled';
import SelectField from '../SelectField';
import axiosInstance from '../../axios.instance';
import { toast } from 'react-toastify';
import fetchVisitsData from '../../utils/fetchVisitsData';
import { ObjectType } from 'src/types/dashboardTypes';

function StartVisitModal({
  createVisit,
  appointmentId,
  openModal,
  setOpenModal,
}: ObjectType) {
  const theme = useTheme();
  const { data: servicesData } = useSelector(
    (state: any) => state.servicesReducer,
  );
  const { data: usersData } = useSelector((state: any) => state.doctorReducer);
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
  const dispatch = useDispatch();
  const handleStartVisit = (data: any) => {
    dispatch(loadingGetVisitsAction());
    axiosInstance
      .post('/visits?appointment=true', data)
      .then((res) => {
        dispatch(startVisitAction(res.data));
        fetchVisitsData(dispatch);
        toast.success('Visit Successfully Started');
        closeModal();
      })
      .catch((error) => {
        dispatch(visitsErrorAction(error.response?.data?.message));
        toast.error(error.response.data.message);
      });
  };
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
              name="userId"
              control={control}
              label="Select a Doctor"
              variant="filled"
              sx={{
                width: '100%',
              }}
              helperText={errors?.userId ? errors.userId.message : undefined}
              error={errors?.userId ? true : false}
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
            <ControlledInputs
              name="time"
              control={control}
              input={InputFieldFilled}
              defaultValue=""
              label="Time"
              sx={{ maxWidth: '942px' }}
              {...(errors?.time && {
                error: true,
                helperText: errors.time.message,
              })}
            />
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
              helperText={
                errors?.serviceId ? errors.serviceId.message : undefined
              }
              error={errors?.serviceId ? true : false}
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
                handleSubmit(
                  (data) => {
                    handleStartVisit({ ...data, appointmentId });
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

