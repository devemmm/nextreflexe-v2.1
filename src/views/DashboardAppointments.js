import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import AppointmentsTable from '../components/dashboard-appointments/AppointmentsTable';
import CreateAppointmentModal from '../components/dashboard-appointments/CreateAppointmentModal';
import DashboardHeader from '../components/DashboardHeader';
import FlatCreateButton from '../components/FlatCreateButton';

function DashboardAppointments() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const { data, loadingGet } = useSelector(
    (state) => state.appointmentsReducer,
  );

  function createAppointment(data) {
    console.log(data);
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <DashboardHeader title="Appointments" />
        <FlatCreateButton
          text="Make an Appointment"
          onClick={() => {
            setOpenCreateModal(true);
          }}
        />
        <AppointmentsTable datas={data} loadingGet={loadingGet} />
        <CreateAppointmentModal
          openModal={openCreateModal}
          setOpenModal={setOpenCreateModal}
          createAppointment={createAppointment}
        />
      </Box>
    </>
  );
}

export default DashboardAppointments;
