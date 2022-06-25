import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

function ScrollImageInnerBox({ data }) {
	const theme = useTheme();

	return (
		<Box
			key={data.header}
			component='div'
			sx={{
				backgroundImage: `url(${data.image})`,
				backgroundSize: 'cover',
				backgroundPosition: '0% 30%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Box
				sx={{
					backgroundColor: 'rgba(0, 0, 0, 0.7)',
					borderRadius: '2px',
					padding: { xs: '20px 15px', sm: '20px 25px' },
					margin: '35px',
					maxWidth: {
						xs: '500px',
						md: '650px',
					},
					maxHeight: {
						xs: '200px',
						sm: '250px',
						md: '300px',
					},
					minHeight: {
						xs: '100px',
						sm: '130px',
						md: '180px',
					},
					overflowY: 'auto',
					'&::-webkit-scrollbar': {
						width: '5px',
					},
					'&::-webkit-scrollbar-thumb': {
						background: theme.palette.primary.main,
						borderRadius: '15px',
					},
				}}>
				<Typography
					color='primary'
					fontFamily='Titillium Web'
					fontWeight='bold'
					fontSize={{
						xs: '20px',
						sm: '36px',
					}}
					textAlign='center'
					mb={{
						xs: '10px',
						md: '15px',
					}}>
					{data.header}
				</Typography>
				<Typography
					color='white'
					textAlign='center'
					sx={{
						fontSize: { xs: '12px', sm: '14px', md: '16px' },
						fontFamily: 'Titillium Web',
						fontWeight: 300,
					}}>
					{data.body}
				</Typography>
			</Box>
		</Box>
	);
}

export default ScrollImageInnerBox;
