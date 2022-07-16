import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import { branchSchema } from '../../validations/branch.validation';
import ControlledInputs from '../controlledInput';
import InputFieldFilled from '../InputFieldFilled';
import BranchesLocationFields from './BranchesLocationFields';

function CreateBranchModal({ createBranch, openModal, setOpenModal }) {
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(branchSchema),
  });

  function closeModal() {
    reset();
    setOpenModal(false);
  }

  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        overflow: 'auto',
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
          maxWidth: '400px',
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
              top: '15px',
              right: '15px',
            }}
            onClick={closeModal}
          >
            <CloseRoundedIcon color="primary" />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 300,
              marginBottom: '20px',
            }}
          >
            Create a Branch
          </Typography>
          <Stack
            direction="column"
            width="100%"
            margin={0}
            padding={0}
            gap="10px"
          >
            <ControlledInputs
              input={InputFieldFilled}
              name="id"
              label="Id"
              control={control}
              defaultValue=""
              {...(errors?.id && {
                error: true,
                helperText: errors.id.message,
              })}
            />
            <ControlledInputs
              input={InputFieldFilled}
              name="name"
              label="Name"
              control={control}
              defaultValue=""
              {...(errors?.name && {
                error: true,
                helperText: errors.name.message,
              })}
            />
            <BranchesLocationFields control={control} errors={errors} />
            <Button
              variant="contained"
              color="primary"
              sx={{ fontVariant: 'none', width: '100%' }}
              onClick={(e) => {
                handleSubmit(createBranch)(e);
              }}
            >
              Create Branch
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

CreateBranchModal.propTypes = {
  createBranch: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

export default CreateBranchModal;

