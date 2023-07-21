import MenuIcon from '@mui/icons-material/Menu';
import { Box, Divider, IconButton, Typography } from '@mui/material';

import { useOutletContext } from 'react-router';
import { ObjectType } from 'src/types/dashboardTypes';

function DashboardHeader({ title, sx, ...props }: ObjectType) {
  const { toogleShowSideBar } = useOutletContext() as any;

  return (
    <>
      <Box
        sx={{
          width: '100%',
          boxShadow:
            '0px 4px 4px rgba(0, 0, 0, 0.1), 5px 20px 25px 5px rgba(0, 0, 0, 0.05), 1px 1px 30px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          display: 'flex',
          flexFlow: 'row nowrap',
          ...sx,
        }}
      >
        <IconButton
          color="primary"
          onClick={() => {
            toogleShowSideBar();
          }}
          sx={{
            display: {
              xs: 'flex',
              md: 'none',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            display: {
              xs: 'flex',
              md: 'none',
            },
          }}
        />
        <Typography
          color="primary"
          sx={{
            paddingY: '10px',
            paddingX: {
              xs: '10px',
              sm: '15px',
              md: '20px',
            },
          }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
}

// DashboardHeader.propTypes = {
//   title: PropTypes.string.isRequired,
//   [PropTypes.string]: PropTypes.any,
// };

export default DashboardHeader;

