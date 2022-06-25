import { Box, Typography } from '@mui/material';

import ScrollImage from '../components/home-page/ScrollImage';
import NavBarContainer from '../components/NavBar/NavBarContainer';

const slideImages = [
	{
		image:
			'https://res.cloudinary.com/tsa2341/image/upload/v1648134443/my-brand-images/ak9goouqpmocqk607chx.jpg',
		header: 'image 1',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor',
	},
	{
		image:
			'https://res.cloudinary.com/tsa2341/image/upload/v1648133085/my-brand-images/np7jlrkn80jjmicvgrul.png',
		header: 'image 2',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor',
	},
	{
		image:
			'https://res.cloudinary.com/tsa2341/image/upload/v1647979220/my-brand-images/kmhwvigvpjqrupzdaooq.png',
		header: 'image 3',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor',
	},
	{
		image:
			'https://res.cloudinary.com/tsa2341/image/upload/v1644967369/my-brand-images/oqraxborurwmjyxgwab7.jpg',
		header: 'image 4',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor',
	},
	{
		image:
			'https://res.cloudinary.com/tsa2341/image/upload/v1644953995/my-brand-images/w9wbet5ydmiuvclwzpza.jpg',
		header: 'image 5',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor',
	},
];

function HomePage() {
	return (
		<NavBarContainer>
			<Box maxWidth='1440px' width='100%' margin='0px auto'>
				<Box height='max-content' component='div' marginTop='30px'>
					<ScrollImage />
				</Box>
				<Box height='100vh' component='div' id='about-us'>
					<Typography>About us</Typography>
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
				<Box
					component='div'
					sx={{
						backgroundImage: `url(${slideImages[0].image})`,
						objectFit: 'cover',
						height: '768px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Box
						sx={{
							backgroundColor: 'rgba(0, 0, 0, 0.7)',
							borderRadius: '2px',
							padding: '20px 25px',
							margin: '35px',
							maxWidth: '839px',
							maxHeight: '216px',
							overflow: 'hidden',
							boxSizing: 'content-box',
						}}>
						<Typography
							color='primary'
							fontFamily='Titillium Web'
							fontWeight='bold'
							fontSize='48px'
							textAlign='center'
							mb={{
								xs: '10px',
								md: '30px',
							}}
							mr='10px'
							sx={{
								overflow: 'hidden',
								textOverflow: 'ellipsis',
							}}>
							{slideImages[0].header}
						</Typography>
						<Typography color='white'>{slideImages[0].body}</Typography>
					</Box>
				</Box>
			</Box>
		</NavBarContainer>
	);
}

export default HomePage;
