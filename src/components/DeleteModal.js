import PropTypes from 'prop-types';
import React from 'react';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Button,
  IconButton,
  Modal,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';

function DeleteModal({ open, setOpen, message, title }) {
  const theme = useTheme();

  function closeModal() {
    setOpen(false);
  }

  return (
    <Modal
      open={open}
      onClose={closeModal}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        '& *::-webkit-scrollbar': {
          height: '2px',
          width: '5px',
          background: 'transparent',
        },
        '& *::-webkit-scrollbar-thumb': {
          background: theme.palette.primary.main,
          borderRadius: '15px',
        },
      }}
    >
      <Box
        sx={{
          maxHeight: 'max-content',
          maxWidth: '350px',
          width: '100%',
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            boxShadow:
              '0px 4px 4px rgba(0, 0, 0, 0.1), 5px 20px 25px 5px rgba(0, 0, 0, 0.05), 1px 1px 30px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            width: '100%',
            height: 'max-content',
            padding: '20px',
            position: 'relative',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '5px',
              right: '5px',
            }}
            onClick={closeModal}
          >
            <CloseRoundedIcon color="primary" />
          </IconButton>
          <Typography
            variant="h5"
            color="primary"
            sx={{
              fontFamily: 'Titillium Web',
              fontWeight: 300,
              marginBottom: '10px',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              marginBottom: '30px',
            }}
          >
            {message}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '0px',
                fontVariant: 'none',
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{
                borderRadius: '0px',
                fontVariant: 'none',
              }}
            >
              Delete
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DeleteModal;
