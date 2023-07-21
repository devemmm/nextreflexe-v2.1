import React from 'react';
import PropTypes from 'prop-types';

import { TableCell, Typography } from '@mui/material';

function ThinTableBodyCell({ text, type }: { text: string; type?: any }) {
  return (
    <TableCell align="center">
      <Typography
        variant={'inherit'}
        component="div"
        sx={{
          fontSize: '12px',
          fontWeight: 300,
          backgroundColor: type === 'therapist' ? '#ccd1bc' : 'none',
          color:
            text === 'FAILED' ? 'red' : text === 'SUCCESS' ? 'green' : 'none',
        }}
        borderRadius="5px"
      >
        {text ? text : 'none'}
      </Typography>
    </TableCell>
  );
}
ThinTableBodyCell.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ThinTableBodyCell;

