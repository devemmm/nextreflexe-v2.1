import { Carousel } from '3d-react-carousal';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

import { useSelector } from 'react-redux';
import HeaderTitle from './HeaderTitle';

const Slide = (sliders) => {
  const theme = useTheme();
  return (
    sliders !== undefined &&
    sliders.map((data) => (
      <Grid
        container
        sx={{
          backgroundColor: theme.colors.grey,
        }}
      >
        <Grid
          width="100%"
          item
          xs={12}
          sm={4}
          alignItems="center"
          justifyContent="center"
          p={{
            xs: '10px',
            sm: '20px',
            md: '30px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={data.image}
              alt={`${data.names} pic`}
              sx={{
                width: {
                  xs: '50%',
                  sm: '100%',
                },
                maxWidth: '150px',
                margin: '0px auto 0px auto',
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          p={{
            xs: '10px',
            sm: '20px',
            md: '30px',
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            overflowX: 'auto',
            '&::-webkit-scrollbar': {
              height: '5px',
              background: theme.colors.grey,
            },
            '&::-webkit-scrollbar-thumb': {
              background: theme.palette.primary.main,
              borderRadius: '15px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'column nowrap',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Titillium Web',
                fontWeight: 700,
                fontSize: {
                  xs: '16px',
                  sm: '24px',
                },
                textAlign: {
                  xs: 'center',
                  sm: 'left',
                },
                width: '100%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {data.names}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Open Sans',
                fontWeight: 300,
                fontSize: {
                  xs: '12px',
                  sm: '14px',
                },
                textAlign: 'justify',
              }}
            >
              {data.body}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    ))
  );
};

function Testimonials() {
  const { data } = useSelector((state) => state.homePageReducer);

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
        data="Testimonials"
        sx={{ marginBottom: { xs: '10px', sm: '20px', md: '30px' } }}
      />
      {data.testimonials !== undefined && (
        <Carousel
          slides={Slide(data.testimonials)}
          autoplay={true}
          interval={5000}
          arrows={true}
        />
      )}
    </Box>
  );
}

export default Testimonials;

