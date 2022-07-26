import * as React from 'react';

import { useTheme } from '@emotion/react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CustomSelect, CustomTextField } from './GetInTouchForm';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AppointmentForm = ({ close }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(new Date());
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
          <Typography variant="h5" color={theme.colors.primary}>
            Make an Appointment
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            style={{ color: theme.colors.primary }}
            onClick={() => close(false)}
          >
            <CloseIcon sx={{ fontWeight: 'bold', fontSize: 34 }} />
          </IconButton>
        </Grid>
      </Grid>
      <Typography variant="p">
        We provide the most full medical services, so every person could have
        the oportunity to receive qualitative medical help
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <CustomTextField
            label="First Name *"
            theme={theme}
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={['day', 'month', 'year']}
              label="Invert the order of views"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item md={6}>
          <CustomSelect
            label="Select Service"
            theme={theme}
            data={['Kigali', 'Gasabo', 'Kicukiro']}
          />
        </Grid>
        <Grid item md={6}>
          <CustomSelect
            label="Select Branch"
            theme={theme}
            data={['Kigali', 'Gasabo', 'Kicukiro']}
          />
        </Grid>
        <Grid item md={6}>
          <CustomSelect
            label="Select Therapist"
            theme={theme}
            data={['Kigali', 'Gasabo', 'Kicukiro']}
          />
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
      </Grid>
    </Box>
  );
};

export default AppointmentForm;
