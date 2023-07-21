import PropType from 'prop-types';
import React from 'react';

import { Box, Stack, styled } from '@mui/material';

import formatDateRow from '../../utils/formatDate_hourFirst';
import DetailsBody from '../DetailsBody';
import DetailsHeader from '../DetailsHeader';
import DetailsTitle from '../DetailsTitle';

const CustomStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: 'max-content',
}));

function PaymentsDetails({
  data: { id, debit, credit, totalPayment, totalSession, visit },
}) {
  let VisitID;
  let visitStartTime;
  let visitEndTime;

  if (visit)
    ({ startTime: visitStartTime, id: VisitID, endTime: visitEndTime } = visit);

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
            <DetailsTitle text="Payment ID" />
            <DetailsBody text={id} />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Credited Money" />
            <DetailsBody text={credit} />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Debited Money" />
            <DetailsBody text={debit} />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Total Payment" />
            <DetailsBody text={totalPayment} />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Total Session" />
            <DetailsBody text={totalSession} />
          </CustomStack>
          <CustomStack>
            <DetailsTitle text="Visit ID" />
            <DetailsBody text={VisitID} />
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
    </>
  );
}

PaymentsDetails.propTypes = {
  data: PropType.object.isRequired,
};

export default PaymentsDetails;

