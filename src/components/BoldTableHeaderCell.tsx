import React from 'react';
import PropTypes from 'prop-types';

import { TableCell, Typography } from '@mui/material';

const BoldTableHeaderCell = ({ title }) => {
  return (
    <TableCell align="center">
      <Typography
        variant="body1"
        component="div"
        sx={{
          fontFamily: 'Titillium Web',
          fontWeight: 700,
          lineHeight: '1rem',
        }}
      >
        {title}
      </Typography>
    </TableCell>
  );
};
BoldTableHeaderCell.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BoldTableHeaderCell;

