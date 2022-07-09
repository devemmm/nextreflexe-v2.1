import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import HeaderTitle from './HeaderTitle';

const datas = [
  { day: 'Monday - Tuesday', start: '07:00 AM', end: '20:00 PM' },
  { day: 'Friday', start: '08:00 AM', end: '19:00 PM' },
  { day: 'Saturday', start: '18:00 PM', end: '20:00 PM' },
  { day: 'Sunday', start: '09:00 AM', end: '20:00 PM' },
];

function WorkHours() {
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
      }}
    >
      <HeaderTitle
        data="Hours of Work"
        sx={{
          marginBottom: {
            xs: '10px',
            sm: '20px',
            md: '30px',
          },
        }}
      />
      <Stack direction="column" gap={{ xs: '10px', md: '20px' }} width="100%">
        {datas.map((data) => {
          return (
            <Box
              key={data.day}
              sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: 'auto',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: theme.colors.grey,
                paddingX: { xs: '20px', sm: '25px', md: '40px', lg: '65px' },
                [theme.breakpoints.down(750)]: {
                  gridTemplateColumns: '1fr',
                  gridTemplateRows: '44px 44px 44px',
                  justifyContent: 'center',
                  padding: '0px',
                  border: `0.01px solid ${theme.palette.primary.light}`,
                },
              }}
            >
              <Typography
                sx={{
                  justifySelf: 'start',
                  [theme.breakpoints.down(750)]: {
                    justifySelf: 'center',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: theme.palette.primary.dark,
                  },
                }}
              >
                {data.day}
              </Typography>
              <Stack
                direction="row"
                width="100%"
                justifyContent="center"
                gap="15px"
              >
                <Typography>{data.start}</Typography>
                <Typography>{data.end}</Typography>
              </Stack>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: '0px  !important',
                  padding: '10px 15px',
                  justifySelf: 'end',
                  [theme.breakpoints.down(750)]: {
                    justifySelf: 'center',
                    width: '100%',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Titillium Web',
                    fontWeight: 700,
                  }}
                >
                  Make An Appointment
                </Typography>
              </Button>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}

export default WorkHours;
