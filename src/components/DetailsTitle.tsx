import { Typography } from '@mui/material';
import React from 'react';
import { HeaderPops } from '../types/dashboardTypes';

function DetailsTitle({ text, sx, ...props }: HeaderPops) {
  return (
    <Typography
      color="black"
      sx={{ fontFamily: 'Titillium Web', ...sx }}
      {...props}
    >
      {text}
    </Typography>
  );
}

export default DetailsTitle;

