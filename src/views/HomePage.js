import React from 'react';
import { Box, Typography } from '@mui/material';

import AboveNavbar from '../components/home-page/AboveNavbar';
import NavBar from '../components/NavBar';

function HomePage() {
	return (
		<>
			<Box
				height='200vh'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					position: 'relative',
				}}>
				<AboveNavbar />
				<NavBar />
			</Box>
			<Box height='200vh'>
				<Box component='div' id='about-us'>
					<Typography>About us</Typography>
				</Box>
			</Box>
			<Box height='200vh'>
				<Box component='div' id='services'>
					<Typography>About us</Typography>
				</Box>
			</Box>
		</>
	);
}

export default HomePage;
