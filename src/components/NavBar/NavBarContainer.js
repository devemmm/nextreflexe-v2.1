import { Box, useTheme } from '@mui/material';
import React, { useState } from 'react';
import NavBar from './NavBar';

function NavBarContainer({ children, ...props }) {
	const theme = useTheme();
	const [sticked, setSticked] = useState(false);

	const getStickData = (e) => {
		if (e.target.scrollTop >= 32) {
			if (sticked !== true) {
				setSticked(true);
			}
		} else {
			if (sticked !== false) {
				setSticked(false);
			}
		}
	};

	return (
		<Box
			onScroll={getStickData}
			sx={{
				height: '100%',
				width: '100%',
				overflowY: 'scroll',
				position: 'absolute',
				...props.sx,
				zIndex: 100,
				'& *::-webkit-scrollbar': {
					height: '2px',
					width: '5px',
					background: theme.colors.grey,
				},
				'&::-webkit-scrollbar-thumb': {
					background: theme.palette.primary.main,
					borderRadius: '15px',
				},
			}}
			{...props}>
			<NavBar sticked={sticked} />
			{children}
		</Box>
	);
}

export default NavBarContainer;
