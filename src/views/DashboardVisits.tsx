import * as React from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import VisitsTable from '../components/dashboard-visits/VisitsTable';
import DashboardHeader from '../components/DashboardHeader';
import FlatCreateButton from '../components/FlatCreateButton';
import CreateVisitModal from '../components/dashboard-visits/CreateVisitModal';

function DashboardVisits() {
  const [openCreateVisit, setOpenCreateVisit] = React.useState(false);
  const { data, loadingGet } = useSelector((state: any) => state.visitsReducer);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
      }}
    >
      <DashboardHeader title="Visits" />
      <FlatCreateButton
        text="Start a Visit"
        onClick={() => setOpenCreateVisit(true)}
      />

      <VisitsTable datas={data} loadingGet={loadingGet} />
      <CreateVisitModal
        createVisit={(data) => {
          console.log(data, 'create visit data');
        }}
        openModal={openCreateVisit}
        setOpenModal={setOpenCreateVisit}
      />
    </Box>
  );
}

export default DashboardVisits;

