import * as React from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import ServiceCard from '../components/dashboard-services/ServiceCard';
import DashboardHeader from '../components/DashboardHeader';
import FlatCreateButton from '../components/FlatCreateButton';
import Loading from '../components/Loading';
import CreateServiceModal from '../components/dashboard-services/CreateServiceModal';
import UpdateServiceModal from '../components/dashboard-services/UpdateServiceModal';
import DeleteModal from '../components/DeleteModal';

function DashboardServices() {
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const { data, loadingGet } = useSelector((state) => state.servicesReducer);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <DashboardHeader title="Services" />
        <FlatCreateButton
          text="Create Services"
          onClick={() => {
            setOpenCreateModal(true);
          }}
        />
        {loadingGet ? (
          <Loading />
        ) : (
          <Box
            sx={{
              display: 'grid',
              rowGap: '20px',
              columnGap: '10px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              paddingY: '10px',
            }}
          >
            {data.map((service, index) => {
              return (
                <ServiceCard
                  key={service.name + ' ' + index}
                  datas={service}
                  updateService={() => {
                    setOpenUpdateModal(true);
                  }}
                  deleteService={() => {
                    setOpenDeleteModal(true);
                  }}
                />
              );
            })}
          </Box>
        )}
      </Box>
      <CreateServiceModal
        createService={(data) => {
          console.log(data, 'service data');
        }}
        openModal={openCreateModal}
        setOpenModal={setOpenCreateModal}
      />
      <UpdateServiceModal
        updateService={(data) => {
          console.log(data, 'service data');
        }}
        openModal={openUpdateModal}
        setOpenModal={setOpenUpdateModal}
      />
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        title="Delete Service"
        message="Do you really wish to delete this service ?"
      />
    </>
  );
}

export default DashboardServices;
