import { Box, Stack, useTheme } from '@mui/material';
import React from 'react';
import GetInTouchContacts from './GetInTouchContacts';
import GetInTouchForm from './GetInTouchForm';
import HeaderTitle from './HeaderTitle';

function GetInTouch() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: {
          xs: '20px',
          sm: '25px',
          md: '40px',
          lg: '65px',
        },
        background: '#F4F4F4',
        '& *::-webkit-scrollbar': {
          height: '2px',
          width: '5px',
          background: 'transparent',
        },
        '& *::-webkit-scrollbar-thumb': {
          background: theme.palette.primary.main,
          borderRadius: '15px',
        },
      }}
    >
      <HeaderTitle
        data="Get In Touch"
        sx={{
          marginBottom: {
            xs: '10px',
            sm: '20px',
            md: '30px',
          },
        }}
      />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        gap={{ xs: '20px', sm: '30px' }}
        alignItems={{ xs: 'center', md: 'initial' }}
      >
        <GetInTouchForm />
        <GetInTouchContacts />
      </Stack>
    </Box>
  );
}

export default GetInTouch;

