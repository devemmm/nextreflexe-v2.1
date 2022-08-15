import { Stack } from '@mui/material';
import React from 'react';
import CountBox from './CountBox';
import useCountData from './useCountData';

function Counters() {
  const { data, countStyles, theme } = useCountData();
  return (
    <Stack sx={countStyles}>
      {data.map((data) => (
        <CountBox key={data.title} data={data} theme={theme} />
      ))}
    </Stack>
  );
}

export default Counters;

