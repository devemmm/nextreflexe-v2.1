import React from 'react';

import { Box, Stack, styled, useTheme } from '@mui/material';
import DetailsBody from '../DetailsBody';
import DetailsHeader from '../DetailsHeader';
import DetailsTitle from '../DetailsTitle';
import formatDateRow from '../../utils/formatDate_hourFirst';
interface UserProps {
  data: {
    avatar: string;
    id: string;
    nid: string;
    dob: string;
    userType: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    branchID: string;
    location: any;
  };
}
const CustomStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: 'max-content',
}));

function UsersDetails({
  data: {
    avatar,
    id,
    nid,
    dob,
    userType,
    emailVerified,
    phoneVerified,
    branchID,
    location,
  },
}: UserProps) {
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
          <DetailsTitle text="National ID" />
          <DetailsBody text={nid} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Birth Date" />
          <DetailsBody
            text={(() => {
              try {
                new Date(dob);
                return formatDateRow(dob, false);
              } catch (error) {
                return 'none';
              }
            })()}
          />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Role" />
          <DetailsBody text={userType} />
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
          <DetailsTitle text="Branch ID" />
          <DetailsBody text={branchID} />
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
      ></Box>
    </Box>
  );
}

export default UsersDetails;

