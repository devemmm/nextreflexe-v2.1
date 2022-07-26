import React from 'react';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Box,
  Button,
  Stack,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { registerPatientSchema } from '../../validations/patients.validation';
import SignUpStep2 from './SignUpStep2';
import SignUpStep1 from './SignUpStep1';
import StepperTitle from './StepperTitle';

const CustomConnectorLine = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderRadius: '10px',
    borderColor: theme.palette.primary.main,
    borderTopWidth: 3,
  },
}));
const StepperButton = ({ Icon, Text, direction, children, ...props }) => {
  return (
    <Button color="primary" variant="contained" {...props}>
      <Stack
        width="max-content"
        direction="row"
        height="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection={direction}
      >
        <Icon
          sx={{
            height: '16px',
          }}
        />
        <Typography color="white" fontSize="14px">
          {Text}
        </Typography>
      </Stack>
    </Button>
  );
};

function SignUpStepper() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const {
    getValues,
    control,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerPatientSchema),
  });

  return (
    <>
      <Box
        component="div"
        sx={{
          marginY: '20px',
          padding: '10px 15px',
          backgroundColor: 'white',
          height: 'max-content',
        }}
      >
        <Stepper connector={<CustomConnectorLine />} activeStep={activeStep}>
          {Array.from(Array(2)).map((_, index) => {
            return (
              <Step key={index}>
                <StepLabel></StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      <Box
        sx={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <StepperTitle
            data={
              activeStep === 0
                ? 'Personnal information'
                : 'Let’ s get your location'
            }
            sx={{ height: 'max-content', padding: '5px 10px 10px 10px' }}
          />
        </Box>
        <Stack
          spacing={{
            xs: '5px',
            sm: '10px',
          }}
          alignItems="center"
          sx={{
            paddingX: '15px',
            overflowY: 'auto',
            flexShrink: 1,
          }}
        >
          {activeStep === 0 && (
            <SignUpStep1 control={control} errors={errors} />
          )}
          {activeStep === 1 && (
            <SignUpStep2 control={control} errors={errors} />
          )}
        </Stack>
        <Stack
          justifyContent="space-between"
          direction="row"
          padding="10px"
          sx={{
            marginTop: 'auto',
          }}
        >
          <StepperButton
            Text={activeStep <= 0 ? 'Back' : 'PREVIOUS'}
            direction="row"
            Icon={ArrowBackIosNewIcon}
            onClick={() => {
              if (activeStep <= 0) {
                navigate('../');
              } else {
                setActiveStep((state) => state - 1);
              }
            }}
          />
          <StepperButton
            Text={activeStep >= 1 ? 'REGISTER' : 'NEXT'}
            direction="row-reverse"
            Icon={ArrowForwardIosIcon}
            onClick={async () => {
              if (activeStep >= 1) {
                await trigger([
                  'country',
                  'province',
                  'district',
                  'sector',
                  'cell',
                  'village',
                ]).then((value) => {
                  if (value) console.log(getValues());
                });
              } else {
                trigger([
                  'firstName',
                  'lastName',
                  'email',
                  'password',
                  'birthDate',
                  'phone',
                  'nationalId',
                ]).then((value) => {
                  if (value) {
                    setActiveStep((state) => state + 1);
                  }
                });
              }
            }}
          />
        </Stack>
      </Box>
    </>
  );
}

export default SignUpStepper;

