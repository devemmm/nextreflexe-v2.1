import React from 'react';
import PropTypes from 'prop-types';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  Box,
  IconButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#F4F4F4',
  },
}));

function ServiceCard({
  datas: { id, avatar, description, name, status },
  updateService,
  deleteService,
  ...props
}) {
  const theme = useTheme();

  return (
    <Box /// wrapper for the service card
      sx={{
        transition: 'all 0.5s ease-in-out',
        userSelect: 'none',
        cursor: 'pointer',
        height: '300px',
        width: 'clamp(250px, 100% , 300px)',
        marginX: 'auto',
        background: 'white',
        border: '0.5px solid rgba(1, 143, 85, 0.25)',
        borderRadius: '7px',
        padding: '20px',
        position: 'relative',
        '&:hover': {
          boxShadow: '0px 20px 40px 3px rgba(0, 0, 0, 0.25)',
          transform: 'translate(0px, -3px)',
          borderColor: 'white',
        },
      }}
    >
      <Stack
        direction="row"
        gap={1}
        sx={{
          position: 'absolute',
          top: '-15px',
          right: '15px',
        }}
      >
        <CustomIconButton onClick={updateService}>
          <EditIcon color="primary" sx={{ fontSize: '16px' }} />
        </CustomIconButton>
        <CustomIconButton onClick={deleteService}>
          <DeleteForeverIcon color="error" sx={{ fontSize: '16px' }} />
        </CustomIconButton>
      </Stack>
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
            width: { xs: '90px' },
            height: { xs: '90px' },
            padding: { xs: '20px' },
            flexShrink: 0,
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: '50%',
            backgroundColor: 'white',
          }}
        >
          <Box
            component={'img'}
            src={avatar}
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${avatar})`,
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
              xs: '16px',
              sm: '20px',
            },
            textAlign: 'center',
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            flexShrink: 1,
            fontSize: '14px',
            textOverflow: 'clip',
            fontWeight: 300,
            textAlign: 'justify',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

ServiceCard.propTypes = {
  datas: PropTypes.object.isRequired,
  updateService: PropTypes.func.isRequired,
  deleteService: PropTypes.func.isRequired,
};

export default ServiceCard;

