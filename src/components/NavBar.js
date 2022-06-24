import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';

import logo from '../assets/images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const CustomLink = ({ to, linkName, currentPathName, onClick, ...props }) => (
	<Link
		onClick={() => {
			onClick(window.location.hash === '' ? window.location.pathname : window.location.hash);
		}}
		to={to}
		style={{ textDecoration: 'none' }}>
		<Typography
			color={currentPathName === to ? 'primary' : 'black'}
			fontWeight={300}
			fontSize='14px'
			fontFamily='Titillium Web'>
			{linkName.toUpperCase()}
		</Typography>
	</Link>
);
CustomLink.propTypes = {
	to: PropTypes.string.isRequired,
	linkName: PropTypes.string.isRequired,
	currentPathName: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	props: PropTypes.shape({ [PropTypes.string]: PropTypes.any }),
};
const CustomIdLink = ({ to, linkName, currentPathName, onClick, ...props }) => {
	return (
		<a
			href={to}
			onClick={() => {
				onClick(window.location.hash === '' ? window.location.pathname : window.location.hash);
			}}
			style={{ textDecoration: 'none' }}>
			<Typography
				color={currentPathName === to ? 'primary' : 'black'}
				fontWeight={300}
				fontSize='14px'
				fontFamily='Titillium Web'>
				{linkName.toUpperCase()}
			</Typography>
		</a>
	);
};
CustomIdLink.propTypes = {
	to: PropTypes.string.isRequired,
	linkName: PropTypes.string.isRequired,
	currentPathName: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	props: PropTypes.shape({ [PropTypes.string]: PropTypes.any }),
};

function NavBar() {
	const theme = useTheme();
	const [selectedLink, setSelectedLink] = useState(
		window.location.hash === '' ? window.location.pathname : window.location.hash,
	);

	console.log(selectedLink, 'selectedLink');

	const highlightLink = async (e) => {
		console.log(window.location, 'window location');
		setSelectedLink(window.location.hash === '' ? window.location.pathname : window.location.hash);
	};

	// useEffect(() => {
	// 	const unListen = window.addEventListener('hashchange', () => {
	// 		console.log(window.location.hash, 'hash');
	// 	});
	// });

	return (
		<Box
			component='div'
			sx={{
				display: 'flex',
				flexFlow: 'column nowrap',
				width: '100%',
				alignItems: 'center',
				padding: '0px 20px',
			}}>
			<Box
				component='div'
				sx={{
					display: 'flex',
					position: 'sticky',
					top: '-1px',
					height: '80px',
					width: 'calc(100% - 66.5px)',
					maxWidth: '1100px',
					margin: '30px 66.5px 0px 0px',
					padding: '0px 66.5px 0px 0px',
					background: theme.colors.grey,
					borderRadius: '53px',
					zIndex: 100,
				}}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						width: '100%',
					}}>
					<Grid item xs='auto'>
						<img src={logo} alt='logo holder' />
					</Grid>
					<Grid container item xs='auto' gap='15px' alignItems='center' sx={{ margin: '0px auto' }}>
						<Grid item>
							<CustomLink
								currentPathName={selectedLink}
								onClick={setSelectedLink}
								to='/home'
								linkName='home'
							/>
						</Grid>
						<Grid item>
							<CustomIdLink
								currentPathName={selectedLink}
								onClick={setSelectedLink}
								to='#about-us'
								linkName='About us'
							/>
						</Grid>
						<Grid item>
							<CustomIdLink
								currentPathName={selectedLink}
								onClick={setSelectedLink}
								to='#services'
								linkName='SERVICES'
							/>
						</Grid>
						<Grid item>
							<CustomIdLink
								currentPathName={selectedLink}
								onClick={setSelectedLink}
								to='#our-methods'
								linkName='OUR METHODS'
							/>
						</Grid>
						<Grid item>
							<CustomIdLink
								currentPathName={selectedLink}
								onClick={setSelectedLink}
								to='#gallery'
								linkName='GALLERY'
							/>
						</Grid>
						<Grid item>
							<CustomIdLink
								currentPathName={selectedLink}
								onClick={setSelectedLink}
								to='#our-people'
								linkName='OUR PEOPLE'
							/>
						</Grid>
						<Grid item>
							<CustomIdLink
								currentPathName={selectedLink}
								onClick={setSelectedLink}
								to='#get-in-touch'
								linkName='GET IN TOUCH'
							/>
						</Grid>
						<Grid item>
							<CustomLink
								currentPathName={selectedLink}
								onClick={setSelectedLink}
								to='/sign-in'
								linkName='SIGN IN'
							/>
						</Grid>
						<Grid item>
							<CustomLink
								currentPathName={selectedLink}
								onClick={setSelectedLink}
								to='/sign-up'
								linkName='SIGN UP'
							/>
						</Grid>
					</Grid>
				</Box>
				<Button
					color='primary'
					variant='contained'
					sx={{
						padding: '15px 20px',
						position: 'absolute',
						left: '100%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
						zIndex: 2,
					}}>
					<Typography fontWeight={700} fontSize='14px' fontFamily='Titillium Web'>
						APPOINTMENT
					</Typography>
				</Button>
			</Box>
		</Box>
	);
}

export default NavBar;
