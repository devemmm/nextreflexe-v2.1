import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Appointments Status',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const CustomChart = () => {
  const theme = useTheme();
  const data = {
    labels,
    datasets: [
      {
        label: 'Pending',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        borderColor: 'blue',
        backgroundColor: 'blue',
      },
      {
        label: 'Approved',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primary,
      },

      {
        label: 'Cancelled',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        borderColor: 'red',
        backgroundColor: 'red',
      },
    ],
  };
  return (
    <Box sx={{ background: 'white' }}>
      <Line height={100} options={options} data={data} />
    </Box>
  );
};

export default CustomChart;

