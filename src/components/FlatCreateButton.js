import React from 'react';
import PropTypes from 'prop-types';

import { Button, Stack, Typography } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

function FlatCreateButton({ text, sx, ...props }) {
	return (
		<Button
			variant='contained'
			color='primary'
			disableElevation
			sx={{
				paddingY: '10px',
				marginY: '10px',
				marginLeft: 'auto',
				borderRadius: '0px',
				...sx,
			}}
			{...props}>
			<Stack direction='row' alignItems='center'>
				<AddRoundedIcon
					sx={{
						color: 'white',
						padding: 0,
					}}
				/>
				<Typography
					sx={{
						fontFamily: 'Titillium Web',
						fontWeight: 700,
					}}>
					Register a Patient
				</Typography>
			</Stack>
		</Button>
	);
}

FlatCreateButton.propTypes = {
	text: PropTypes.string.isRequired,
	[PropTypes.string]: PropTypes.any,
};

export default FlatCreateButton;
