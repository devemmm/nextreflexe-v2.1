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
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../axios.instance';
import Buttons from '../components/buttons';
import ControlledInputs from '../components/controlledInput';
import NavBarContainer from '../components/NavBar/NavBarContainer';
import {
  loadingSignInUserAction,
  signInUserAction,
  userErrorAction,
} from '../redux/reducers/user.reducer';
import { loginSchema } from '../validations/login.validation';

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const { loadingSignIn } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const onsubmit = (data) => {
    dispatch(loadingSignInUserAction({}));
    axiosInstance
      .post('/users/signin', data)
      .then((res) => {
        localStorage.setItem('userCredentials', JSON.stringify(res.data.data));
        dispatch(signInUserAction(res.data));
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(errors);
        dispatch(userErrorAction(error.message));
        toast.error(error.message);
      });
  };

  return (
    <NavBarContainer>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          // marginTop: 10,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            marginTop: '20px',
            flexDirection: 'column',
            alignItems: 'center',
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
            id="loginTitle"
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
            Signin
          </Typography>
          <form
            onSubmit={handleSubmit(onsubmit)}
            style={{ mt: 1, width: '100%' }}
          >
            <Grid
              container
              direction="column"
              // sx={{ display: 'flex' }}
              justifyContent="space-between"
              alignItems="center"
            >
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
                <Link
                  to="#"
                  style={{
                    color: '#018F55',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '12px',
                    marginTop: '20px',
                  }}
                >
                  Forgot your password?
                </Link>
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
                    loadingSignIn ? (
                      <CircularProgress sx={{ color: 'white' }} />
                    ) : (
                      'Signin'
                    )
                  }
                />
              </Grid>
              <Grid item width="100%">
                <Grid container justifyContent="center" marginBottom="10px">
                  <Grid item>
                    <Link
                      to="/signup"
                      style={{
                        fontFamily: 'Open sans, sans-serif',
                        textDecoration: 'none',
                      }}
                    >
                      <span style={{ fontWeight: 100, color: '#000' }}>
                        Not a member?
                      </span>
                      <span style={{ color: '#018F55' }}> Signup Now</span>
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
