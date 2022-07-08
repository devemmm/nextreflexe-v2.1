import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../axios.instance';
import DashboardHeader from '../components/DashboardHeader';
import FlatCreateButton from '../components/FlatCreateButton';
import Loading from '../components/Loading';
import {
  getServicesAction,
  loadingGetServicesAction,
  servicesErrorAction,
} from '../redux/reducers/services.reducer';

import backTretIcon from '../assets/icons/backTret-icon.svg';
import disabilityTretIcon from '../assets/icons/disabilityTret-icon.svg';
import emigrainesIcon from '../assets/icons/emigraines-icon.svg';
import jointTretIcon from '../assets/icons/jointTret-icon.svg';
import shoulderTretIcon from '../assets/icons/shoulderTret-icon.svg';
import ServiceCard from '../components/dashboard-services/ServiceCard';

const dummyData = [
  {
    icon: jointTretIcon,
    header: 'Joint Treatment',
    body: 'Be they knees, wrists, hip joints and elbow joints, our therapists will diagnose each case and prescribe the requisite therapy and duration.',
  },
  {
    icon: backTretIcon,
    header: 'Back Treatement',
    body: 'We do have specific procedures designed to soothe back pain and completely eliminate any discomfort or pain in a very short period.',
  },
  {
    icon: shoulderTretIcon,
    header: 'Shoulder Treatement',
    body: 'We offer tailor-made treatment that is structured for the shoulders.',
  },
  {
    icon: disabilityTretIcon,
    header: 'Disability Treatement',
    body: 'Through our therapy, people living with disability can have their lives greatly improved through increasing their energy levels, improving blood circulation ...',
  },
  {
    icon: emigrainesIcon,
    header: 'Migraines',
    body: 'Be they knees, wrists, hip joints and elbow joints, our therapists will diagnose each case and prescribe the requisite therapy and duration',
  },
];

function DashboardServices() {
  const dispatch = useDispatch();
  const { data, loadingGet } = useSelector((state) => state.servicesReducer);

  useEffect(() => {
    dispatch(loadingGetServicesAction({}));
    axiosInstance
      .get('/services')
      .then(({ data }) => {
        console.log(data, 'in services');
        dispatch(getServicesAction(dummyData));
      })
      .catch((error) => {
        console.log(error);
        dispatch(servicesErrorAction(error.message));
      });
    // eslint-disable-next-line
  }, []);

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
      <DashboardHeader title="Services" />
      <FlatCreateButton text="Create Services" />
      {loadingGet ? (
        <Loading />
      ) : (
        <Grid
          container
          spacing={{
            xs: 1,
            sm: 2,
          }}
          sx={
            {
              // padding: {
              // 	xs: '25px 20px',
              // 	sm: '35px 30px',
              // 	md: '50px 40px',
              // 	lg: '65px 50px',
              // },
            }
          }
        >
          {data.map((service, index) => {
            return (
              <ServiceCard key={service.name + ' ' + index} datas={service} />
            );
          })}
        </Grid>
      )}
    </Box>
  );
}

export default DashboardServices;

