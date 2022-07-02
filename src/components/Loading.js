import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

function Loading({ basesize = 1, sx, ...props }) {
	const baseSize = basesize;

	return (
		<Box
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				transformOrigin: 'center',
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				...sx,
			}}
			{...props}>
			<CircularProgress size={80 * baseSize} thickness={2} />
			<Typography
				color='primary'
				fontSize={70 * baseSize}
				fontWeight='700'
				fontFamily='Titillium Web'
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					transformOrigin: 'center',
				}}>
				G
			</Typography>
		</Box>
	);
}

export default Loading;
