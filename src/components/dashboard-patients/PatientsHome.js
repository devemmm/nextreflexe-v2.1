import PropTypes from 'prop-types';
import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router';
import FlatCreateButton from '../FlatCreateButton';
import Search from '../Search';
import PatientsTable from './PatientsTable';

function PatientsHome() {
  const { data: patientsData } = useSelector((state) => state.patientsReducer);
  const navigate = useNavigate();
  const { data: context, loadingGet } = useOutletContext();

  function searchFunc(data) {
    console.log(data);
    console.log(patientsData);
    // dispatch(getDataAction());
  }

  return (
    <>
      <FlatCreateButton
        text="Register a Patient"
        onClick={() => {
          navigate('register');
        }}
      />
      <Search searchFunc={searchFunc} />
      <PatientsTable datas={context} loadingGet={loadingGet} />
    </>
  );
}

PatientsHome.propTypes = {
  data: PropTypes.object,
  loadingGet: PropTypes.bool,
  setOpenEditModal: PropTypes.func,
};

export default PatientsHome;
