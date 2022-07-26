import { Typography } from '@mui/material';
import React from 'react';

function DetailsHeader({ text = 'Details', sx, ...props }) {
  return (
    <Typography
      color="primary"
      sx={{
        fontWeight: 700,
        fontSize: '16px',
        ...sx,
      }}
      {...props}
    >
      {text}
    </Typography>
  );
}

export default DetailsHeader;

