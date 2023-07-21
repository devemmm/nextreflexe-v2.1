import React from 'react';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

function DashboardContent({ toogleShowSideBar }) {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				padding: '10px',
				overflowY: 'auto',
			}}>
			<Outlet context={{ toogleShowSideBar }} />
		</Box>
	);
}

DashboardContent.propTypes = {
	toogleShowSideBar: PropTypes.func.isRequired,
};

export default DashboardContent;
