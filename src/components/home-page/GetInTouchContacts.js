import { Box, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

import emailIcon from '../../assets/icons/email-icon.svg';
import worldIcon from '../../assets/icons/world-icon.svg';
import getInTouchPhoneIcon from '../../assets/icons/get-in-touch-phone-icon.svg';

const datas = [
  {
    icon: worldIcon,
    title: 'ADDRESS',
    grp: [
      'KG 123 Kimironko, Remera',
      'Kigali, Rwanda',
      'KG 203 ST, NO 7',
      'Gishushu',
    ],
  },
  {
    icon: getInTouchPhoneIcon,
    title: 'PHONE',
    grp: ['(+263) 788 306 780', '(+250) 788 407 357', '(+250) 788 596 281'],
  },
  {
    icon: emailIcon,
    title: 'Email',
    grp: ['admin@nextreflexe.com', 'admin@nextreflexe.com'],
  },
];

const CustomBox = ({ data: { icon, title, grp }, theme, sx, ...props }) => {
  return (
    <Box
      sx={{
        transition: 'all 0.5s ease-in-out',
        display: 'flex',
        flexFlow: 'row',
        width: '100%',
        maxWidth: { xs: '250px', sm: '300px' },
        overflowX: 'auto',
        gap: '10px',
        padding: { xs: '10px', md: '20px' },
        border: '0.5px solid black',
        '&:hover': {
          borderColor: 'white',
          background: 'white',
          boxShadow: '0px 20px 40px 3px rgba(0, 0, 0, 0.25)',
          transform: 'translate(0px, -3px)',
        },
        ...sx,
      }}
      {...props}
    >
      <Box
        component="img"
        height="max-content"
        src={icon}
        width={{ xs: '30px', sm: '45px' }}
        margin="10px"
      />
      <Box>
        <Typography
          sx={{
            fontSize: { xs: '14px', sm: '16px' },
            fontFamily: 'Titillium Web',
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        <Box>
          {grp.map((el, index) => (
            <Typography
              key={el + index}
              fontWeight={300}
              fontSize={{ xs: '10px', sm: '12px' }}
            >
              {el}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

function GetInTouchContacts() {
  const theme = useTheme();

  return (
    <Stack
      height="max-content"
      sx={{
        width: { xs: '100%', md: '50%' },
        gap: '10px',
        flexFlow: 'column',
        [theme.breakpoints.up(0)]: {
          flexFlow: 'column',
          alignItems: 'center',
        },
        [theme.breakpoints.up(600)]: {
          flexFlow: 'row',
          alignItems: 'normal',
          justifyContent: 'center',
        },
        [theme.breakpoints.up(900)]: {
          flexFlow: 'column',
          alignItems: 'flex-start',
        },
      }}
    >
      {datas.map((data) => (
        <CustomBox key={data.title} data={data} theme={theme} />
      ))}
    </Stack>
  );
}

export default GetInTouchContacts;
