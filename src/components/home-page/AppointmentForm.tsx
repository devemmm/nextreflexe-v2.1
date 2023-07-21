import { useEffect, useReducer, useState } from 'react';

import { useTheme } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import moment from 'moment';
import { CustomSelect, CustomTextField } from './GetInTouchForm';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axiosInstance from '../../axios.instance';
import FlatCreateButton from '../FlatCreateButton';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'fname':
      return { ...state, fname: action.payload };
    case 'lname':
      return { ...state, lname: action.payload };
    case 'phone':
      return { ...state, phone: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'nid':
      return { ...state, nid: action.payload };
    case 'branchId':
      return { ...state, branchId: action.payload };
    case 'serviceId':
      return { ...state, serviceId: action.payload };
    case 'userId':
      return { ...state, userId: action.payload };
    case 'dob':
      return { ...state, dob: action.payload };
    case 'startTime':
      return { ...state, startTime: action.payload };
    default:
      return { ...state };
  }
};

const handleCreateAppointment = async ({ patient, setError, close }: any) => {
  axiosInstance
    .post(`appointments/unknown?account=false`, {
      ...patient,
    })
    .then((res) => {
      setError('');
      close();
    })
    .catch((error) => {
      setError(error?.response?.data?.message);
    });
};

const AppointmentForm = ({ close }: any) => {
  const theme = useTheme();
  const [value] = useState(new Date());
  const [services, setServices] = useState<any>([]);
  const [therapist, setTherapist] = useState<any>([]);
  const [servicesToDisplay, setServicesToDisplay] = useState<any>([]);
  const [therapistToDisplay, setTherapistToDisplay] = useState<any>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axiosInstance
      .get(`/branches/basic`)
      .then((res) => {
        setServices(res?.data?.data?.services);
        setTherapist(res?.data?.data?.team);
        res?.data?.data?.services.map((item: any) => {
          return setServicesToDisplay((prevArray: any) => [
            ...prevArray,
            item.name,
          ]);
        });
        res?.data?.data?.team.map((item: any) => {
          return setTherapistToDisplay((prevArray: any) => [
            ...prevArray,
            `Thr. ${item.fname} ${item.lname}`,
          ]);
        });
      })
      .catch((error) => {
        setServices([]);
      });
  }, []);

  const [state, dispatch] = useReducer(reducer, {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    nid: '',
    dob: '',
    branchId: '',
    serviceId: '',
    startTime: '',
  });

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
      <Typography
        variant="inherit"
        color={'red'}
        sx={{ marginBottom: '20px', fontSize: '20px', fontWeight: 'bold' }}
      >
        {error}
      </Typography>

      <Typography variant="body1">
        We provide the most full medical services, so every person could have
        the oportunity to receive qualitative medical help
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <CustomTextField
            label="First Name *"
            theme={theme}
            value={state.fname}
            onChange={(e: any) => {
              e.preventDefault();
              dispatch({ type: 'fname', payload: e.target.value });
            }}
            // onChange={(e) => {
            //   setError({ ...error, names: null });
            //   setFormData({ ...formData, names: e.target.value });
            // }}
            // {...(error?.names && {
            //   error: true,
            //   helperText: error.names,
            // })}
          />
        </Grid>
        <Grid item md={6}>
          <CustomTextField
            label="Last Name *"
            theme={theme}
            onChange={(e: any) => {
              e.preventDefault();
              dispatch({ type: 'lname', payload: e.target.value });
            }}
            // onChange={(e) => {
            //   setError({ ...error, names: null });
            //   setFormData({ ...formData, names: e.target.value });
            // }}
            // {...(error?.names && {
            //   error: true,
            //   helperText: error.names,
            // })}
          />
        </Grid>
        <Grid item md={6}>
          <CustomTextField
            label="Your Phone *"
            theme={theme}
            onChange={(e: any) => {
              e.preventDefault();
              dispatch({ type: 'phone', payload: e.target.value });
            }}
            // onChange={(e) => {
            //   setError({ ...error, phone: null });
            //   setFormData({ ...formData, phone: e.target.value });
            // }}
            // {...(error?.phone && {
            //   error: true,
            //   helperText: error.phone,
            // })}
          />
        </Grid>
        <Grid item md={6}>
          <CustomTextField
            label="Email Address *"
            theme={theme}
            onChange={(e: any) => {
              e.preventDefault();
              dispatch({ type: 'email', payload: e.target.value });
            }}
            // onChange={(e) => {
            //   setError({ ...error, email: null });
            //   setFormData({ ...formData, email: e.target.value });
            // }}
            // {...(error?.email && {
            //   error: true,
            //   helperText: error.email,
            // })}
          />
        </Grid>
        <Grid item md={6}>
          <CustomTextField
            label="NID"
            theme={theme}
            onChange={(e: any) => {
              e.preventDefault();
              dispatch({ type: 'nid', payload: e.target.value });
            }}
          />
        </Grid>

        <Grid item md={6}>
          <CustomSelect
            label="Select Service"
            theme={theme}
            data={[...new Set(servicesToDisplay)]}
            onChange={(e: any) => {
              e.preventDefault();
              dispatch({
                type: 'serviceId',
                payload: services.find(
                  (ser: any) => ser.name === e.target.value,
                ).id,
              });
            }}
          />
        </Grid>
        <Grid item md={6}>
          <CustomSelect
            label="Select Branch"
            theme={theme}
            data={['..', 'GISHUSHU HQ', 'KIMIRONKO BR', 'RUBAVU BR']}
            onChange={(e: any) => {
              e.preventDefault();
              dispatch({
                type: 'branchId',
                payload: e.target.value === 'GISHUSHU HQ' ? 'RW01' : 'RW02',
              });
            }}
          />
        </Grid>
        <Grid item md={6}>
          <CustomSelect
            label="Select Therapist"
            theme={theme}
            data={[...new Set(therapistToDisplay)]}
            onChange={(e: any) => {
              e.preventDefault();
              dispatch({
                type: 'userId',
                payload: therapist.find(
                  (ther: any) =>
                    `Thr. ${ther.fname} ${ther.lname}` === e.target.value,
                ).id,
              });
            }}
          />
        </Grid>
        <Grid item md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={['day', 'month', 'year']}
              label="Date of Birth"
              value={value}
              onChange={(e) => {
                dispatch({
                  type: 'dob',
                  payload: moment(e).format('YYYY-MM-DD HH:mm:ss'),
                });
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={['day', 'month', 'year']}
              label="Invert the order of views"
              value={value}
              onChange={(e) => {
                dispatch({
                  type: 'startTime',
                  payload: moment(e).format('YYYY-MM-DD HH:mm:ss'),
                });
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item md={12}>
          <CustomTextField
            label="Details *"
            theme={theme}
            multiline
            // onChange={(e) => {
            //   setError({ ...error, message: null });
            //   setFormData({ ...formData, message: e.target.value });
            // }}
            // {...(error?.message && {
            //   error: true,
            //   helperText: error.message,
            // })}
          />
        </Grid>
        <FlatCreateButton
          text="Comfirm Appointment"
          postion="center"
          icon={'none'}
          onClick={() =>
            handleCreateAppointment({
              patient: state,
              setError,
              close: () => close(false),
            })
          }
        />
      </Grid>
    </Box>
  );
};

export default AppointmentForm;

