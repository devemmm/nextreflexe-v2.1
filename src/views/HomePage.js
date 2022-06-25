import { Box, Typography } from '@mui/material';
import About from '../components/home-page/About';

import ScrollImage from '../components/home-page/ScrollImage';
import NavBarContainer from '../components/NavBar/NavBarContainer';

function HomePage() {
	return (
		<NavBarContainer>
			<Box maxWidth='1440px' width='100%' margin='0px auto'>
				<Box height='max-content' component='div' marginTop='30px'>
					<ScrollImage />
				</Box>
				<Box component='div' id='about-us'>
					<About />
				</Box>
				<Box height='100vh' component='div' id='services'>
					<Typography>services</Typography>
				</Box>
				<Box height='100vh' component='div' id='our-methods'>
					<Typography>our methods</Typography>
				</Box>
				<Box height='100vh' component='div' id='gallery'>
					<Typography>gallery</Typography>
				</Box>
				<Box height='100vh' component='div' id='our-people'>
					<Typography>our people</Typography>
				</Box>
				<Box height='100vh' component='div' id='get-in-touch'>
					<Typography>get in touch</Typography>
				</Box>
			</Box>
		</NavBarContainer>
	);
}

export default HomePage;
