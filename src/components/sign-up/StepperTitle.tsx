import { Box, styled, Typography } from '@mui/material';
import { ObjectType } from 'src/types/dashboardTypes';

const CustomLine = styled('div')(
  ({ theme, side, ...props }: { data?: any; side: any; theme?: any }) => ({
    width: '100%',
    maxWidth: '161px',
    height: '0px',
    borderRadius: '15px',
    background: theme.palette.primary.main,
    [theme.breakpoints.up('xs')]: {
      borderWidth: '1.5px',
      maxWidth: '60px',
    },
    [theme.breakpoints.up('sm')]: {
      borderWidth: '2px',
      maxWidth: '100px',
    },
    [theme.breakpoints.up('md')]: {
      borderWidth: '2.5px',
      maxWidth: '130px',
    },
    [theme.breakpoints.up('lg')]: {
      borderWidth: '3px',
    },
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    margin: side === 'left' ? '0px 0px 0px 10px' : '0px 10px 0px 0px',
  }),
);

function StepperTitle({ data, sx, ...props }: ObjectType) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: {
          xs: '15px',
          sm: '20px',
          md: '30px',
          lg: '35px',
        },
        ...sx,
      }}
      {...props}
    >
      <CustomLine side={'left'} />
      <Typography
        color="primary"
        sx={{
          fontFamily: 'Titillium Web',
          fontWeight: 700,
          fontSize: {
            xs: '20px',
            sm: '24px',
          },
          whiteSpace: 'nowrap',
        }}
      >
        {data}
      </Typography>
      <CustomLine side="right" />
    </Box>
  );
}
// StepperTitle.propTypes = {
//   data: PropTypes.string.isRequired,
//   sx: PropTypes.object,
//   [PropTypes.string]: PropTypes.any,
// };

export default StepperTitle;

