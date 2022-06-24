import { Box, Typography } from '@mui/material';
import { useState } from 'react';

import NavBar from '../components/NavBar';

function HomePage() {
	const [sticked, setSticked] = useState(false);
	console.log(sticked, 'sticked');

	const getStickData = (e) => {
		if (e.target.scrollTop >= 32) {
			if (sticked !== true) {
				setSticked(true);
			}
		} else {
			if (sticked !== false) {
				setSticked(false);
			}
		}
	};

	return (
		<Box
			onScroll={getStickData}
			height='100%'
			sx={{
				width: '100%',
				overflowY: 'scroll',
				overflowX: 'hidden',
			}}>
			<NavBar sticked={sticked} />
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
		</Box>
	);
}

export default HomePage;
