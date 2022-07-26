import { Typography } from '@mui/material';
import React from 'react';

function DetailsTitle({ text, sx, ...props }) {
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

