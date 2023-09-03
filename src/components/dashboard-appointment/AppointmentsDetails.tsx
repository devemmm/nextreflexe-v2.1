import React, { useState } from 'react';
import PropType from 'prop-types';

import { Stack, Box, styled, useTheme } from '@mui/material';

import ApproveModal from '../ApproveModal';
import DetailsBody from '../DetailsBody';
import DetailsHeader from '../DetailsHeader';
import DetailsTitle from '../DetailsTitle';
import FlatCreateButton from '../FlatCreateButton';
import StartVisitModal from './StartVisitModal';
import formatDateRow from '../../utils/formatDate_hourFirst';

const CustomStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: 'max-content',
}));

function AppointmentsDetails({
  data: { id, visit },
}: {
  data: { id: string; visit: any };
}) {
  let visitID;
  let visitStartTime;
  let visitEndTime;
  if (visit)
    ({ startTime: visitStartTime, id: visitID, endTime: visitEndTime } = visit);
  const theme = useTheme();
  const [openStartVisitModal, setOpenStartVisitModal] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false);

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
            gridTemplateColumns: 'repeat(auto-fit, 50%)',
            width: '100%',
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Box
            sx={{
              padding: 1,
            }}
          >
            <DetailsTitle text="Click here to start a visit for this user" />
            <FlatCreateButton
              text="Start Visit"
              sx={{ maxWidth: '250px', width: '100%' }}
              onClick={() => setOpenStartVisitModal(true)}
            />
          </Box>
          <Box>
            <DetailsTitle text="Click here to accept or reject this appointment" />
            <FlatCreateButton
              text="Status"
              sx={{ maxWidth: '250px', width: '100%' }}
              onClick={() => setOpenStatusModal(true)}
            />
          </Box>
        </Box>
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
            <DetailsTitle text="Appointment ID" />
            <DetailsBody text={id} />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Visit ID" />
            <DetailsBody text={visitID} />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Visit Start Date" />
            <DetailsBody
              text={visitStartTime && formatDateRow(visitStartTime)}
            />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Visit End Date" />
            <DetailsBody text={visitStartTime && formatDateRow(visitEndTime)} />
          </CustomStack>
        </Box>
      </Box>
      <StartVisitModal
        createVisit={(data: any) => {
          console.log(data, 'start visit in appointment data');
        }}
        appointmentId={id}
        openModal={openStartVisitModal}
        setOpenModal={setOpenStartVisitModal}
      />
      <ApproveModal
        visitId={id}
        open={openStatusModal}
        setOpen={setOpenStatusModal}
        title="Status"
        message="Approve or Reject this appointment"
        type="appointment"
      />
    </>
  );
}

AppointmentsDetails.propType = {
  data: PropType.object.isRequired,
};

export default AppointmentsDetails;

