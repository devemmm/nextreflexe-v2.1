import { Box, Typography, useTheme } from '@mui/material';
import AboutVisitors from './AboutVisitors';
import HeaderTitle from './HeaderTitle';

function About() {
	const theme = useTheme();

	return (
		<Box
			sx={{
				background: theme.colors.grey,
				padding: {
					xs: '20px',
					sm: '25px',
					md: '40px',
					lg: '65px',
				},
			}}>
			<Box
				sx={{
					background: '#FFFFFF',
					boxShadow:
						'0px 4px 4px rgba(0, 0, 0, 0.1), 5px 20px 25px 5px rgba(0, 0, 0, 0.05), 1px 1px 30px 10px rgba(0, 0, 0, 0.1)',
					borderRadius: ' 20px 20px 0px 0px',
					padding: {
						xs: '25px 20px',
						sm: '35px',
						md: '40px',
						lg: '65px',
					},
				}}>
				<HeaderTitle data='About Us' />
				<Typography
					display='block'
					sx={{
						marginX: 'auto',
						fontWeight: 300,
						textAlign: 'center',
						fontSize: {
							xs: '14px',
							md: '16px',
						},
						maxWidth: {
							sm: '500px',
							md: '600px',
							lg: '900px',
						},
						marginY: {
							xs: '20px',
							sm: '30px',
							lg: '40px',
						},
					}}>
					Genuine Kunga Therapy is an alternative health company incorporated in Rwanda 13 years
					ago. The company operates 7 therapy practices across 3 countries in Africa, namely; Rwanda
					(3), Zimbabwe (1) and Central Africa Republic (1) We have successfully treated over 11,000
					patients over the years with varying conditions ranging from paralysis, disability, sports
					injuries, back pain, spinal cord injuries, chronic migraines, fatigue and insomnia.
					<br />
					<br />
					Our therapists are trained experts. They diagnose and treat a range of injuries,
					disabilities, and health conditions. Kunga therapists aim to improve a person’s range of
					movement and quality of life and prevent further injury or disability. Our therapists
					specialise in a range of conditions including but not limited to; disability in children
					and adults, paralysis, sports injuries, accident victims, migraines and insomnia.
				</Typography>
				<AboutVisitors />
			</Box>
		</Box>
	);
}

export default About;
