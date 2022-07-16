import { Box, TextField, Typography, useTheme } from '@mui/material';
import Buttons from '../buttons';

const CustomTextField = ({ label, sx, theme, ...props }) => {
  return (
    <TextField
      fullWidth
      maxRows={4}
      minRows={3}
      variant="filled"
      label={label}
      color="primary"
      {...props}
      sx={{
        ...sx,
        '& .MuiFilledInput-root:before': {
          borderBottom: `2px solid ${theme.palette.primary.light}`,
        },
        [theme.breakpoints.down(425)]: {
          '& .MuiFilledInput-root': {
            fontSize: '12px',
          },
          '& .MuiInputLabel-root': {
            fontSize: '12px',
          },
          '& .MuiInputLabel-root.focused': {
            fontSize: '9px',
          },
        },
      }}
    />
  );
};

function GetInTouchForm() {
  const theme = useTheme();

  return (
    <Box
      component="form"
      sx={{
        boxShadow:
          '0px 4px 4px rgba(0, 0, 0, 0.1), 5px 20px 25px 5px rgba(0, 0, 0, 0.05), 1px 1px 30px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: {
          xs: '30px 20px',
          md: '40px 30PX',
          lg: '50px 40PX',
        },
        maxWidth: '550px',
        width: { xs: '100%', md: '50%' },
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column nowrap',
        gap: '10px',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 300,
          marginBottom: {
            xs: '10px',
            sm: '25px',
            md: '20px',
            lg: '30px',
          },
          alignSelf: 'start',
        }}
      >
        Leave for us a Message or a querry !
      </Typography>
      <CustomTextField label="Full Name *" theme={theme} />
      <CustomTextField label="Email Address *" theme={theme} />
      <CustomTextField label="Your Phone *" theme={theme} />
      <CustomTextField label="Message *" theme={theme} multiline />
      <Buttons
        variant="contained"
        fullWidth
        color="primary"
        sx={{
          height: 50,
          backgroundColor: '#018F55',
          fontSize: '18px',
          color: 'white',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#018F55',
          },
        }}
        type="button"
        value="Send Message"
      />
    </Box>
  );
}

export default GetInTouchForm;

