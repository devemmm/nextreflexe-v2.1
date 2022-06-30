import { Box, Typography } from "@mui/material";
import About from "../components/home-page/About";
import OurMethods from "../components/home-page/OurMethods";

import ScrollImage from "../components/home-page/ScrollImage";
import Services from "../components/home-page/Services";
import NavBarContainer from "../components/NavBar/NavBarContainer";

function HomePage() {
  return (
    <NavBarContainer>
      <Box maxWidth="2560px" width="100%" margin="0px auto">
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
        <Box height="100vh" component="div" id="our-people">
          <Typography>our people</Typography>
        </Box>
        <Box height="100vh" component="div" id="get-in-touch">
          <Typography>get in touch</Typography>
        </Box>
      </Box>
    </NavBarContainer>
  );
}

export default HomePage;
