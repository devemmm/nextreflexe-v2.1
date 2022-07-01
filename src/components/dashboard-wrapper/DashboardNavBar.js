import { Box, IconButton } from '@mui/material';
import React from 'react';

import logo from '../../assets/images/logo.svg';
import logoutIcon from '../../assets/icons/logout-icon.svg';

function DashboardNavBar({ sx, ...props }) {
	return (
		<Box
			sx={{
				maxWidth: '1440px',
				transformOrigin: 'center',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: {
					xs: '5px 20px',
					sm: '5px 30px',
					md: '5px 40px',
				},
				background: 'white',
				zIndex: 1000,
			}}>
			<Box
				component='img'
				src={logo}
				alt='logo icon'
				sx={{
					height: {
						xs: '15px',
						sm: '20px',
						md: '25px',
					},
				}}
			/>
			<IconButton>
				<Box
					component='img'
					src={logoutIcon}
					alt='logout icon'
					sx={{
						height: {
							xs: '15px',
							sm: '20px',
							md: '25px',
						},
					}}
				/>
			</IconButton>
		</Box>
	);
}

export default DashboardNavBar;
