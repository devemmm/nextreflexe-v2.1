import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import AnimatedNumber from 'react-animated-number';

const CountBox = ({ data: { icon, title, count } }) => {
  return (
    <Box
      sx={{
        transition: 'all 0.5s ease-in-out',
        display: 'flex',
        flexFlow: 'row',
        borderRadius: '5px',
        width: '100%',
        maxWidth: { xs: '200px', sm: '250px' },
        overflowX: 'auto',
        background: 'white',
        gap: '10px',
        padding: { xs: '10px', md: '20px' },
        '&:hover': {
          boxShadow: '0px 20px 40px 3px rgba(0, 0, 0, 0.25)',
          transform: 'translate(0px, -3px)',
        },
      }}
    >
      <Box
        component="img"
        src={icon}
        width={{ xs: '30px', sm: '45px' }}
        height="max-content"
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{ flex: 1, alignItems: 'center' }}
      >
        <Typography
          sx={{
            fontSize: { xs: '14px', sm: '16px' },
            fontFamily: 'Titillium Web',
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        <AnimatedNumber
          value={count}
          style={{ fontSize: 18, transition: '0.8s ease-out' }}
          duration={2000}
          stepPrecision={0}
        />
      </Box>
    </Box>
  );
};
export default CountBox;

