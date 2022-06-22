import { Box, Skeleton } from '@mui/material';
import About from '../components/home-page/About';
import GetInTouch from '../components/home-page/GetInTouch';
import OurMethods from '../components/home-page/OurMethods';

import ScrollImage from '../components/home-page/ScrollImage';
import Services from '../components/home-page/Services';
import Testimonials from '../components/home-page/Testimonials';
import WorkHours from '../components/home-page/WorkHours';
import Loading from '../components/Loading';
import NavBarContainer from '../components/NavBar/NavBarContainer';

function HomePage() {
  const loading = false;

  return loading ? (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#65FFC0',
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
    <NavBarContainer>
      <Box maxWidth="1440px" width="100%" margin="0px auto">
        <Box height="max-content" component="div" marginTop="30px">
          <ScrollImage />
        </Box>
        <Box component="div" id="about-us">
          <About />
        </Box>
        <Box component="div" id="services">
          <Services />
        </Box>
        <Box component="div" id="our-methods">
          <OurMethods />
        </Box>
        <Box component="div">
          <WorkHours />
        </Box>
        <Box component="div" id="get-in-touch">
          <GetInTouch />
        </Box>
        <Box component="div">
          <Testimonials />
        </Box>
      </Box>
    </NavBarContainer>
  );
}

export default HomePage;

