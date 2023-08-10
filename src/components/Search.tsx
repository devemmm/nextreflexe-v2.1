import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Input, MenuItem, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import ControlledSelectField from './ControlledSelectField';
import SelectField from './SelectField';

function Search({ sx, searchFunc, ...props }: any) {
  const theme = useTheme();
  const { handleSubmit, control, reset } = useForm();
  const [searchKey, setSearchKey] = useState('');

  return (
    <Box
      sx={{
        width: '100%',
        height: 'max_content',
        padding: '10px 15px',
        display: 'flex',
        flexFlow: 'row wrap',
        gap: {
          xs: '10px',
          sm: '20px',
        },
        ...sx,
      }}
      {...props}
    >
      {/* <ControlledSelectField
        control={control}
        defaultValue=""
        name="name"
        label="Choose Name"
        input={SelectField}
        size="small"
        sx={{
          width: '100%',
          maxWidth: '150px',
          [theme.breakpoints.down(300)]: {
            maxWidth: 'none',
          },
        }}
      >
        <MenuItem value="">Choose name</MenuItem>
      </ControlledSelectField> */}

      <ControlledSelectField
        control={control}
        defaultValue=""
        name="status"
        label="Choose Status"
        input={SelectField}
        size="small"
        sx={{
          width: '100%',
          maxWidth: '150px',
          [theme.breakpoints.down(300)]: {
            maxWidth: 'none',
          },
        }}
      >
        <MenuItem value="">Choose Status</MenuItem>
        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
        <MenuItem value="PENDING">PENDING</MenuItem>
        <MenuItem value="SUCCESS">SUCCESS</MenuItem>
        <MenuItem value="FAILED">FAILED</MenuItem>
      </ControlledSelectField>
      <Input
        value={searchKey}
        placeholder="Search"
        onChange={(e) => {
          setSearchKey(e.target.value);
          searchFunc(searchKey);
        }}
        sx={{
          width: '100%',
          maxWidth: '250px',
          [theme.breakpoints.down(300)]: {
            maxWidth: 'none',
          },
        }}
      />
      <Button
        variant="contained"
        size="small"
        sx={{
          fontVariant: 'none',
          paddingY: 0,
          height: '40px',
          [theme.breakpoints.down(300)]: {
            width: '100%',
          },
        }}
        onClick={(e) => {
          handleSubmit(searchFunc)(e).then(() => {
            reset();
          });
        }}
      >
        <Typography color="white" fontSize="12px" fontWeight="bold">
          Reset
        </Typography>
      </Button>
    </Box>
  );
}
Search.propTypes = {
  searchFunc: PropTypes.func.isRequired,
  sx: PropTypes.object,
};

export default Search;

