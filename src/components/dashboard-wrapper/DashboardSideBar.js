import { Avatar, Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { formatName_Type } from '../../utils/formatName_Type';
import DashboardSideBarLinks from './DashboardSideBarLinks';
const userData = {
	avatar:
		'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-light-gray-silhouette-avatar-png-image_3418403.jpg',
	fname: 'Emmanuel',
	lname: 'NTIVUGURUZWA',
	userType: 'THERAPIST',
};

function DashboardSideBar() {
	const theme = useTheme();

	return (
		<Box
			sx={{
				padding: '10px',
				height: '100%',
				width: '100%',
				maxWidth: 'max-content',
				display: 'flex',
				flexFlow: 'column nowrap',
				gap: '10px',
				'& *': {
					overflowX: 'auto',
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
				}}>
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
			<DashboardSideBarLinks
				sx={{
					width: '100%',
					background: 'white',
					borderRadius: '5px',
					flexGrow: 1,
				}}></DashboardSideBarLinks>
		</Box>
	);
}

export default DashboardSideBar;
