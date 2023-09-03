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
import InputField from '../components/inputField';
import NavBarContainer from '../components/NavBar/NavBarContainer';
import {
  loadingSignInUserAction,
  signInUserAction,
  userErrorAction,
} from '../redux/reducers/user.reducer';
import { loginSchema } from '../validations/login.validation';

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const { loadingSignIn } = useSelector((state: any) => state.userReducer);
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
  const onsubmit = (data: any) => {
    dispatch(loadingSignInUserAction({}));
    axiosInstance
      .post('/users/signin', data)
      .then((res) => {
        localStorage.setItem('userCredentials', JSON.stringify(res.data.data));
        dispatch(signInUserAction(res.data));
        navigate('/dashboard');
      })
      .catch((error) => {
        dispatch(userErrorAction(error.response?.data?.message));
        toast.error(error.response.data.message);
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
          alignItems: 'center',
          height: 'max-content',
          paddingY: 1,
        }}
      >
        <CssBaseline />

        <Box
          sx={{
            display: 'flex',
            marginTop: '20px',
            flexDirection: 'column',
            alignItems: 'center',
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
          <Grid container>
            <Typography
              id="loginTitle"
              variant="h5"
              sx={{
                fontSize: { xs: '20px', md: '26px' },
                fontWeight: '800',
                fontFamily: 'Josefin Sans, sans-serif',
                color: '#018F55',
                margin: '30px 10px 10px 30px',
              }}
            >
              Signin
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit(onsubmit)} style={{ marginTop: 1 }}>
            <Grid
              container
              direction="column"
              sx={{ display: 'flex' }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <ControlledInputs
                  name="email"
                  label="Email"
                  control={control}
                  input={InputField}
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
                  input={InputField}
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
                  value={
                    loadingSignIn ? (
                      <CircularProgress sx={{ color: 'white' }} />
                    ) : (
                      'Signin'
                    )
                  }
                />
              </Grid>
              <Grid item>
                <Grid container justifyContent="center" marginBottom="40px">
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

