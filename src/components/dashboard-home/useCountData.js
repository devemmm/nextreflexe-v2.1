import { useTheme } from '@emotion/react';
import appointmentsIcon from '../../assets/icons/appointments-icon.svg';
import patientsIcon from '../../assets/icons/patients-icon-dashboard.svg';
import visitIcon from '../../assets/icons/visit-icon.svg';

function useCountData() {
  const theme = useTheme();
  const countStyles = {
    width: { xs: '100%', md: '50%' },
    gap: '10px',
    flexFlow: 'column',
    [theme.breakpoints.up(0)]: {
      flexFlow: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.up(600)]: {
      flexFlow: 'row',
      alignItems: 'normal',
      justifyContent: 'center',
    },
    [theme.breakpoints.up(900)]: {
      flexFlow: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  };
  const data = [
    {
      icon: patientsIcon,
      title: 'Total Patients',
      count: 456,
    },
    {
      icon: visitIcon,
      title: 'Daily Visits',
      count: 125,
    },
    { icon: appointmentsIcon, title: 'Daily Appointments', count: 564 },
  ];
  return { theme, countStyles, data };
}

export default useCountData;

