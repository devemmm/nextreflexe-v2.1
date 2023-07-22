import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import DashboardHeader from '../components/DashboardHeader';

function DashboardPatients() {
  const { data, loadingGet } = useSelector((state) => state.patientsReducer);

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
        <DashboardHeader title="Patients" />
        <Outlet context={{ data, loadingGet }} />
      </Box>
    </>
  );
}

export default DashboardPatients;
