import PropTypes from 'prop-types';
import React from 'react';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import axiosInstance from '../axios.instance';
import { useDispatch, useSelector } from 'react-redux';
import {
  appointmentsErrorAction,
  deleteAppointmentAction,
  pendingDeleteAppointmentAction,
} from '../redux/reducers/appointments.reducer';
import { toast } from 'react-toastify';
import {
  deleteVisitAction,
  pendingVisitAction,
  visitsErrorAction,
} from '../redux/reducers/visits.reducer';
import fetchAppointmentsData from '../utils/fetchAppointmentsData';
import fetchVisitsData from '../utils/fetchVisitsData';
import {
  branchesErrorAction,
  deleteBranchAction,
  pendingBranchAction,
} from '../redux/reducers/branches.reducer';
import fetchBranchesData from '../utils/fetchBranchesData';
import { ObjectType } from 'src/types/dashboardTypes';

function DeleteModal({ open, setOpen, message, title, value }: ObjectType) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const pendingApt = useSelector(
    (state: any) => state.appointmentsReducer?.pending,
  );
  const pendingVisit = useSelector(
    (state: any) => state.visitsReducer?.pending,
  );
  const pendingBranch = useSelector(
    (state: any) => state.branchesReducer?.pending,
  );
  function closeModal() {
    setOpen(false);
  }
  const handleDeleteAppointment = (id: any) => {
    dispatch(pendingDeleteAppointmentAction());
    axiosInstance
      .delete(`/appointments/${id}`)
      .then((res) => {
        dispatch(deleteAppointmentAction(res.data));
        toast.success('Appointment Deleted Successfully');
        fetchAppointmentsData(dispatch);
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
        dispatch(appointmentsErrorAction(error.response.data));
      });
  };
  const handleDeleteVisit = (id: any) => {
    dispatch(pendingVisitAction());
    axiosInstance
      .delete(`/visits/${id}`)
      .then((res) => {
        dispatch(deleteVisitAction(res.data));
        toast.success('Visit Deleted Successfully');
        fetchVisitsData(dispatch);
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
        dispatch(visitsErrorAction(error.response.data));
      });
  };
  const handleDeleteBranch = (id: any) => {
    dispatch(pendingBranchAction());
    axiosInstance
      .delete(`/branches/${id}`)
      .then((res) => {
        dispatch(deleteBranchAction(res.data));
        toast.success('Branch Deleted Successfully');
        fetchBranchesData(dispatch);
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
        dispatch(branchesErrorAction(error.response.data));
      });
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
              onClick={() => {
                console.log(value, title);
                if (title === 'Delete Appointment') {
                  handleDeleteAppointment(value);
                }
                if (title === 'Delete Visit') {
                  handleDeleteVisit(value);
                }
                if (title === 'Delete Branch') {
                  handleDeleteBranch(value);
                }
              }}
            >
              {pendingApt || pendingVisit || pendingBranch ? (
                <CircularProgress size={30} sx={{ color: 'white' }} />
              ) : (
                'Delete'
              )}
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

