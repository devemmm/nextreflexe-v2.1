import { Key, useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ObjectType } from 'src/types/dashboardTypes';
import { registerPatientSchema } from 'src/validations/patients.validation';
import axiosInstance from '../../axios.instance';
import ControlledDatePicker from '../ControlledDatePicker';
import ControlledSelectField from '../ControlledSelectField';
import InputFieldFilled from '../InputFieldFilled';
import SelectField from '../SelectField';
import ControlledInputs from '../controlledInput';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {
  appointmentsErrorAction,
  createAppointmentAction,
  pendingCreateAppointmentAction,
} from 'src/redux/reducers/appointments.reducer';

const AppointmentForm = ({ close }: any) => {
  const dispatch = useDispatch();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerPatientSchema),
  });
  const theme = useTheme();
  const [services, setServices] = useState<any>([]);
  const [therapist, setTherapist] = useState<any>([]);

  const handleCreateAppointment = (data: any) => {
    console.log(data);
    dispatch(pendingCreateAppointmentAction());
    axiosInstance
      .post(`appointments/unknown?account=false`, {
        data,
      })
      .then((res) => {
        dispatch(createAppointmentAction(res.data));
        toast.success(`Appointement created`);
      })
      .catch((error) => {
        dispatch(appointmentsErrorAction(error?.response?.data));
        toast.error(error?.response?.data?.message);
      });
  };

  useEffect(() => {
    axiosInstance
      .get(`/branches/basic`)
      .then((res) => {
        console.log(res?.data?.data);
        setServices(res?.data?.data?.services);
        setTherapist(res?.data?.data?.team);
      })
      .catch((error) => {
        setServices([]);
      });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '20px',
        flexDirection: 'column',
        alignItems: 'center',
        // width: {
        //   xs: 350,
        //   sm: 420,
        //   md: 700,
        //   lg: 850,
        //   xl: 700,
        // },
        fontFamily: 'Titillium Web',
        minHeight: '80%',
        bgcolor: 'background.paper',
        padding: '20px',
        border: '2px solid #fff',
        borderRadius: '10px',
        boxShadow: 24,
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Grid
          item
          sx={{
            fontStyle: 'normal',
            fontSize: 40,
            fontWeight: 'bold',
            flex: 1,
          }}
        >
          <Typography variant="h5" color={'#018F55'}>
            Make an Appointment
          </Typography>
        </Grid>

        <Grid item>
          <IconButton style={{ color: '#018F55' }} onClick={() => close(false)}>
            <CloseIcon sx={{ fontWeight: 'bold', fontSize: 34 }} />
          </IconButton>
        </Grid>
      </Grid>
      <Typography variant="body1">
        We provide the most full medical services, so every person could have
        the oportunity to receive qualitative medical help
      </Typography>
      <Grid
        container
        spacing={2}
        component={'form'}
        onSubmit={handleSubmit(handleCreateAppointment)}
      >
        <Grid item md={6}>
          <ControlledInputs
            input={InputFieldFilled}
            name="fname"
            label="First Name *"
            control={control}
            defaultValue=""
            multiline={false}
            {...(errors?.fname && {
              error: true,
              helperText: errors.fname.message,
            })}
          />
        </Grid>
        <Grid item md={6}>
          <ControlledInputs
            label="Last Name *"
            theme={theme}
            input={InputFieldFilled}
            control={control}
            name={'lname'}
            defaultValue=""
            multiline={false}
            {...(errors?.lname && {
              error: true,
              helperText: errors.lname.message,
            })}
          />
        </Grid>
        <Grid item md={6}>
          <ControlledInputs
            label="Your Phone *"
            theme={theme}
            input={InputFieldFilled}
            control={control}
            name={'phone'}
            defaultValue=""
            multiline={false}
            {...(errors?.phone && {
              error: true,
              helperText: errors.phone.message,
            })}
          />
        </Grid>
        <Grid item md={6}>
          <ControlledInputs
            label="Email Address *"
            theme={theme}
            input={InputFieldFilled}
            control={control}
            name={'email'}
            defaultValue=""
            multiline={false}
            {...(errors?.email && {
              error: true,
              helperText: errors.email.message,
            })}
          />
        </Grid>
        <Grid item md={6}>
          <ControlledInputs
            label="National ID *"
            theme={theme}
            input={InputFieldFilled}
            control={control}
            name={'nid'}
            defaultValue=""
            multiline={false}
            {...(errors?.nid && {
              error: true,
              helperText: errors.nid.message,
            })}
          />
        </Grid>

        <Grid item md={6}>
          <ControlledSelectField
            name="serviceId"
            id="serviceId"
            defaultValue=""
            control={control}
            input={SelectField}
            variant="filled"
            label="Select Service"
            sx={{ width: '100%', maxWidth: '942px' }}
            helperText={
              errors?.serviceId ? errors.serviceId.message : undefined
            }
            error={errors?.serviceId ? true : false}
          >
            {services?.map((item: ObjectType, index: number) => {
              return (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              );
            })}
          </ControlledSelectField>
        </Grid>
        <Grid item md={6}>
          <ControlledSelectField
            name="branchId"
            id="branchId"
            defaultValue=""
            control={control}
            input={SelectField}
            variant="filled"
            label="Select Branch"
            sx={{ width: '100%', maxWidth: '942px' }}
            helperText={errors?.branchId ? errors.branchId.message : undefined}
            error={errors?.branchId ? true : false}
          >
            {[
              { id: 'RW01', name: 'GISHUSHU HQ' },
              { id: 'RW02', name: 'KIMIRONKO BR' },
              { id: 'RW03', name: 'RUBAVU BR' },
            ].map((item, index) => {
              return (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              );
            })}
          </ControlledSelectField>
        </Grid>
        <Grid item md={6}>
          <ControlledSelectField
            name="doctorId"
            id="doctorId"
            defaultValue=""
            control={control}
            input={SelectField}
            variant="filled"
            label="Select Therapist"
            sx={{ width: '100%', maxWidth: '942px' }}
            helperText={errors?.doctorId ? errors.doctorId.message : undefined}
            error={errors?.doctorId ? true : false}
          >
            {therapist.map(
              (
                item: { id: string | number; fname: string; lname: string },
                index: Key,
              ) => {
                return (
                  <MenuItem key={index} value={item.id}>
                    {`Thr. ${item.fname} ${item.lname}`}
                  </MenuItem>
                );
              },
            )}
          </ControlledSelectField>
        </Grid>
        <Grid item md={6}>
          <ControlledDatePicker
            name="dob"
            control={control}
            input={InputFieldFilled}
            defaultValue=""
            views={['day', 'month', 'year']}
            disableFuture={false}
            inputProps={{
              label: 'Date of Birth',
              sx: { maxWidth: '942px' },
              inputMode: 'string',
              ...(errors?.dob && {
                error: true,
                helperText: errors.dob.message,
              }),
            }}
          />
        </Grid>
        <Grid item md={6}>
          <ControlledDatePicker
            name="startTime"
            control={control}
            input={InputFieldFilled}
            defaultValue=""
            disableFuture={false}
            disablePast={true}
            inputProps={{
              label: 'Start Time',
              sx: { maxWidth: '942px' },
              inputMode: 'string',
              ...(errors?.startTime && {
                error: true,
                helperText: errors.startTime.message,
              }),
            }}
          />
        </Grid>
        <Grid item md={12}>
          <ControlledInputs
            label="Details *"
            theme={theme}
            input={InputFieldFilled}
            control={control}
            name={'details'}
            defaultValue=""
            multiline={true}
            {...(errors?.details && {
              error: true,
              helperText: errors.details.message,
            })}
          />
        </Grid>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          type="submit"
          sx={{
            paddingY: '10px',
            marginY: '10px',
            marginLeft: 'auto',
            borderRadius: '0px',
          }}
        >
          <Stack direction="row" alignItems="center">
            <Typography
              sx={{
                fontFamily: 'Titillium Web',
                fontWeight: 700,
              }}
            >
              {'CONFIRM APPOINTMENT'}
            </Typography>
          </Stack>
        </Button>
      </Grid>
    </Box>
  );
};

export default AppointmentForm;

