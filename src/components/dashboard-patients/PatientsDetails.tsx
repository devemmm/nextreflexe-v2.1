import React, { useState } from 'react';
import { Box, Stack, styled, useTheme } from '@mui/material';
import DetailsBody from '../DetailsBody';
import DetailsHeader from '../DetailsHeader';
import DetailsTitle from '../DetailsTitle';
import FlatCreateButton from '../FlatCreateButton';

// import CreateAppointmentModal from '../dashboard-appointment/CreateAppointmentModal';
import { toast } from 'react-toastify';
import axiosInstance from '../../axios.instance';
import moment from 'moment';
import CreateAppointmentModal from '../dashboard-appointment/CreateAppointmentModal';

const CustomStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: 'max-content',
}));

const PatientsDetails = ({
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
}: any) => {
  const theme = useTheme();
  const [openCreateModal, setOpenCreateModal] = useState(false);

  function createAppointment(data: any) {
    data.patientId = id;
    data.startTime = moment(data?.startTime).format('YYYY-MM-DD HH:mm:ss');
    axiosInstance
      .post('/appointments', data)
      .then((res) => {
        toast.success('making appointment successful');
        setOpenCreateModal(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '100%',
        height: 'max-content',
      }}
    >
      {/* <DetailsHeader text="Additional Actions" /> */}
      <Box
        sx={{
          paddingLeft: '20px',
          paddingTop: '20px',
          paddingBottom: '20px',
          alignSelf: 'center',
        }}
      >
        <FlatCreateButton
          text="Make an Appointment"
          onClick={() => {
            setOpenCreateModal(true);
          }}
        />
      </Box>
      {/* <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          width: '30%',
          border: `1px solid ${'orange'}`,
          alignSelf: 'center'
        }}
      >
        <Box 
          sx={{paddingLeft: '20px', paddingTop: '20px', paddingBottom: '20px', alignSelf: 'center'}}
        >
          <FlatCreateButton
            text="Make an Appointment"
            onClick={() => {
              // setOpenCreateModal(true);
            }}
          />
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
          <DetailsBody text={location?.country} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Province" />
          <DetailsBody text={location?.province} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="District" />
          <DetailsBody text={location?.district} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Sector" />
          <DetailsBody text={location?.sector} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Cell" />
          <DetailsBody text={location?.cell} />
        </CustomStack>
        <CustomStack>
          <DetailsTitle text="Village" />
          <DetailsBody text={location?.village} />
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
          observations.map((obs: any, index: number) => (
            <DetailsBody text={`${index}.  ${obs.toString()}`} />
          ))}
      </Box>
      <CreateAppointmentModal
        openModal={openCreateModal}
        setOpenModal={setOpenCreateModal}
        createAppointment={createAppointment}
        disableSelectPatient={true}
      />
    </Box>
  );
};

export default PatientsDetails;

