import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { formatName_Type } from '../../utils/formatName_Type';
import DashboardSideBarLinks from './DashboardSideBarLinks';

const userData = {
	avatar:
		'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-light-gray-silhouette-avatar-png-image_3418403.jpg',
	fname: 'Emmanuel',
	lname: 'NTIVUGURUZWA',
	userType: 'THERAPIST',
};

const DashboardSideBar = forwardRef((props, ref) => {
	const theme = useTheme();
	const [showSideBar, setShowSideBar] = useState(false);

	useImperativeHandle(ref, () => ({
		toogleShowSideBar: () => {
			setShowSideBar((state) => !state);
		},
	}));

	return (
		<>
			<Box
				sx={{
					transition: 'opacity 0.3s ease-in-out',
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					background: 'rgba(0, 0, 0, 0.4)',
					zIndex: -1,
					opacity: 0,
					[theme.breakpoints.down('md')]: {
						zIndex: showSideBar ? 9 : -1,
						opacity: showSideBar ? 1 : 0,
					},
				}}
				onClick={() => {
					setShowSideBar(false);
				}}
			/>
			<Box
				sx={{
					transition: 'all 0.5s ease-in-out',
					padding: '10px',
					height: '100%',
					maxWidth: 'max-content',
					width: '100%',
					display: 'flex',
					flexFlow: 'column nowrap',
					gap: '10px',
					'& *': {
						overflowX: 'auto',
					},
					zIndex: 10,
					[theme.breakpoints.down('md')]: {
						position: 'absolute',
						top: 0,
						right: '100%',
						transform: showSideBar ? 'translate(100%, 0%)' : '',
						background: 'white',
					},
				}}>
				<Box
					sx={{
						width: '100%',
						height: '137px',
						background: 'white',
						borderRadius: '5px',
						display: 'grid',
						gridTemplateColumns: 'auto auto',
						gridTemplateRows: 'auto auto',
						columnGap: '10px',
						padding: '20px',
						[theme.breakpoints.down('md')]: {
							paddingY: '0px',
							height: '90px',
						},
					}}>
					<IconButton
						color='primary'
						size='20px'
						sx={{
							position: 'absolute',
							top: 0,
							right: 0,
							display: 'none',
							[theme.breakpoints.down('md')]: {
								display: 'flex',
							},
						}}
						onClick={() => {
							setShowSideBar(false);
						}}>
						<CloseIcon />
					</IconButton>
					<Box
						component='img'
						src={userData.avatar}
						alt='avatar'
						sx={{
							width: '65px',
							gridColumn: '1',
							gridRow: '1 / 3',
							justifySelf: 'end',
							alignSelf: 'center',
							borderRadius: '40px',
							border: `0.5px solid ${theme.palette.primary.light}`,
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
					<Typography
						color='primary'
						sx={{
							gridColumn: '2',
							gridRow: '1',
							justifySelf: 'start',
							alignSelf: 'end',
						}}>
						Welcome
					</Typography>
					<Typography
						sx={{
							fontWeight: 700,
							gridColumn: '2',
							gridRow: '2',
							justifySelf: 'start',
							alignSelf: 'start',
						}}>
						{formatName_Type(userData.fname, userData.lname, userData.userType)}
					</Typography>
				</Box>
				<Divider
					variant='middle'
					sx={{
						display: 'none',
						[theme.breakpoints.down('md')]: {
							display: 'flex',
						},
					}}
				/>
				<DashboardSideBarLinks
					setShowSideBar={setShowSideBar}
					sx={{
						paddingX: '20px',
						paddingY: '40px',
						width: '100%',
						background: 'white',
						borderRadius: '5px',
						flexGrow: 1,
						[theme.breakpoints.down('md')]: {
							paddingY: '0px',
						},
					}}
				/>
			</Box>
		</>
	);
});

export default DashboardSideBar;
