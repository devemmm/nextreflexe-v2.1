import { Box, Skeleton } from '@mui/material';
import { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { useDispatch, useSelector } from 'react-redux';
import '../../src/styles/ScrollImage.css';
import axiosInstance from '../axios.instance';
import Footer from '../components/Footer';
import HeaderTitle from '../components/home-page/HeaderTitle';
import Loading from '../components/Loading';
import NavBarContainer from '../components/NavBar/NavBarContainer';
import {
  getDataAction,
  HomePageErrorAction,
  loadingGetDataAction
} from '../redux/reducers/home.reducer';

export default function Gallery() {
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
        dispatch(HomePageErrorAction(error.message));
      });
  }, [dispatch]);
  return (
    data.gallery !== undefined && (
      <NavBarContainer>
        <HeaderTitle
          data="Gallery"
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
          <Box>
            <ImageGallery
              autoPlay={true}
              items={data.gallery}
              additionalClass="gallery_img"
            />
          </Box>
        )}
        <Footer />
      </NavBarContainer>
    )
  );
}

