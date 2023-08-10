import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import AppointmentsTable from '../components/dashboard-appointment/AppointmentsTable';
import CreateAppointmentModal from '../components/dashboard-appointment/CreateAppointmentModal';
import DashboardHeader from '../components/DashboardHeader';
import FlatCreateButton from '../components/FlatCreateButton';
import Search from '../components/Search';

function DashboardAppointments() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const { data, loadingGet } = useSelector(
    (state) => state.appointmentsReducer,
  );
  const [filteredData, setFilteredData] = useState([]);
  function searchFunc(searchKey) {
    let result = data.filter(
      (item) =>
        item.patient.nid.includes(searchKey) ||
        item.patient.fname.includes(searchKey) ||
        item.patient.lname.includes(searchKey) ||
        item.patient.email.includes(searchKey) ||
        item.patient.phone.includes(searchKey),
    );
    setFilteredData(result);
    // dispatch(getDataAction());
  }

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
        <Search searchFunc={searchFunc} />

        <AppointmentsTable
          datas={filteredData.length === 0 ? data : filteredData}
          loadingGet={loadingGet}
        />
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

