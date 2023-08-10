import { Stack } from '@mui/material';
import React from 'react';
import CountBox from './CountBox';
import useCountData from './useCountData';

function Counters() {
  const { data, countStyles } = useCountData();
  return (
    <Stack sx={countStyles}>
      {data.map((data) => (
        <CountBox key={data.title} data={data} />
      ))}
    </Stack>
  );
}

export default Counters;

