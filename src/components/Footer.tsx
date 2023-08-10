import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography color="text.primary" align="center" {...props}>
      Copyright © {new Date().getFullYear()}
      <span style={{ fontWeight: 'bold' }}> Emmanuel NT. </span>
      {'All Rights Reserved.'}
    </Typography>
  );
}
const linkStyles = {
  textDecoration: 'none',
  color: 'white',
};
export default function Footer() {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        backgroundColor: '#018F55',
        position: 'static',
        height: '80px',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <Grid item>
        <Copyright sx={{ color: 'white' }} />
      </Grid>
      <Grid item>
        <Box display="flex" gap={3} sx={{ color: 'white' }}>
          <Link to="#" style={linkStyles}>
            Privacy
          </Link>
          <span>|</span>
          <Link to="#" style={linkStyles}>
            Contact
          </Link>
          <span>|</span>
          <Link to="#" style={linkStyles}>
            Services
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

