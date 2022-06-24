import React from 'react';
import PropTypes from 'prop-types';

import { Stack, Typography, styled, Box } from '@mui/material';

import locationIcon from '../../assets/icons/location-icon.svg';
import clockIcon from '../../assets/icons/clock-icon.svg';
import instagramIcon from '../../assets/icons/instagram-icon.svg';
import facebookIcon from '../../assets/icons/facebook-icon.svg';
import twitterIcon from '../../assets/icons/twitter-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';

const CustomTypography = styled(Typography)(() => ({
	fontSize: '12px',
	lineHeight: '13px',
	fontWeight: 300,
}));
const CustomIcon = styled('img')(() => ({
	height: '12px',
	aspectRatio: 'auto',
}));

function AboveNavbar({ otherStyles, ...props }) {
	return (
		<Box
			{...props}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '55px',
				...otherStyles,
				'@media (max-width: 644px)': {
					'&': {
						display: 'none !important',
					},
				},
				margin: '5px',
			}}>
			<Stack direction='row' gap='13px' alignItems='center'>
				<CustomIcon src={locationIcon} alt='location icon' />
				<CustomTypography>KG 6st & 8st Kimironko, Gasabo, Rwanda</CustomTypography>
			</Stack>
			<Stack direction='row' gap='13px' alignItems='center'>
				<CustomIcon src={clockIcon} alt='clock icon' />
				<CustomTypography>Sun - Frid 8.00 - 17.00. Saturday CLOSED</CustomTypography>
			</Stack>
			<Stack direction='row' gap='30px' alignItems='center'>
				<CustomIcon src={instagramIcon} alt='instagram icon' />
				<CustomIcon src={facebookIcon} alt='facebook icon' />
				<CustomIcon src={twitterIcon} alt='twitter icon' />
				<CustomIcon src={linkedinIcon} alt='instagram icon' />
			</Stack>
		</Box>
	);
}

AboveNavbar.propTypes = {
	otherStyles: PropTypes.string,
	props: PropTypes.shape({ [PropTypes.string]: PropTypes.any }),
};

export default AboveNavbar;
