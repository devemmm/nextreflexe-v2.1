import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import '../../styles/ScrollImage.css';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import ScrollImageInnerBox from './ScrollImageInnerBox';
import { IconButton, useTheme } from '@mui/material';

const slideImages = [
	{
		image:
			'https://res.cloudinary.com/nextreflexe/image/upload/v1656436764/page/home_bg1_enqgeq.jpg',
		header: 'GENUINE KUNGA',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor',
	},
	{
		image:
			'https://res.cloudinary.com/nextreflexe/image/upload/v1656436758/page/home_bg2_z322jw.jpg',
		header: 'JOINT TREATMENT',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	}
];

const NextPrevButton = ({ Icon, margin, sx, ...props }) => {
	const theme = useTheme();

	return (
		<IconButton
			className='nav default-nav'
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
			{...props}>
			<Icon
				color='primary'
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
	return (
		<Slide
			easing='ease'
			nextArrow={NextPrevButton({
				Icon: ArrowForwardIosIcon,
				margin: { xs: '0px 0px 0px -30px !important', sm: '0px 0px 0px -50px !important' },
			})}
			prevArrow={NextPrevButton({
				Icon: ArrowBackIosNewIcon,
				margin: { xs: '0px -30px 0px 0px !important', sm: '0px -50px 0px 0px !important' },
			})}
			autoplay={true}
			pauseOnHover={false}
			cssClass='slide_container'>
			{slideImages.map((data) => (
				<ScrollImageInnerBox key={data.header} data={data} />
			))}
		</Slide>
	);
}

export default ScrollImage;
