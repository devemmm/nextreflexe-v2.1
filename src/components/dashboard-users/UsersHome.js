import React from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import FlatCreateButton from '../FlatCreateButton';
import UsersTable from './UsersTable';

function UsersHome() {
  const navigate = useNavigate();
  const { data, loadingGetUser } = useOutletContext();

  return (
    <>
      <FlatCreateButton
        text="Create a User"
        onClick={() => {
          navigate('register');
        }}
      />
      <UsersTable datas={data} loadingGet={loadingGetUser} />
    </>
  );
}

export default UsersHome;

