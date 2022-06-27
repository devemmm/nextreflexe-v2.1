import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';

import HeaderTitle from './HeaderTitle';
import chineseArcIcon from '../../assets/icons/chinese-arc-icon.svg';
import kungaIcon from '../../assets/icons/kunga-icon.svg';
import massageIcon from '../../assets/icons/massage-icon.svg';

const datas = [
	{
		icon: kungaIcon,
		header: 'Kunga',
		body: 'An ancient Rwandan form of physiotherapy used as the first line treatment of any ailment before any herbal or traditional concoctions were used to an unwell patient. Indigenous knowledge systems’ popularity unfortunately waned with the advent of western medicines. However as most indigenous people from around the world realised the side-effects of most conventional medicines, there has been a rash to re-embrace their traditional herbs, cultures and ways of life in order to reclaim the lost harmony with their natural environment. Some have even gone as far as going back to live with nature in the country site, grow and eat own food and certainly prefer traditional therapeutic practices. This has also created a market and demand for the rise of Kunga, first in Rwanda where it originates and is rapidly spreading to most parts of Africa and beyond. We have over the years treated in excess of 22,000 people who have not shied away from recommending Kunga to many others with similar or related physical conditions. We have had a 99% treatment rate with an insignificant number not completing their total sessions being the remaining percentage.',
	},
	{
		icon: massageIcon,
		header: 'Ancient Senegalese Massage',
		body: 'This is a rigorous full body massage, one that certainly should not be executed by an inexperienced and unskilled therapist. Traditionally the massage is applied frequently, in the morning, and is given by an elder female family member, such as an aunt or grandmother, but also by professional folk healers. It’s a typical African massage practice that includes stretches, shaking, inverted suspensions, tossing in the air, firm rubbing, tapping and stroking, abdominal work, using oils (such as Touloucouna oil), butters (Shea butter), and hot herbal applications. The massage treatment is believed to be a ritual to welcome and integrate a new baby to the world. It is believed that the massage is aimed at increasing overall blood circulation in the baby’s body and strengthening the baby’s nervous system, muscles, joints, and limbs. The firm routine is also believed to make the child less emotional, less afraid, and more intelligent in life. As an organisation, Genuine Kunga Therapy has borrowed a lot from this practice and incorporated it into its own blended therapy. Our experts have studied and researched on the Senegalese massage and concluded that the philosophy and practice is a good source of inspiration and knowledge in the treatment of various physical conditions commonly seen and experienced by humans since time immemorial.',
	},
	{
		icon: chineseArcIcon,
		header: 'Chinese Arcipuncture',
		body: "Acupuncture is a traditional Chinese therapeutic practice that is based on the idea that a blockage or disturbance in the flow of the body's life energy, or qi, can cause health issues. Acupuncturists insert thin needles into specific points throughout the body to balance the body’s energy, stimulate healing, and promote relaxation. In our practice we have incorporated acupuncture by using the same philosophy of applying pressure to those acupoints in our treatment of a myriad of conditions of our patients. We do not use needles but apply pressure on the same points as in acupuncture.",
	},
];

function OurMethods() {
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
			<HeaderTitle
				data='Our Methods'
				sx={{ paddingY: { xs: '20px', sm: '25px', md: '30px', lg: '35pxpx' } }}
			/>
			{datas.map((data) => (
				<Box key={data.header}
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexFlow: 'column nowrap',
						gap: { xs: '10px', sm: '15px', md: '20px', lg: '25px' },
						background: '#FFFFFF',
						boxShadow:
							'0px 4px 4px rgba(0, 0, 0, 0.1), 5px 20px 25px 5px rgba(0, 0, 0, 0.05), 1px 1px 30px 10px rgba(0, 0, 0, 0.1)',
						borderRadius: ' 20px 20px 0px 0px',
						marginY: { xs: '10px', sm: '20px' },
						padding: {
							xs: '25px 20px',
							sm: '35px',
							md: '40px',
							lg: '65px',
						},
					}}>
					<Box component='img' src={data.icon} alt={data.header} marginBottom='10px' />
					<Typography
						color='primary'
						sx={{
							fontFamily: 'Titillium Web',
							fontWeight: 700,
							fontSize: {
								xs: '20px',
								md: '24px',
							},
							textAlign: 'center',
						}}>
						{data.header}
					</Typography>
					<Typography
						sx={{
							fontWeight: 300,
							fontSize: { xs: '14px', sm: '16px' },
							textAlign: 'justify',
						}}>
						{data.body}
					</Typography>
				</Box>
			))}
		</Box>
	);
}

export default OurMethods;
