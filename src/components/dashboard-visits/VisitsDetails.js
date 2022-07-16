import React, { useState } from 'react';
import PropType from 'prop-types';

import { Stack, Box, styled, useTheme } from '@mui/material';

import ApproveModal from '../ApproveModal';
import DetailsBody from '../DetailsBody';
import DetailsHeader from '../DetailsHeader';
import DetailsTitle from '../DetailsTitle';
import FlatCreateButton from '../FlatCreateButton';
import formatDateRow from '../../utils/formatDate_hourFirst';

const CustomStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: 'max-content',
}));

function VisitsDetails({ data: { id, appointment, branch } }) {
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
