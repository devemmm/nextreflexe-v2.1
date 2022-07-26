import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import AppointmentForm from '../home-page/AppointmentForm';
import AboveNavbar from './AboveNavbar';

const HeaderLinkTypography = ({
  props: { currentPathName, to, linkName, props, activeColor },
}) => (
  <Typography
    color={currentPathName === to ? activeColor : 'black'}
    fontWeight={300}
    fontFamily="Titillium Web"
    sx={{
      transition: 'all 0.1s ease-in-out',
      fontSize: '14px',
      '@media (max-width: 1035px)': {
        '&': {
          fontSize: '12px',
        },
      },
    }}
    {...props}
  >
    {linkName.toUpperCase()}
  </Typography>
);
const DrawerLinkTypography = ({
  props: { currentPathName, to, linkName, props, activeColor },
}) => (
  <Typography
    color={currentPathName === to ? activeColor : 'black'}
    fontWeight={400}
    fontFamily="Titillium Web"
    sx={{
      transition: 'all 0.1s ease-in-out',
      fontSize: '16px',
    }}
    {...props}
  >
    {linkName.toUpperCase()}
  </Typography>
);
const CustomLink = ({
  to,
  linkName,
  activeColor,
  currentPathName,
  onClick,
  setOpenDrawer,
  CustomTypography,
  customFunction,
  props,
}) => (
  <Link
    onClick={() => {
      onClick(to);
      setOpenDrawer(false);
      if (customFunction) {
        customFunction();
      }
    }}
    to={to}
    style={{ textDecoration: 'none' }}
  >
    <CustomTypography
      props={{ currentPathName, to, linkName, props, activeColor }}
    />
  </Link>
);
const CustomIdLink = ({
  to,
  linkName,
  currentPathName,
  activeColor,
  onClick,
  setOpenDrawer,
  CustomTypography,
  customFunction,
  props,
}) => {
  return (
    <a
      href={to}
      onClick={(e) => {
        onClick(to);
        setOpenDrawer(false);
        if (customFunction) {
          customFunction();
        }
      }}
      style={{ textDecoration: 'none' }}
    >
      <CustomTypography
        props={{ currentPathName, to, linkName, props, activeColor }}
      />
    </a>
  );
};
const CustomImg = styled('img')(() => ({
  margin: '0px 15px',
  '@media (max-width: 1035px)': {
    '&': {
      width: '100px',
    },
  },
  '@media (max-width: 768px)': {
    '&': {
      width: '70px',
    },
  },
}));
const CustomIconButton = styled(IconButton)(() => ({
  display: 'none !important',
  '@media (max-width: 768px)': {
    '&': {
      display: 'block !important',
    },
  },
}));
const CustomMenuIcon = ({ setOpenDrawer, iconStyles, ...props }) => (
  <CustomIconButton
    onClick={() => {
      setOpenDrawer((state) => {
        return !state;
      });
    }}
    {...props}
  >
    <MenuIcon
      sx={{
        width: '25px',
        height: '25px',
        display: 'none !important',
        '@media (max-width: 768px)': {
          '&': {
            display: 'block !important',
          },
        },
        ...iconStyles,
      }}
    />
  </CustomIconButton>
);

function NavBar({ sticked, getToTop }) {
  const theme = useTheme();
  const [selectedLink, setSelectedLink] = useState(
    window.location.pathname + window.location.hash,
  );
  const [openDrawer, setOpenDrawer] = useState(false);

  const [showAppontmentModel, setShowAppontmentModel] = useState(false);

  const LinkList = ({ activeColor, props, CustomTypography }) => [
    <CustomLink
      currentPathName={selectedLink}
      onClick={setSelectedLink}
      to="/home"
      linkName="home"
      activeColor={activeColor}
      props={props}
      CustomTypography={CustomTypography}
      setOpenDrawer={setOpenDrawer}
      customFunction={() => getToTop()}
    />,
    <CustomIdLink
      currentPathName={selectedLink}
      onClick={setSelectedLink}
      to="/home#about-us"
      linkName="About us"
      activeColor={activeColor}
      props={props}
      CustomTypography={CustomTypography}
      setOpenDrawer={setOpenDrawer}
    />,
    <CustomIdLink
      currentPathName={selectedLink}
      onClick={setSelectedLink}
      to="/home#services"
      linkName="SERVICES"
      activeColor={activeColor}
      props={props}
      CustomTypography={CustomTypography}
      setOpenDrawer={setOpenDrawer}
    />,
    <CustomIdLink
      currentPathName={selectedLink}
      onClick={setSelectedLink}
      to="/home#our-methods"
      linkName="OUR METHODS"
      activeColor={activeColor}
      props={props}
      CustomTypography={CustomTypography}
      setOpenDrawer={setOpenDrawer}
    />,
    <CustomLink
      currentPathName={selectedLink}
      onClick={setSelectedLink}
      to="/gallery"
      linkName="GALLERY"
      activeColor={activeColor}
      props={props}
      CustomTypography={CustomTypography}
      setOpenDrawer={setOpenDrawer}
    />,
    <CustomIdLink
      currentPathName={selectedLink}
      onClick={setSelectedLink}
      to="/our-people"
      linkName="OUR PEOPLE"
      activeColor={activeColor}
      props={props}
      CustomTypography={CustomTypography}
      setOpenDrawer={setOpenDrawer}
    />,
    <CustomIdLink
      currentPathName={selectedLink}
      onClick={setSelectedLink}
      to="/home#get-in-touch"
      linkName="GET IN TOUCH"
      activeColor={activeColor}
      props={props}
      CustomTypography={CustomTypography}
      setOpenDrawer={setOpenDrawer}
    />,
    <CustomLink
      currentPathName={selectedLink}
      onClick={setSelectedLink}
      to="/signin"
      linkName="SIGN IN"
      activeColor={activeColor}
      props={props}
      CustomTypography={CustomTypography}
      setOpenDrawer={setOpenDrawer}
    />,
    <CustomLink
      currentPathName={selectedLink}
      onClick={setSelectedLink}
      to="/signup"
      linkName="SIGN UP"
      activeColor={activeColor}
      props={props}
      CustomTypography={CustomTypography}
      setOpenDrawer={setOpenDrawer}
    />,
  ];

  return (
    <>
      <AboveNavbar />
      <Box
        component="div"
        sx={{
          transition: 'all 0.01s ease-in-out',
          zIndex: 100,
          display: 'flex',
          flexFlow: 'column nowrap',
          width: '100%',
          alignItems: 'center',
          padding: sticked ? '0px 0px' : '0px 20px',
          position: sticked ? 'fixed' : 'static',
          left: 0,
          top: '-10px',
          willChange: 'transform',
          '@media (max-width: 768px)': {
            '&': {
              position: 'fixed',
              top: '0px',
              left: '0px',
              willChange: 'auto',
              padding: '0px 0px',
            },
          },
        }}
      >
        <Box
          component="div"
          sx={{
            willChange: 'transform',
            display: 'flex',
            height: '80px',
            width: sticked ? '100%' : 'calc(100% - 66.5px)',
            maxWidth: sticked ? '100%' : '1100px',
            margin: sticked ? '10px 0px 0px 0px' : '10px 66.5px 0px 0px',
            padding: sticked ? '0px 10px 0px 0px' : '0px 66.5px 0px 0px',
            background: theme.colors.grey,
            borderRadius: sticked ? '0px' : '53px',
            boxShadow: sticked ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
            '@media (max-width: 1035px)': {
              '&': {
                height: '70px',
              },
            },
            '@media (max-width: 864px)': {
              '&': {
                margin: '10px 0px 0px 0px',
                padding: '0px 0px 0px 0px',
                width: '100%',
              },
            },
            '@media (max-width: 768px)': {
              '&': {
                margin: '0px 0px 0px 0px',
                borderRadius: '0px',
                width: '100%',
                height: '50px',
              },
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <CustomImg src={logo} alt="logo holder" />
            <CustomMenuIcon
              setOpenDrawer={setOpenDrawer}
              sx={{ marginLeft: 'auto' }}
            />
            <Grid
              container
              item
              xs="auto"
              gap={{ xs: '10px', md: '15px' }}
              alignItems="center"
              sx={{
                margin: '0px auto',
                '@media (max-width: 768px)': {
                  '&': {
                    display: 'none !important',
                  },
                },
              }}
            >
              {LinkList({
                activeColor: 'primary',
                CustomTypography: HeaderLinkTypography,
              }).map((link, index) => (
                <Grid item key={link.props.to}>
                  {link}
                </Grid>
              ))}
            </Grid>
          </Box>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setShowAppontmentModel(!showAppontmentModel)}
            size="small"
            sx={{
              padding: '15px 20px',
              position: sticked ? 'initial' : 'absolute',
              left: sticked ? null : '100%',
              top: sticked ? null : '50%',
              transform: sticked ? 'none' : 'translate(-50%, -50%)',
              zIndex: 2,
              display: 'flex',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'max-content',
              width: 'max-content',
              '@media (max-width: 1035px)': {
                '&': {
                  padding: '10px 15px',
                },
              },
              '@media (max-width: 864px)': {
                '&': {
                  display: 'none !important',
                },
              },
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={{
                fontSize: '14px',
                '@media (max-width: 1035px)': {
                  '&': {
                    fontSize: '12px',
                  },
                },
              }}
              fontFamily="Titillium Web"
            >
              APPOINTMENT
            </Typography>
          </Button>
        </Box>
        <Modal
          open={showAppontmentModel}
          onClose={() => setShowAppontmentModel(!showAppontmentModel)}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ paddingX: '10px' }}>
            <AppointmentForm close={setShowAppontmentModel} />
          </Box>
        </Modal>
        <Modal
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          sx={{
            width: '100%',
            height: '100%',
            paddingLeft: '20px',
            zIndex: '10000',
            display: 'flex',
            justifyContent: 'right',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '300px',
              height: '100%',
              backgroundColor: theme.palette.primary.light,
              display: 'flex',
              alignItems: 'center',
              flexFlow: 'column nowrap',
            }}
          >
            <CustomMenuIcon
              setOpenDrawer={setOpenDrawer}
              sx={{ alignSelf: 'end', marginTop: '4.5px' }}
            />
            <Stack
              direction="column"
              gap="10px"
              justifyContent="start"
              alignItems="start"
              width="100%"
              padding="0px 50px"
            >
              {LinkList({
                activeColor: 'white',
                CustomTypography: DrawerLinkTypography,
              }).map((link) => (
                <Box key={link.props.to}>{link}</Box>
              ))}
            </Stack>
          </Box>
        </Modal>
      </Box>
    </>
  );
}

NavBar.propTypes = {
  sticked: PropTypes.bool.isRequired,
};

export default NavBar;
