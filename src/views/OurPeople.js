import { useTheme } from '@emotion/react';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../axios.instance';
import HeaderTitle from '../components/home-page/HeaderTitle';
import Loading from '../components/Loading';
import NavBarContainer from '../components/NavBar/NavBarContainer';
import {
  getDataAction,
  HomePageErrorAction,
  loadingGetDataAction,
} from '../redux/reducers/home.reducer';

export default function OurPeople() {
  const theme = useTheme();
  const homePageState = useSelector((state) => state.homePageReducer);
  const { loading, data } = homePageState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingGetDataAction({}));
    axiosInstance
      .get('/branches/basic')
      .then((data) => {
        dispatch(getDataAction(data.data.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(HomePageErrorAction(error.message));
      });
  }, [dispatch]);
  return (
    <NavBarContainer>
      <HeaderTitle
        data="Our People"
        sx={{
          paddingY: { xs: '20px', sm: '25px', md: '30px', lg: '35pxpx' },
        }}
        marginTop={{ xs: '30px', md: '0px' }}
      />
      {loading ? (
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            // background: '#65FFC0',
          }}
        >
          <Loading sx={{ zIndex: 10 }} />
          <Skeleton
            animation="pulse"
            variant="rectangular"
            width="100%"
            height="100%"
            style={{ background: 'rgba(0,0,0,0.1)' }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            background: theme.colors.white,
            display: 'flex',
            padding: {
              xs: '20px',
              sm: '25px',
              md: '40px',
              lg: '65px',
            },
          }}
        >
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            {!loading &&
              data.team !== undefined &&
              data.team.map((person) => (
                <Grid
                  item
                  key={person.id}
                  md={4}
                  lg={3}
                  sm={6}
                  marginBottom="50px"
                >
                  <Card
                    sx={{
                      width: 280,
                      height: 380,
                      borderBottom: 0,
                      ':hover': {
                        borderBottom: '10px solid #018F55',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={person.avatar}
                    />
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography sx={{ fontWeight: 700 }}>
                        {person.fname} {person.lname}
                      </Typography>
                      <Typography sx={{ color: '#018F55', fontWeight: 700 }}>
                        {person.role}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
      )}
    </NavBarContainer>
  );
}

