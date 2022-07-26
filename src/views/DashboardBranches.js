import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import BranchesTable from '../components/dashboard-branches/BranchesTable';
import DashboardHeader from '../components/DashboardHeader';
import FlatCreateButton from '../components/FlatCreateButton';
import CreateBranchModal from '../components/dashboard-branches/CreateBranchModal';
import DeleteModal from '../components/DeleteModal';
import UpdateBranchModal from '../components/dashboard-branches/UpdateBranchModal';

function DashboardBranches() {
  const { data, loadingGet } = useSelector((state) => state.branchesReducer);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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
        <DashboardHeader title="Branches" />
        <FlatCreateButton
          text="Create Branch"
          onClick={() => {
            setOpenCreateModal(true);
          }}
        />
        <BranchesTable
          datas={data}
          loadingGet={loadingGet}
          setOpenDeleteModal={setOpenDeleteModal}
          setOpenUpdateModal={setOpenUpdateModal}
        />
      </Box>
      <CreateBranchModal
        createBranch={(data) => {
          console.log(data, 'branches data');
        }}
        openModal={openCreateModal}
        setOpenModal={setOpenCreateModal}
      />
      <UpdateBranchModal
        updateBranch={(data) => {
          console.log(data, 'branches data');
        }}
        openModal={openUpdateModal}
        setOpenModal={setOpenUpdateModal}
      />
      <DeleteModal
        title="Delete Branch"
        message="Do you really wish to delete this branch ?"
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />
    </>
  );
}

export default DashboardBranches;

