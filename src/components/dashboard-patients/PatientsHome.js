import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router';
import FlatCreateButton from '../FlatCreateButton';
import Search from '../Search';
import PatientsTable from './PatientsTable';

function PatientsHome() {
  const { data: patientsData } = useSelector((state) => state.patientsReducer);
  const navigate = useNavigate();
  const { data: context, loadingGet } = useOutletContext();
  const [filteredData, setFilteredData] = useState([])

  function searchFunc(searchKey) {
    let result = patientsData.filter(item => item.fname.includes(searchKey) || item.lname.includes(searchKey) || item.email.includes(searchKey) || item.nid.includes(searchKey))
    setFilteredData(result)
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
      <PatientsTable datas={filteredData.length === 0 ? context : filteredData} loadingGet={loadingGet} />
    </>
  );
}

PatientsHome.propTypes = {
  data: PropTypes.object,
  loadingGet: PropTypes.bool,
  setOpenEditModal: PropTypes.func,
};

export default PatientsHome;
