import { Box, useTheme } from '@mui/material';
import React, { useRef, useState } from 'react';
import NavBar from './NavBar';

function NavBarContainer({ children, ...props }) {
  const theme = useTheme();
  const [sticked, setSticked] = useState(false);
  const ref = useRef();

  const getStickData = (e) => {
    if (e.target.scrollTop >= 32) {
      if (sticked !== true) {
        setSticked(true);
      }
    } else {
      if (sticked !== false) {
        setSticked(false);
      }
    }
  };
  const getToTop = (e) => {
    ref.current.scrollTop = 0.0;
  };

  return (
    <Box
      ref={ref}
      onScroll={getStickData}
      sx={{
        transition: 'all 3s ease-in-out',
        height: '100%',
        width: '100%',
        overflowY: 'scroll',
        position: 'absolute',
        ...props.sx,
        zIndex: 100,
        '&::-webkit-scrollbar': {
          width: '5px',
          background: theme.colors.grey,
        },
        '&::-webkit-scrollbar-thumb': {
          background: theme.palette.primary.main,
          borderRadius: '15px',
        },
      }}
      {...props}
    >
      <NavBar sticked={sticked} getToTop={getToTop} />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          minHeight: 'max-content',
          maxHeight: sticked ? '100%' : 'calc(100% - 111px)',
          paddingTop: sticked ? '90px' : '0px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default NavBarContainer;

