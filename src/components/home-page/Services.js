import { Box, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

import backTretIcon from '../../assets/icons/backTret-icon.svg';
import disabilityTretIcon from '../../assets/icons/disabilityTret-icon.svg';
import emigrainesIcon from '../../assets/icons/emigraines-icon.svg';
import jointTretIcon from '../../assets/icons/jointTret-icon.svg';
import shoulderTretIcon from '../../assets/icons/shoulderTret-icon.svg';
import HeaderTitle from './HeaderTitle';

const services = [
  {
    icon: jointTretIcon,
    header: 'Joint Treatment',
    body: 'Be they knees, wrists, hip joints and elbow joints, our therapists will diagnose each case and prescribe the requisite therapy and duration.',
  },
  {
    icon: backTretIcon,
    header: 'Back Treatement',
    body: 'We do have specific procedures designed to soothe back pain and completely eliminate any discomfort or pain in a very short period.',
  },
  {
    icon: shoulderTretIcon,
    header: 'Shoulder Treatement',
    body: 'We offer tailor-made treatment that is structured for the shoulders.',
  },
  {
    icon: disabilityTretIcon,
    header: 'Disability Treatement',
    body: 'Through our therapy, people living with disability can have their lives greatly improved through increasing their energy levels, improving blood circulation ...',
  },
  {
    icon: emigrainesIcon,
    header: 'Migraines',
    body: 'Be they knees, wrists, hip joints and elbow joints, our therapists will diagnose each case and prescribe the requisite therapy and duration',
  },
];

function Services() {
  const theme = useTheme();

  return (
    <>
      <HeaderTitle data="Services" sx={{ padding: '30px 0px 10px 0px' }} />
      <Grid
        container
        spacing={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
        sx={{
          padding: {
            xs: '25px 20px',
            sm: '35px 30px',
            md: '50px 40px',
            lg: '65px 50px',
          },
        }}
      >
        {services.map((service) => {
          return (
            <Grid
              key={service.header}
              item
              xs={12}
              sm={6}
              md={4}
              alignItems="center"
              justifyContent="center"
            >
              <Box /// wrapper for the service card
                sx={{
                  transition: 'all 0.5s ease-in-out',
                  userSelect: 'none',
                  cursor: 'pointer',
                  height: '355px',
                  width: '100%',
                  marginX: 'auto',
                  maxWidth: '350px',
                  background: theme.colors.grey,
                  border: '0.5px solid rgba(1, 143, 85, 0.25)',
                  borderRadius: '7px',
                  padding: '20px',
                  overflowY: 'hidden',
                  '&:hover': {
                    boxShadow: '0px 20px 40px 3px rgba(0, 0, 0, 0.25)',
                    transform: 'translate(0px, -3px)',
                    borderColor: theme.colors.grey,
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '7px',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    gap: {
                      xs: '10px',
                      sm: '20px',
                    },
                    alignItems: 'center',
                    overflowY: 'hidden',
                  }}
                >
                  <Box /// wrapper for the service icon
                    sx={{
                      width: { xs: '108px' },
                      height: { xs: '108px' },
                      padding: { xs: '20px' },
                      flexShrink: 0,
                      border: `1px solid ${theme.palette.primary.main}`,
                      borderRadius: '50%',
                      backgroundColor: 'white',
                    }}
                  >
                    <Box
                      src={service.icon}
                      sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${service.icon})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                  </Box>
                  <Typography
                    color="primary"
                    sx={{
                      flexShrink: 1,
                      fontFamily: 'Titillium Web',
                      fontWeight: 700,
                      fontSize: {
                        xs: '20px',
                        sm: '24px',
                      },
                      textAlign: 'center',
                    }}
                  >
                    {service.header}
                  </Typography>
                  <Typography
                    sx={{
                      flexShrink: 1,
                      fontSize: {
                        xs: '14px',
                        sm: '16px',
                      },
                      textOverflow: 'clip',
                      fontWeight: 300,
                      textAlign: 'justify',
                    }}
                  >
                    {service.body}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Services;
