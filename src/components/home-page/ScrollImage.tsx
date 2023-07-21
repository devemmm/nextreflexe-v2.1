import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../../styles/ScrollImage.css';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { IconButton, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import ScrollImageInnerBox from './ScrollImageInnerBox';
import { ObjectType } from 'src/types/dashboardTypes';

const NextPrevButton = ({ Icon, margin, sx, ...props }: ObjectType) => {
  const theme = useTheme();

  return (
    <IconButton
      className="nav default-nav"
      sx={{
        ...sx,
        margin,
        width: '50px !important',
        height: '90px !important',
        background: 'none !important',
        [theme.breakpoints.down('sm')]: {
          width: '30px !important',
          height: '30px !important',
        },
      }}
      {...props}
    >
      <Icon
        color="primary"
        sx={{
          width: '50px !important',
          height: '90px !important',
          [theme.breakpoints.down('sm')]: {
            width: '30px !important',
            height: '30px !important',
          },
        }}
      />
    </IconButton>
  );
};

function ScrollImage() {
  const homePageState = useSelector((state: any) => state.homePageReducer);
  const { loading, data } = homePageState;
  return (
    !loading &&
    data.scrollData !== undefined && (
      <Slide
        easing="ease"
        nextArrow={NextPrevButton({
          Icon: ArrowForwardIosIcon,
          margin: {
            xs: '0px 0px 0px -30px !important',
            sm: '0px 0px 0px -50px !important',
          },
        })}
        prevArrow={NextPrevButton({
          Icon: ArrowBackIosNewIcon,
          margin: {
            xs: '0px -30px 0px 0px !important',
            sm: '0px -50px 0px 0px !important',
          },
        })}
        autoplay={true}
        pauseOnHover={false}
        cssClass="slide_container"
      >
        {data &&
          data.scrollData.map((data: any) => (
            <ScrollImageInnerBox key={data.id} data={data} />
          ))}
      </Slide>
    )
  );
}

export default ScrollImage;

