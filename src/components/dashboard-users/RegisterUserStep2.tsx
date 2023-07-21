import { MenuItem } from '@mui/material';
import React, { useState } from 'react';
import ControlledSelectField from '../ControlledSelectField';
import SelectField from '../SelectField';

import mappedLocation from '../../assets/locationMapping.json';

function RegisterUserStep2({ control, errors }: any) {
  const [location, setLocation] = useState({
    country: '',
    province: '',
    district: '',
    sector: '',
    cell: '',
    village: '',
  });
  const [availableLocation, setAvailableLocation] = useState<any>({
    country: [],
    province: [],
    district: [],
    sector: [],
    cell: [],
    village: [],
  });

  const handleSelectOption = (e: any) => {
    switch (e.target.id) {
      case 'country':
        setLocation({ ...location, country: 'RWANDA' });
        setAvailableLocation({
          ...availableLocation,
          country: [{ value: 'RWANDA', label: 'Rwanda' }],
          province: mappedLocation.children,
        });
        break;

      case 'province':
        setLocation({ ...location, province: e.target.value });
        const filteredProvince = availableLocation.province.filter(
          (item: any) => item.value === e.target.value,
        );
        setAvailableLocation({
          ...availableLocation,
          district: filteredProvince[0].children,
        });
        break;

      case 'district':
        setLocation({ ...location, district: e.target.value });
        const filteredSector = availableLocation.district.filter(
          (location: any) => location.value === e.target.value,
        );
        setAvailableLocation({
          ...availableLocation,
          sector: filteredSector[0].children,
        });
        break;

      case 'sector':
        setLocation({ ...location, sector: e.target.value });
        const filteredVillage = availableLocation.sector.filter(
          (location: any) => location.value === e.target.value,
        );
        setAvailableLocation({
          ...availableLocation,
          cell: filteredVillage[0].children,
        });
        break;

      case 'cell':
        setLocation({ ...location, cell: e.target.value });
        const filteredCell = availableLocation.cell.filter(
          (location: any) => location.value === e.target.value,
        );
        setAvailableLocation({
          ...availableLocation,
          village: filteredCell[0].children,
        });
        break;

      case 'village':
        setLocation({ ...location, village: e.target.value });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ControlledSelectField
        name="country"
        id="country"
        defaultValue=""
        control={control}
        input={SelectField}
        customOnChange={handleSelectOption}
        variant="filled"
        label="Country"
        sx={{ width: '100%', maxWidth: '942px' }}
        helperText={errors?.country ? errors.country.message : undefined}
        error={errors?.country ? true : false}
      >
        <MenuItem value={'RWANDA'}>Rwanda</MenuItem>
        <MenuItem value={'ZAMBIA'}>Zambia</MenuItem>
      </ControlledSelectField>
      <ControlledSelectField
        name="province"
        id="province"
        defaultValue=""
        control={control}
        input={SelectField}
        customOnChange={handleSelectOption}
        variant="filled"
        label="Province"
        sx={{ width: '100%', maxWidth: '942px' }}
        helperText={errors?.province ? errors.province.message : undefined}
        error={errors?.province ? true : false}
      >
        {availableLocation.province.map((item: any) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.value}
            </MenuItem>
          );
        })}
      </ControlledSelectField>
      <ControlledSelectField
        name="district"
        id="district"
        defaultValue=""
        control={control}
        input={SelectField}
        customOnChange={handleSelectOption}
        variant="filled"
        label="District"
        sx={{ width: '100%', maxWidth: '942px' }}
        helperText={errors?.district ? errors.district.message : undefined}
        error={errors?.district ? true : false}
      >
        {availableLocation.district.map((item: any, index: number) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.value}
            </MenuItem>
          );
        })}
      </ControlledSelectField>
      <ControlledSelectField
        name="sector"
        id="sector"
        defaultValue=""
        control={control}
        input={SelectField}
        customOnChange={handleSelectOption}
        variant="filled"
        label="Sector"
        sx={{ width: '100%', maxWidth: '942px' }}
        helperText={errors?.sector ? errors.sector.message : undefined}
        error={errors?.sector ? true : false}
      >
        {availableLocation.sector.map((item: any, index: number) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.value}
            </MenuItem>
          );
        })}
      </ControlledSelectField>
      <ControlledSelectField
        name="cell"
        id="cell"
        defaultValue=""
        control={control}
        input={SelectField}
        customOnChange={handleSelectOption}
        variant="filled"
        label="Cell"
        sx={{ width: '100%', maxWidth: '942px' }}
        helperText={errors?.cell ? errors.cell.message : undefined}
        error={errors?.cell ? true : false}
      >
        {availableLocation.cell.map((item: any, index: number) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.value}
            </MenuItem>
          );
        })}
      </ControlledSelectField>
      <ControlledSelectField
        name="village"
        id="village"
        defaultValue=""
        control={control}
        input={SelectField}
        customOnChange={handleSelectOption}
        variant="filled"
        label="Village"
        sx={{ width: '100%', maxWidth: '942px' }}
        helperText={errors?.village ? errors.village.message : undefined}
        error={errors?.village ? true : false}
      >
        {availableLocation.village.map((item: any, index: number) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.value}
            </MenuItem>
          );
        })}
      </ControlledSelectField>
    </>
  );
}

export default RegisterUserStep2;

