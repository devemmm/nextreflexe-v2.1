import { Box, Typography } from '@mui/material';

import NavBarContainer from '../components/NavBar/NavBarContainer';

function HomePage() {
	return (
		<NavBarContainer>
			<Box height='200vh' component='div' id='about-us'>
				<Typography>About us</Typography>
			</Box>
			<Box height='200vh' component='div' id='services'>
				<Typography>services</Typography>
			</Box>
			<Box height='200vh' component='div' id='our-methods'>
				<Typography>our methods</Typography>
			</Box>
			<Box height='200vh' component='div' id='gallery'>
				<Typography>gallery</Typography>
			</Box>
			<Box height='200vh' component='div' id='our-people'>
				<Typography>our people</Typography>
			</Box>
			<Box height='200vh' component='div' id='get-in-touch'>
				<Typography>get in touch</Typography>
			</Box>
		</NavBarContainer>
	);
}

export default HomePage;
