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
import { useDispatch } from 'react-redux';
import {
  loadingGetVisitsAction,
  startVisitAction,
  visitsErrorAction,
} from '../redux/reducers/visits.reducer';
import axiosInstance from '../axios.instance';
import fetchVisitsData from '../utils/fetchVisitsData';
import { toast } from 'react-toastify';

function ApproveModal({ open, setOpen, message, title, visitId, type }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  function closeModal() {
    setOpen(false);
  }
  const updateStatus = (status) => {
    console.log({visitId})
    axiosInstance
      .patch(`/${type === "appointment" ? "appointments": "visits"}/${visitId}`, { status })
      .then((res) => {
        dispatch(startVisitAction(res.data));
        fetchVisitsData(dispatch);
        toast.success(`${type === "appointment" ? "appointment": "visit"} has been ${status}`);
        closeModal();
      })
      .catch((error) => {
        dispatch(visitsErrorAction(error.response?.data?.message));
        toast.error(error.response.data.message);
      });
  };
  const handleUpdateStatus = (status) => {
    dispatch(loadingGetVisitsAction({}));

    switch (status) {
      case 'SUCCESS':
        updateStatus(status);
        break;
      case 'FAILED':
        updateStatus(status);
        break;
      default:
        return;
    }
  };
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
              color="error"
              sx={{
                borderRadius: '0px',
                fontVariant: 'none',
              }}
              onClick={() => handleUpdateStatus('FAILED')}
            >
              Reject
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '0px',
                fontVariant: 'none',
              }}
              onClick={() => handleUpdateStatus('SUCCESS')}
            >
              Approve
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

ApproveModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ApproveModal;

