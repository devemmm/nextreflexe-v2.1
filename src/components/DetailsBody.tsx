import { Typography } from '@mui/material';
import React from 'react';
import { HeaderPops } from '../types/dashboardTypes';

function DetailsBody({ text, sx, props }: HeaderPops) {
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

