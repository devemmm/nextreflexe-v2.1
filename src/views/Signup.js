import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  Box,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '@mui/system';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Buttons from '../components/buttons';
import ControlledInputs from '../components/controlledInput';
import NavBarContainer from '../components/NavBar/NavBarContainer';
import { signupSchema } from '../validations/login.validation';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const { loadingSignUp } = useSelector((state) => state.userReducer);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(signupSchema),
  });
  const onsubmit = (data) => {
    console.log(data);
    toast.success('User registered successfully 👍. Please login to proceed.');
  };
  return (
    <NavBarContainer>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: { xs: '20px', sm: '20px', md: '100px' },
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: {
              xs: 350,
              sm: 420,
              md: 420,
              lg: 420,
              xl: 420,
            },
            width: '100%',
            // minHeight: 350,
            height: 'max-content',
            bgcolor: 'background.paper',
            border: '2px solid #fff',
            borderRadius: '10px',
            boxShadow: 24,
            padding: {
              xs: '15px',
              sm: '20px',
              md: '30px',
            },
          }}
        >
          <Typography
            id="signinTitle"
            variant="h5"
            sx={{
              alignSelf: 'start',
              fontSize: { xs: '20px', md: '26px' },
              fontWeight: '800',
              fontFamily: 'Josefin Sans, sans-serif',
              color: '#018F55',
              marginY: '10px',
            }}
          >
            Signup
          </Typography>
          <form onSubmit={handleSubmit(onsubmit)} style={{ mt: 1 }}>
            <Grid
              container
              direction="column"
              // sx={{ display: 'flex' }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item width="100%">
                <ControlledInputs
                  name="firstName"
                  label="First Name"
                  control={control}
                  {...(errors?.firstName && {
                    error: true,
                    helperText: errors.firstName.message,
                  })}
                  sx={{ maxWidth: '250px' }}
                />
              </Grid>
              <Grid item width="100%">
                <ControlledInputs
                  name="lastName"
                  label="Last Name"
                  control={control}
                  {...(errors?.lastName && {
                    error: true,
                    helperText: errors.lastName.message,
                  })}
                />
              </Grid>
              <Grid item width="100%">
                <ControlledInputs
                  name="email"
                  label="Email"
                  control={control}
                  {...(errors?.email && {
                    error: true,
                    helperText: errors.email.message,
                  })}
                />
              </Grid>
              <Grid item width="100%">
                <ControlledInputs
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  control={control}
                  {...(errors?.password && {
                    error: true,
                    helperText: errors.password.message,
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                          edge="end"
                          data-testid="visibility-button"
                        >
                          {showPassword ? (
                            <VisibilityIcon sx={{ color: '#018F55' }} />
                          ) : (
                            <VisibilityOffIcon sx={{ color: '#018F55' }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item width="100%">
                <ControlledInputs
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showPassword ? 'text' : 'password'}
                  control={control}
                  {...(errors?.confirmPassword && {
                    error: true,
                    helperText: errors.confirmPassword.message,
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                          edge="end"
                          data-testid="visibility-button"
                        >
                          {showPassword ? (
                            <VisibilityIcon sx={{ color: '#018F55' }} />
                          ) : (
                            <VisibilityOffIcon sx={{ color: '#018F55' }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item margin="20px 0px" width="100%">
                <Buttons
                  variant="contained"
                  sx={{
                    maxWidth: {
                      xs: 280,
                      sm: 350,
                    },
                    width: '100%',
                    height: 50,
                    backgroundColor: '#018F55',
                    fontSize: '18px',
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#018F55',
                    },
                  }}
                  type="submit"
                  value={
                    loadingSignUp ? (
                      <CircularProgress sx={{ color: 'white' }} />
                    ) : (
                      'Signup'
                    )
                  }
                />
              </Grid>
              <Grid item width="100%">
                <Grid container justifyContent="center" marginBottom="10px">
                  <Grid item>
                    <Link
                      to="/signin"
                      style={{
                        fontFamily: 'Open sans, sans-serif',
                        textDecoration: 'none',
                      }}
                    >
                      <span style={{ fontWeight: 100, color: '#000' }}>
                        Already have account?
                      </span>
                      <span style={{ color: '#018F55' }}> Sign In</span>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </NavBarContainer>
  );
}
