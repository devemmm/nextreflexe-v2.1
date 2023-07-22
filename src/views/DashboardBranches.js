import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@mui/material';

import { toast } from 'react-toastify';
import axiosInstance from '../axios.instance';
import BranchesTable from '../components/dashboard-branches/BranchesTable';
import CreateBranchModal from '../components/dashboard-branches/CreateBranchModal';
import UpdateBranchModal from '../components/dashboard-branches/UpdateBranchModal';
import DashboardHeader from '../components/DashboardHeader';
import FlatCreateButton from '../components/FlatCreateButton';
import {
  branchesErrorAction,
  createBanchAction,
  pendingBranchAction,
} from '../redux/reducers/branches.reducer';
import fetchBranchesData from '../utils/fetchBranchesData';

function DashboardBranches() {
  const dispatch = useDispatch();
  const { data, loadingGet } = useSelector((state) => state.branchesReducer);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const onsubmit = (data) => {
    const {
      id,
      name,
      userId,
      country,
      district,
      province,
      sector,
      cell,
      village,
    } = data;
    dispatch(pendingBranchAction({}));
    axiosInstance
      .post('/branches', {
        id,
        name,
        managerId: userId,
        location: { country, province, district, sector, cell, village },
      })
      .then((res) => {
        dispatch(createBanchAction(res.data));
        toast.success('New branch has been created');
        fetchBranchesData(dispatch);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
        dispatch(branchesErrorAction(error));
      });
  };
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
          setOpenUpdateModal={setOpenUpdateModal}
        />
      </Box>
      <CreateBranchModal
        createBranch={(data) => {
          onsubmit(data);
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
    </>
  );
}

export default DashboardBranches;

