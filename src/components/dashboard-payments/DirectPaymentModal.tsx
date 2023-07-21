import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Modal,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { directPaymentSchema } from '../../validations/payment.validation';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ControlledSelectField from '../ControlledSelectField';
import InputFieldFilled from '../InputFieldFilled';
import ControlledInputs from '../controlledInput';
import SelectField from '../SelectField';

function DirectPaymentModal({ createPayment, openModal, setOpenModal }) {
  const theme = useTheme();
  const { data: servicesData } = useSelector(
    (state: any) => state.servicesReducer,
  );
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(directPaymentSchema),
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
            Make a Direct Payment
          </Typography>
          <Stack
            direction="column"
            width="100%"
            margin={0}
            padding={0}
            gap="10px"
          >
            <ControlledSelectField
              input={SelectField}
              defaultValue=""
              name="serviceId"
              control={control}
              label="Select a Service"
              variant="filled"
              sx={{
                width: '100%',
              }}
              helperText={
                errors?.serviceId ? errors.serviceId.message : undefined
              }
              error={errors?.serviceId ? true : false}
            >
              <MenuItem value="">Select a Service</MenuItem>
              {servicesData.map(({ id, name }) => {
                return (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                );
              })}
            </ControlledSelectField>
            <ControlledInputs
              input={InputFieldFilled}
              name="sessionPrice"
              label="Session Price"
              control={control}
              defaultValue=""
              {...(errors?.sessionPrice && {
                error: true,
                helperText: errors.sessionPrice.message,
              })}
            />
            <ControlledInputs
              input={InputFieldFilled}
              name="pay"
              label="Amount"
              control={control}
              defaultValue=""
              {...(errors?.pay && {
                error: true,
                helperText: errors.pay.message,
              })}
            />
            <ControlledInputs
              input={InputFieldFilled}
              name="totalSession"
              label="Total Sessions Paid"
              control={control}
              defaultValue=""
              {...(errors?.totalSession && {
                error: true,
                helperText: errors.totalSession.message,
              })}
            />
            <ControlledSelectField
              input={SelectField}
              defaultValue=""
              name="paymentMethod"
              control={control}
              label="Select a Method"
              variant="filled"
              sx={{
                width: '100%',
              }}
              helperText={
                errors?.paymentMethod ? errors.paymentMethod.message : undefined
              }
              error={errors?.paymentMethod ? true : false}
            >
              <MenuItem value="">Select a Method</MenuItem>
              <MenuItem value="MOMO">MOMO</MenuItem>
              <MenuItem value="BANK">BANK</MenuItem>
              <MenuItem value="HANDS">HANDS</MenuItem>
            </ControlledSelectField>
            <ControlledSelectField
              input={SelectField}
              defaultValue=""
              name="status"
              control={control}
              label="Select a Status"
              variant="filled"
              sx={{
                width: '100%',
              }}
              helperText={errors?.status ? errors.status.message : undefined}
              error={errors?.status ? true : false}
            >
              <MenuItem value="">Select a Status</MenuItem>
              <MenuItem value="PAY">Pay</MenuItem>
              <MenuItem value="INSUFFICIENT_FOUND">
                Insufficient Founds
              </MenuItem>
            </ControlledSelectField>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontVariant: 'none', width: '100%' }}
              onClick={(e) => {
                handleSubmit(createPayment)(e);
              }}
            >
              Create Payment
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}

DirectPaymentModal.propTypes = {
  createPayment: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

export default DirectPaymentModal;

