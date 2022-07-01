import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Box, Stack, Typography, useTheme } from '@mui/material';

import homeIcon from '../../assets/icons/home-icon.svg';
import patientsIcon from '../../assets/icons/patients-icon-dashboard.svg';
import appointmentsIcon from '../../assets/icons/appointments-icon.svg';
import visitIcon from '../../assets/icons/visit-icon.svg';
import servicesIcon from '../../assets/icons/services-icon.svg';
import branchesIcon from '../../assets/icons/branches-icon-dashboard.svg';
import paymentsIcon from '../../assets/icons/payments-icon.svg';

const CustomLink = ({ to, icon, currentPath, setcurrentPath, theme, linkName }) => {
	return (
		<Link
			to={to}
			style={{ textDecoration: 'none' }}
			onClick={() => {
				setcurrentPath(to);
			}}>
			<Stack
				direction='row'
				gap='10px'
				sx={{
					paddingY: '5px',
					paddingX: '10px',
					marginY: '5px',
					transition: 'all 0.3s ease-in-out',
					background: currentPath !== to ? 'none' : theme.colors.grey,
					borderRight:
						currentPath !== to
							? '0px solid transparent'
							: `4px solid ${theme.palette.primary.main}`,
					'&:hover': {
						background: theme.colors.grey,
					},
				}}>
				<Box component='img' src={icon} alt='icon' width='13px' />
				<Typography color='black'>{linkName}</Typography>
			</Stack>
		</Link>
	);
};

function DashboardSideBarLinks({ sx, ...props }) {
	const theme = useTheme();
	const [currentPath, setcurrentPath] = useState(window.location.pathname);

	return (
		<Box sx={{ paddingX: '20px', paddingY: '40px', ...sx }} {...props}>
			<CustomLink
				to='/dashboard'
				linkName={'Dashboard'}
				icon={homeIcon}
				currentPath={currentPath}
				setcurrentPath={setcurrentPath}
				theme={theme}
			/>
			<CustomLink
				to='/dashboard/patients'
				linkName={'Patients'}
				icon={patientsIcon}
				currentPath={currentPath}
				setcurrentPath={setcurrentPath}
				theme={theme}
			/>
			<CustomLink
				to='/Dashboard/appointments'
				linkName={'Appointments'}
				icon={appointmentsIcon}
				currentPath={currentPath}
				setcurrentPath={setcurrentPath}
				theme={theme}
			/>
			<CustomLink
				to='/Dashboard/visits'
				linkName={'Visits'}
				icon={visitIcon}
				currentPath={currentPath}
				setcurrentPath={setcurrentPath}
				theme={theme}
			/>
			<CustomLink
				to='/Dashboard/services'
				linkName={'Services'}
				icon={servicesIcon}
				currentPath={currentPath}
				setcurrentPath={setcurrentPath}
				theme={theme}
			/>
			<CustomLink
				to='/Dashboard/branches'
				linkName={'Branches'}
				icon={branchesIcon}
				currentPath={currentPath}
				setcurrentPath={setcurrentPath}
				theme={theme}
			/>
			<CustomLink
				to='/Dashboard/payments'
				linkName={'Payments'}
				icon={paymentsIcon}
				currentPath={currentPath}
				setcurrentPath={setcurrentPath}
				theme={theme}
			/>
			<CustomLink
				to='/Dashboard/users'
				linkName={'Users'}
				icon={paymentsIcon}
				currentPath={currentPath}
				setcurrentPath={setcurrentPath}
				theme={theme}
			/>
		</Box>
	);
}

export default DashboardSideBarLinks;
