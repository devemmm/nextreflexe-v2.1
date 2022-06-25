import React from 'react';
import PropTypes from 'prop-types';

import { Box, styled, Typography } from '@mui/material';

const CustomLine = styled('div')(({ theme, side, ...props }) => ({
	width: '100%',
	maxWidth: '161px',
	height: '0px',
	borderRadius: '15px',
	background: theme.palette.primary.main,
	[theme.breakpoints.up('xs')]: {
		borderWidth: '1.5px',
		maxWidth: '60px',
	},
	[theme.breakpoints.up('sm')]: {
		borderWidth: '2px',
		maxWidth: '100px',
	},
	[theme.breakpoints.up('md')]: {
		borderWidth: '2.5px',
		maxWidth: '130px',
	},
	[theme.breakpoints.up('lg')]: {
		borderWidth: '3px',
	},
	borderStyle: 'solid',
	borderColor: theme.palette.primary.main,
	margin: side === 'left' ? '0px 0px 0px 20px' : '0px 20px 0px 0px',
}));

function HeaderTitle({ data }) {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: {
					xs: '15px',
					sm: '20px',
					md: '30px',
					lg: '35px',
				},
			}}>
			<CustomLine side='left' />
			<Typography
				color='primary'
				sx={{
					fontFamily: 'Titillium Web',
					fontWeight: 700,
					fontSize: {
						xs: '24px',
						sm: '30px',
						md: '36px',
						lg: '48px',
					},
					whiteSpace: 'nowrap',
				}}>
				{data}
			</Typography>
			<CustomLine side='right' />
		</Box>
	);
}
HeaderTitle.propTypes = {
	data: PropTypes.string.isRequired,
};

export default HeaderTitle;
