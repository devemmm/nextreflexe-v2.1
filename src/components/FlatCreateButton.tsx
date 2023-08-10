import React from 'react';
// import PropTypes from 'prop-types';

import { Button, Stack, Typography } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { FlatButtonProps } from '../types/dashboardTypes';

function FlatCreateButton({
  text,
  icon: Icon = AddRoundedIcon,
  sx,
  postion,
  icon,
  ...props
}: FlatButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      sx={{
        paddingY: '10px',
        marginY: '10px',
        marginLeft: postion === 'center' ? '45%' : 'auto',
        borderRadius: '0px',
        ...sx,
      }}
      {...props}
    >
      <Stack direction="row" alignItems="center">
        {icon === 'none' ? null : (
          <Icon
            sx={{
              color: 'white',
              padding: 0,
            }}
          />
        )}

        <Typography
          sx={{
            fontFamily: 'Titillium Web',
            fontWeight: 700,
          }}
        >
          {text}
        </Typography>
      </Stack>
    </Button>
  );
}

// FlatCreateButton.propTypes = {
//   text: PropTypes.string.isRequired,
//   icons: PropTypes.elementType,
//   [PropTypes.string]: PropTypes.any,
// };

export default FlatCreateButton;

