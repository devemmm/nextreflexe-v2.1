import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  MenuItem,
  Modal,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import { toast } from 'react-toastify';
import axiosInstance from '../../axios.instance';
import {
  pendingVisitAction,
  startVisitAction,
  visitsErrorAction,
} from '../../redux/reducers/visits.reducer';
import fetchVisitsData from '../../utils/fetchVisitsData';
import { createVisitSchema } from '../../validations/visits.validation';
import ControlledSelectField from '../ControlledSelectField';
import SelectField from '../SelectField';

const timeSlots = [30, 45, 60, 90, 120];
function CreateVisitModal({ createVisit, openModal, setOpenModal }: any) {
  const theme = useTheme();
  const dispatch = useDispatch();
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
  const { pending } = useSelector((state: any) => state.visitsReducer);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createVisitSchema),
  });

  function closeModal() {
    reset();
    setOpenModal(false);
  }

  const startVisit = (data: any) => {
    dispatch(pendingVisitAction());
    axiosInstance
      .post('/visits?appointment=false', data)
      .then((res) => {
        dispatch(startVisitAction(res.data));
        toast.success('Visit Started');
        reset();
        setOpenModal(false);
        fetchVisitsData(dispatch);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
        dispatch(visitsErrorAction(error.response.data));
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
              name="patientId"
              control={control}
              label="Select a Patient"
              variant="filled"
              sx={{
                width: '100%',
              }}
              helperText={errors?.patient ? errors.patient.message : undefined}
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
                    {fname} {lname}
                  </MenuItem>
                ),
              )}
            </ControlledSelectField>
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
                    {fname} {lname}
                  </MenuItem>
                ),
              )}
            </ControlledSelectField>
            <ControlledSelectField
              input={SelectField}
              defaultValue=""
              name="time"
              control={control}
              label="Select Time"
              variant="filled"
              sx={{
                width: '100%',
              }}
              helperText={errors?.time && errors.time}
              error={errors?.time ? true : false}
            >
              <MenuItem value="">Select Time</MenuItem>
              {timeSlots.map((t) => (
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
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
                handleSubmit((data) => {
                  startVisit(data);
                })(e);
              }}
            >
              {pending ? (
                <CircularProgress size={20} sx={{ color: 'white' }} />
              ) : (
                'Start Visit'
              )}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

CreateVisitModal.propTypes = {
  createVisit: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

export default CreateVisitModal;

