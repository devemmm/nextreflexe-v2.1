import { Box, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

function ServiceCard({ datas: { header, body, icon }, ...props }) {
	const theme = useTheme();

	return (
		<Grid
			key={header}
			item
			xs={12}
			sm={6}
			md={4}
			alignItems='center'
			justifyContent='center'
			{...props}>
			<Box /// wrapper for the service card
				sx={{
					transition: 'all 0.5s ease-in-out',
					userSelect: 'none',
					cursor: 'pointer',
					height: '355px',
					width: '100%',
					marginX: 'auto',
					maxWidth: '350px',
					background: 'white',
					border: '0.5px solid rgba(1, 143, 85, 0.25)',
					borderRadius: '7px',
					padding: '20px',
					overflowY: 'hidden',
					'&:hover': {
						boxShadow: '0px 20px 40px 3px rgba(0, 0, 0, 0.25)',
						transform: 'translate(0px, -3px)',
						borderColor: 'white',
					},
				}}>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						borderRadius: '7px',
						display: 'flex',
						flexFlow: 'column nowrap',
						gap: {
							xs: '10px',
							sm: '20px',
						},
						alignItems: 'center',
						overflowY: 'hidden',
					}}>
					<Box /// wrapper for the service icon
						sx={{
							width: { xs: '108px' },
							height: { xs: '108px' },
							padding: { xs: '20px' },
							flexShrink: 0,
							border: `1px solid ${theme.palette.primary.main}`,
							borderRadius: '50%',
							backgroundColor: 'white',
						}}>
						<Box
							src={icon}
							sx={{
								width: '100%',
								height: '100%',
								backgroundImage: `url(${icon})`,
								backgroundPosition: 'center',
								backgroundSize: 'contain',
								backgroundRepeat: 'no-repeat',
							}}
						/>
					</Box>
					<Typography
						color='primary'
						sx={{
							flexShrink: 1,
							fontFamily: 'Titillium Web',
							fontWeight: 700,
							fontSize: {
								xs: '20px',
								sm: '24px',
							},
							textAlign: 'center',
						}}>
						{header}
					</Typography>
					<Typography
						sx={{
							flexShrink: 1,
							fontSize: {
								xs: '14px',
								sm: '16px',
							},
							textOverflow: 'clip',
							fontWeight: 300,
							textAlign: 'justify',
						}}>
						{body}
					</Typography>
				</Box>
			</Box>
		</Grid>
	);
}

export default ServiceCard;
