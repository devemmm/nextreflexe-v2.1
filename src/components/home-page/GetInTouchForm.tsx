import { Box, MenuItem, TextField, Typography, useTheme } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import axiosInstance from '../../axios.instance';
import {
  sendMessageAction,
  userErrorAction,
} from '../../redux/reducers/user.reducer';
import Buttons from '../buttons';
import { ObjectType } from 'src/types/dashboardTypes';

export const CustomSelect = ({
  label,
  sx,
  theme,
  data,
  ...props
}: ObjectType) => {
  return (
    <TextField
      fullWidth
      select
      label={label}
      variant="filled"
      color="primary"
      {...props}
      sx={{
        ...sx,
        '& .MuiFilledInput-root:before': {
          borderBottom: `2px solid ${theme.palette.primary.light}`,
        },
        [theme.breakpoints.down(425)]: {
          '& .MuiFilledInput-root': {
            fontSize: '12px',
          },
          '& .MuiInputLabel-root': {
            fontSize: '12px',
          },
          '& .MuiInputLabel-root.focused': {
            fontSize: '9px',
          },
        },
      }}
    >
      {data.map((option: any) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const CustomTextField = ({ label, sx, theme, ...props }: ObjectType) => {
  return (
    <TextField
      fullWidth
      maxRows={4}
      minRows={3}
      variant="filled"
      label={label}
      color="primary"
      {...props}
      sx={{
        ...sx,
        '& .MuiFilledInput-root:before': {
          borderBottom: `2px solid ${theme.palette.primary.light}`,
        },
        [theme.breakpoints.down(425)]: {
          '& .MuiFilledInput-root': {
            fontSize: '12px',
          },
          '& .MuiInputLabel-root': {
            fontSize: '12px',
          },
          '& .MuiInputLabel-root.focused': {
            fontSize: '9px',
          },
        },
      }}
    />
  );
};

function GetInTouchForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
    message: '',
  });
  const [error, setError] = useState({
    names: '',
    email: '',
    phone: '',
    message: '',
  });

  const isValid = () => {
    // eslint-disable-next-line
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (formData.names === '') {
      setError({ ...error, names: 'Name is required' });
      return false;
    }
    if (!formData.email.match(pattern)) {
      setError({ ...error, email: 'Please enter a  valid email' });
      return false;
    }
    if (formData.phone === '') {
      setError({ ...error, phone: 'Phone number is required' });
      return false;
    }
    if (formData.phone.length < 10 || formData.phone.length > 13) {
      setError({
        ...error,
        phone: 'Please enter a valid phone number',
      });
      return false;
    }
    if (formData.message === '') {
      setError({ ...error, message: 'Message is required' });
      return false;
    }
    if (formData.message.length < 5) {
      setError({
        ...error,
        message: 'Message length should be more than 5 characters',
      });
      return false;
    }

    return true;
  };
  const submitMessage = () => {
    if (isValid()) {
      setLoading(true);
      axiosInstance
        .post('/users/contact-us', formData)
        .then((res) => {
          setFormData({ names: '', email: '', phone: '', message: '' });
          setLoading(false);
          toast.success(res.data.data.message);
          dispatch(sendMessageAction(res.data));
        })
        .catch((err) => {
          setLoading(false);
          dispatch(userErrorAction(err.message));
          toast.error(err.message);
        });
    }
  };
  return (
    <Box
      component="form"
      sx={{
        boxShadow:
          '0px 4px 4px rgba(0, 0, 0, 0.1), 5px 20px 25px 5px rgba(0, 0, 0, 0.05), 1px 1px 30px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: {
          xs: '30px 20px',
          md: '40px 30PX',
          lg: '50px 40PX',
        },
        maxWidth: '550px',
        width: { xs: '100%', md: '50%' },
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column nowrap',
        gap: '10px',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 300,
          marginBottom: {
            xs: '10px',
            sm: '25px',
            md: '20px',
            lg: '30px',
          },
          alignSelf: 'start',
        }}
      >
        Leave for us a Message or a querry !
      </Typography>
      <CustomTextField
        label="Full Name *"
        theme={theme}
        onChange={(e: any) => {
          setError({ ...error, names: '' });
          setFormData({ ...formData, names: e.target.value });
        }}
        {...(error?.names && {
          error: true,
          helperText: error.names,
        })}
      />
      <CustomTextField
        label="Email Address *"
        theme={theme}
        onChange={(e: any) => {
          setError({ ...error, email: '' });
          setFormData({ ...formData, email: e.target.value });
        }}
        {...(error?.email && {
          error: true,
          helperText: error.email,
        })}
      />
      <CustomTextField
        label="Your Phone *"
        theme={theme}
        onChange={(e: any) => {
          setError({ ...error, phone: '' });
          setFormData({ ...formData, phone: e.target.value });
        }}
        {...(error?.phone && {
          error: true,
          helperText: error.phone,
        })}
      />
      <CustomTextField
        label="Message *"
        theme={theme}
        multiline
        onChange={(e: any) => {
          setError({ ...error, message: '' });
          setFormData({ ...formData, message: e.target.value });
        }}
        {...(error?.message && {
          error: true,
          helperText: error.message,
        })}
      />
      <Buttons
        variant="contained"
        fullWidth
        color="primary"
        sx={{
          height: 50,
          backgroundColor: '#018F55',
          fontSize: '18px',
          color: 'white',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#018F55',
          },
        }}
        type="button"
        value={
          loading ? (
            <CircularProgress sx={{ color: 'white' }} />
          ) : (
            'Send Message'
          )
        }
        onClick={submitMessage}
      />
    </Box>
  );
}

export default GetInTouchForm;

