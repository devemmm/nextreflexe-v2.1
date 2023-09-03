import React, { useState } from 'react';
import PropType from 'prop-types';

import { Stack, Box, styled, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  createPaymentAction,
  paymentsErrorAction,
} from '../../redux/reducers/payments.reducer';
import PrePaidPaymentModal from '../../components/dashboard-payments/PrePaidPaymentModal';
import DirectPaymentModal from '../../components/dashboard-payments/DirectPaymentModal';
import formatDateRow from '../../utils/formatDate_hourFirst';
import FlatCreateButton from '../FlatCreateButton';
import axiosInstance from '../../axios.instance';
import DetailsHeader from '../DetailsHeader';
import ApproveModal from '../ApproveModal';
import DetailsTitle from '../DetailsTitle';
import DetailsBody from '../DetailsBody';
import fetchPaymentsData from '../../utils/fetchPaymentsData';

const CustomStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: 'max-content',
}));

function VisitsDetails({
  data: { id, appointment, branch, status, patientId, serviceId },
}: any) {
  let appointmentID;
  let appointmentStartTime;
  let appointmentEndTime;
  let branchName;

  if (appointment)
    ({
      startTime: appointmentStartTime,
      id: appointmentID,
      endTime: appointmentEndTime,
    } = appointment);
  if (branch) ({ name: branchName } = branch);
  const theme = useTheme();
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [openCreateDirectPayment, setOpenCreateDirectPayment] = useState(false);
  const [openCreatePrePaidPayment, setOpenCreatePrePaidPayment] =
    useState(false);
  const dispatch = useDispatch();
  const sendPayment = (data: any) => {
    data.patientId = patientId;
    data.visitId = id;
    axiosInstance
      .post(`/payments`, data)
      .then((res) => {
        dispatch(createPaymentAction(res.data));
        toast.success(`Payment success`);
        setOpenCreateDirectPayment(false);
        setOpenCreatePrePaidPayment(false);
        fetchPaymentsData(dispatch);
      })
      .catch((error) => {
        dispatch(paymentsErrorAction(error.response?.data?.message));
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          width: '100%',
          height: 'max-content',
        }}
      >
        <DetailsHeader text="Additional Actions" />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, 1fr)',
            width: '100%',
            padding: 1,
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Box>
            <Stack direction="row" justifyContent="flex-end" gap={1}>
              <DetailsTitle text="Note: you're only allowed to make the status as APPROVED once the therapist had treated him otherwise REJECT" />

              <FlatCreateButton
                text="Status"
                sx={{ maxWidth: '250px', width: '100%' }}
                onClick={() => setOpenStatusModal(true)}
              />
              {status === 'SUCCESS' ? (
                <>
                  <FlatCreateButton
                    text="Direct Payment"
                    sx={{ marginLeft: '0px' }}
                    onClick={() => {
                      setOpenCreateDirectPayment(true);
                    }}
                  />
                  <FlatCreateButton
                    text="Pre-paid Payment"
                    sx={{ marginLeft: '0px' }}
                    onClick={() => {
                      setOpenCreatePrePaidPayment(true);
                    }}
                  />
                </>
              ) : null}
            </Stack>
          </Box>
        </Box>
        <DirectPaymentModal
          createPayment={(data) => {
            sendPayment(data);
          }}
          openModal={openCreateDirectPayment}
          setOpenModal={setOpenCreateDirectPayment}
        />
        <PrePaidPaymentModal
          createPayment={(data) => {
            sendPayment(data);
          }}
          openModal={openCreatePrePaidPayment}
          setOpenModal={setOpenCreatePrePaidPayment}
        />
        <DetailsHeader />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gridAutoRows: '45px',
            gridAutoFlow: 'dense',
            padding: '16px',
            gap: '2px',
          }}
        >
          <CustomStack>
            <DetailsTitle text="Visit ID" />
            <DetailsBody text={id} />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Branch" />
            <DetailsBody text={branchName} />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Appointment ID" />
            <DetailsBody text={appointmentID} />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Appointment Start Date" />
            <DetailsBody
              text={appointmentStartTime && formatDateRow(appointmentStartTime)}
            />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Appointment End Date" />
            <DetailsBody
              text={appointmentStartTime && formatDateRow(appointmentEndTime)}
            />
          </CustomStack>
        </Box>
      </Box>
      <ApproveModal
        visitId={id}
        open={openStatusModal}
        setOpen={setOpenStatusModal}
        title="Status"
        message="Approve or Reject this visit"
      />
    </>
  );
}

VisitsDetails.propTypes = {
  data: PropType.object.isRequired,
};

export default VisitsDetails;

