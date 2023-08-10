import { Box, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import HeaderTitle from './HeaderTitle';

function OurMethods() {
  const { data } = useSelector((state: any) => state.homePageReducer);
  return (
    <Box
      sx={{
        background: '#F4F4F4',
        padding: {
          xs: '20px',
          sm: '25px',
          md: '40px',
          lg: '65px',
        },
      }}
    >
      <HeaderTitle
        data="Our Methods"
        sx={{ paddingY: { xs: '20px', sm: '25px', md: '30px', lg: '35pxpx' } }}
      />
      {data.methods !== undefined &&
        data.methods.map((data) => (
          <Box
            key={data.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexFlow: 'column nowrap',
              gap: { xs: '10px', sm: '15px', md: '20px', lg: '25px' },
              background: '#FFFFFF',
              boxShadow:
                '0px 4px 4px rgba(0, 0, 0, 0.1), 5px 20px 25px 5px rgba(0, 0, 0, 0.05), 1px 1px 30px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: ' 20px 20px 0px 0px',
              marginY: { xs: '10px', sm: '20px' },
              padding: {
                xs: '25px 20px',
                sm: '35px',
                md: '40px',
                lg: '65px',
              },
            }}
          >
            <Box
              component="img"
              src={data.avatar}
              alt={data.name}
              marginBottom="10px"
            />
            <Typography
              color="primary"
              sx={{
                fontFamily: 'Titillium Web',
                fontWeight: 700,
                fontSize: {
                  xs: '20px',
                  md: '24px',
                },
                textAlign: 'center',
              }}
            >
              {data.name}
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: { xs: '14px', sm: '16px' },
                textAlign: 'justify',
              }}
            >
              {data.description}
            </Typography>
          </Box>
        ))}
    </Box>
  );
}

export default OurMethods;

