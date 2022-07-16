import React from 'react';

import { Box, Stack, styled, useTheme } from '@mui/material';
import DetailsBody from '../DetailsBody';
import DetailsHeader from '../DetailsHeader';
import DetailsTitle from '../DetailsTitle';

const CustomStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: 'max-content',
}));

function PatientsDetails({
  data: {
    id,
    fname,
    lname,
    avatar,
    emailVerified,
    phoneVerified,
    diagnosis,
    observations,
    location,
  },
}) {
  const theme = useTheme();
  const { country, province, district, sector, cell, village } = location;

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '100%',
        height: 'max-content',
      }}
    >
      {/* <DetailsHeader text="Additional Actions" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          width: '100%',
          border: `1px solid ${theme.palette.primary.main}`,
        }}
      >
        <Box>
          <DetailsTitle text="Click here to make an appointment for this user" />
          <FlatCreateButton />
        </Box>
      </Box> */}
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
        <Box
          component="img"
          src={avatar}
          alt={avatar}
          sx={{
            backgroundColor: 'white',
            border: `1px solid ${theme.palette.primary.main}`,
            width: '150px',
            height: '150px',
            borderRadius: 1000,
            gridRow: '1/span 4',
          }}
        />
        <CustomStack>
          <DetailsTitle text="ID" />
          <DetailsBody text={id} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="First Name" />
          <DetailsBody text={fname} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Last Name" />
          <DetailsBody text={lname} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Email Verified" />
          <DetailsBody text={emailVerified.toString()} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Phone Verified" />
          <DetailsBody text={phoneVerified.toString()} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Diagnosis" />
          <DetailsBody text={diagnosis} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Country" />
          <DetailsBody text={country} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Province" />
          <DetailsBody text={province} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="District" />
          <DetailsBody text={district} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Sector" />
          <DetailsBody text={sector} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Cell" />
          <DetailsBody text={cell} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Village" />
          <DetailsBody text={village} />
        </CustomStack>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 'max-content',
          paddingX: '16px',
          gap: '2px',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <DetailsTitle text="Observations" />
        {observations && observations.length === 0 && (
          <DetailsBody text="No observations" />
        )}
        {observations &&
          observations.length !== 0 &&
          observations.map((obs, index) => (
            <DetailsBody text={`${index}.  ${obs.toString()}`} />
          ))}
      </Box>
    </Box>
  );
}

export default PatientsDetails;

