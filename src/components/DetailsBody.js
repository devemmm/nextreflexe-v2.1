import { Typography } from '@mui/material';
import React from 'react';

function DetailsBody({ text, sx, props }) {
  return (
    <Typography
      color="black"
      sx={{ paddingLeft: '10px', fontSize: '14px', fontWeight: 300, ...sx }}
      {...props}
    >
      {text ? text : 'none'}
    </Typography>
  );
}

export default DetailsBody;

