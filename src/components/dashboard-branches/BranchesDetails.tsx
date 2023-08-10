import React from 'react';

import { Box, Stack, styled } from '@mui/material';
import DetailsBody from '../DetailsBody';
import DetailsHeader from '../DetailsHeader';
import DetailsTitle from '../DetailsTitle';

const CustomStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: 'max-content',
}));

function BranchesDetails({ data: { location } }: any) {
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
      ></Box>
    </Box>
  );
}

export default BranchesDetails;

