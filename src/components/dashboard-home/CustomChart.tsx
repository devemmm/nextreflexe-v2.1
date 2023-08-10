import { faker } from '@faker-js/faker';
import { Box } from '@mui/material';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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
        borderColor: '#018F55',
        backgroundColor: '#018F55',
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
      <Line height={100} options={options as any} data={data} />
    </Box>
  );
};

export default CustomChart;

