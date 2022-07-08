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
import { Container } from '@mui/system';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Buttons from '../components/buttons';
import ControlledInputs from '../components/controlledInput';
import NavBarContainer from '../components/NavBar/NavBarContainer';
import { signupSchema } from '../validations/login.validation';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

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
            width: {
              xs: 350,
              sm: 420,
              md: 420,
              lg: 420,
              xl: 420,
            },
            minHeight: 350,
            bgcolor: 'background.paper',
            border: '2px solid #fff',
            borderRadius: '10px',
            boxShadow: 24,
          }}
        >
          <Grid container alignItems="center">
            <Typography
              id="signinTitle"
              variant="h5"
              sx={{
                fontSize: { xs: '20px', md: '26px' },
                fontWeight: '800',
                fontFamily: 'Josefin Sans, sans-serif',
                color: '#018F55',
                padding: '30px 30px 10px 30px',
              }}
            >
              Signup
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit(onsubmit)} style={{ mt: 1 }}>
            <Grid
              container
              direction="column"
              sx={{ display: 'flex' }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
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
              <Grid item>
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
              <Grid item>
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
              <Grid item>
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
              <Grid item>
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

              <Grid item margin="20px 0px">
                <Buttons
                  variant="contained"
                  sx={{
                    width: {
                      xs: 280,
                      sm: 350,
                    },
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
                  value="Signup"
                />
              </Grid>
              <Grid item>
                <Grid container justifyContent="center" marginBottom="40px">
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
