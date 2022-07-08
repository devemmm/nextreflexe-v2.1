import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@mui/material';

function InputFieldFilled({ label, sx, theme, ...props }) {
	return (
		<TextField
			fullWidth
			maxRows={4}
			minRows={3}
			variant='filled'
			label={label}
			color='primary'
			size='small'
			sx={{
				'& .MuiFilledInput-root:before': {
					borderBottom: `2px solid ${theme.palette.primary.light}`,
				},
				[theme.breakpoints.down(425)]: {
					'& .MuiFilledInput-root': {
						fontSize: '12px',
					},
					'& .MuiInputLabel-root': {
						fontSize: '12px',
					},
					'& .MuiInputLabel-root.focused': {
						fontSize: '9px',
					},
				},
				...sx,
			}}
			{...props}
		/>
	);
}

InputFieldFilled.propTypes = {
	label: PropTypes.string.isRequired,
	theme: PropTypes.object.isRequired,
};

export default InputFieldFilled;
