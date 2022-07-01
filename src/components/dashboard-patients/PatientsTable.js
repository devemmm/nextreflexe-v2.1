import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
	Box,
	Collapse,
	IconButton,
	Paper,
	styled,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	useTheme,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CustomTableHeaderCell = ({ title }) => {
	return (
		<TableCell align='center' th>
			<Typography
				variant='p'
				component='div'
				sx={{
					fontFamily: 'Titillium Web',
					fontWeight: 700,
				}}>
				{title}
			</Typography>
		</TableCell>
	);
};
const CustomTableBodyCell = ({ text }) => {
	return (
		<TableCell align='center' th>
			<Typography
				variant='p'
				component='div'
				sx={{
					fontSize: '12px',
					fontWeight: 300,
				}}>
				{text}
			</Typography>
		</TableCell>
	);
};

const Row = ({ data: { id, email, phone, status, diagnosis }, ...props }) => {
	const theme = useTheme();
	const [showDetails, setShowDetails] = useState(false);

	return (
		<>
			<TableRow
				sx={{
					background: '#FFFFFF',
					border: `1.1px solid ${theme.palette.primary.light}`,
					borderRadius: '30px',
					'& > *': { borderBottom: 'unset' },
				}}>
				<TableCell align='center'>
					<IconButton
						size='small'
						color='primary'
						onClick={() => {
							setShowDetails(!showDetails);
						}}>
						{showDetails ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<CustomTableBodyCell text={id} />
				<CustomTableBodyCell text={email} />
				<CustomTableBodyCell text={phone} />
				<CustomTableBodyCell text={status} />
				<CustomTableBodyCell text={diagnosis} />
				<TableCell align='center'>
					<IconButton size='small' color='primary'>
						<EditIcon />
					</IconButton>
				</TableCell>
				<TableCell align='center'>
					<IconButton size='small' color='error'>
						<DeleteForeverIcon />
					</IconButton>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
					<Collapse in={showDetails} unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant='p' gutterBottom component='div'>
								"Details
							</Typography>
							<Box
								sx={{
									background: theme.colors.grey,
									paddingX: { xs: '20px', md: '35px' },
									paddingY: '15px',
									width: '100%',
									height: '300px',
								}}></Box>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
};

function PatientsTable({ datas, ...props }) {
	return (
		<Box
			sx={{
				paddingX: '10px',
				width: '100%',
				height: '100%',
			}}>
			<TableContainer
				sx={{
					background: 'white',
				}}>
				<Table>
					<TableHead>
						<TableCell />
						<CustomTableHeaderCell title='Id' />
						<CustomTableHeaderCell title='Email' />
						<CustomTableHeaderCell title='Phone' />
						<CustomTableHeaderCell title='Status' />
						<CustomTableHeaderCell title='Diagnosis' />
						<TableCell />
						<TableCell />
					</TableHead>
					<TableBody>
						{datas.map((data) => {
							return <Row data={data} />;
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}

PatientsTable.propTypes = {
	datas: PropTypes.object.isRequired,
};

export default PatientsTable;
