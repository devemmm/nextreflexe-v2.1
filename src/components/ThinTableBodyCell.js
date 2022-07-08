import React from 'react';
import PropTypes from 'prop-types';

import { TableCell, Typography } from '@mui/material';

function ThinTableBodyCell({ text }) {
	return (
		<TableCell align='center'>
			<Typography
				variant='p'
				component='div'
				sx={{
					fontSize: '12px',
					fontWeight: 300,
				}}>
				{text}
			</Typography>
		</TableCell>
	);
}
ThinTableBodyCell.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ThinTableBodyCell;
