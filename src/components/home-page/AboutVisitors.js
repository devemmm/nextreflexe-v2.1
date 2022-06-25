import React from 'react';

import { Box, Grid, styled, Typography } from '@mui/material';

import patientsIcon from '../../assets/icons/patients-icon.svg';
import branchesIcon from '../../assets/icons/branches-icon.svg';
import therapistIcon from '../../assets/icons/therapist-icon.svg';
import experienceIcon from '../../assets/icons/experience-icon.svg';

const datas = [
	{ icon: experienceIcon, title: 'Years of Experience', number: 11 },
	{ icon: therapistIcon, title: 'Therapists', number: 30 },
	{ icon: branchesIcon, title: 'Branches', number: 7 },
	{ icon: patientsIcon, title: 'Happy Patients', number: 10873 },
];

const CustomIcon = styled('img')(({ theme, ...props }) => ({
	width: '65px',
	[theme.breakpoints.up('xs')]: {
		width: '55px',
	},
	[theme.breakpoints.up('sm')]: {
		width: '50px',
	},
	[theme.breakpoints.up('md')]: {
		width: '45px',
	},
	[theme.breakpoints.up('lg')]: {
		width: '40px',
	},
	...props,
}));

function AboutVisitors() {
	return (
		<Grid
			container
			paddingTop='20px'
			justifyContent='center'
			maxWidth={{
				sm: '600px',
				md: '700px',
				lg: '1000px',
			}}
			marginX='auto'>
			{datas.map((data) => {
				return (
					<Grid item xs={12} sm={6} md={3} marginY={{ xs: '10px', sm: '0px' }}>
						<Box
							display='flex'
							flexDirection='column'
							flexFlow='column nowrap'
							gap={{ sm: '5px', md: '10px' }}
							alignItems='center'
							justifyContent='center'>
							<CustomIcon src={data.icon} alt={`${data.title} icon`} />
							<Typography
								sx={{
									fontFamily: 'Titillium Web',
									fontWeight: 700,
									textAlign: 'center',
									whiteSpace: 'nowrap',
									width: 'min-content',
								}}
								color='dark'>
								{data.title}
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Titillium Web',
									fontFeight: 700,
									fontSize: '40px',
								}}>
								{data.number}
							</Typography>
						</Box>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default AboutVisitors;
