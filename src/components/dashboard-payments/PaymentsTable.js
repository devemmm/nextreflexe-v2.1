import React from 'react';
import PropTypes from 'prop-types';

import {
	Box,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	useTheme,
} from '@mui/material';
import ThinTableBodyCell from '../ThinTableBodyCell';
import BoldTableHeaderCell from '../BoldTableHeaderCell';
import Loading from '../Loading';
import formatDateRow from '../../utils/formatDate_hourFirst';
import formatName_fnameShort from '../../utils/formatName_fnameShort';

const Row = ({
	data: {
		patient: { fname, lname },
		pay,
		sessionPrice,
		totalSession,
		remainsSession,
		totalPayment,
		debit,
		credit,
		paymentMethod,
		status,
		service: { name: serviceName },
		createdAt,
		visit: { id: visitId, startTime: VisitStart, endTime: visitEnd },
	},
}) => {
	const theme = useTheme();

	return (
		<>
			<TableRow
				sx={{
					background: '#FFFFFF',
					border: `1.1px solid ${theme.palette.primary.light}`,
					borderRadius: '30px',
					'& > *': { borderBottom: 'unset' },
				}}>
				<ThinTableBodyCell text={formatName_fnameShort(fname, lname)} />
				<ThinTableBodyCell text={pay} />
				<ThinTableBodyCell text={sessionPrice} />
				<ThinTableBodyCell text={totalSession} />
				<ThinTableBodyCell text={remainsSession} />
				<ThinTableBodyCell text={totalPayment} />
				<ThinTableBodyCell text={debit} />
				<ThinTableBodyCell text={credit} />
				<ThinTableBodyCell text={paymentMethod} />
				<ThinTableBodyCell text={status} />
				<ThinTableBodyCell text={serviceName} />
				<ThinTableBodyCell text={formatDateRow(createdAt, false)} />
				<ThinTableBodyCell text={visitId} />
				<ThinTableBodyCell text={formatDateRow(VisitStart)} />
				<ThinTableBodyCell text={formatDateRow(visitEnd)} />
			</TableRow>
		</>
	);
};

function PaymentsTable({ datas, loadingGet, ...props }) {
	let modifiedDatas = [];
	if (datas.length) {
		modifiedDatas = [...datas, ...datas];
	}

	return (
		<Box
			sx={{
				paddingX: '10px',
				paddingBottom: '10px',
				width: '100%',
				height: '100%',
				position: 'relative',
				overflow: 'auto',
			}}>
			{loadingGet ? (
				<Loading />
			) : (
				<TableContainer
					sx={{
						background: 'white',
					}}>
					<Table>
						<TableHead>
							<TableRow>
								<BoldTableHeaderCell title='Patient' />
								<BoldTableHeaderCell title='Pay Amount' />
								<BoldTableHeaderCell title='Session Price' />
								<BoldTableHeaderCell title='Total Sessions' />
								<BoldTableHeaderCell title='Sessions Remaining' />
								<BoldTableHeaderCell title='Total Payment' />
								<BoldTableHeaderCell title='Debit' />
								<BoldTableHeaderCell title='Credit' />
								<BoldTableHeaderCell title='Payment Method' />
								<BoldTableHeaderCell title='Status' />
								<BoldTableHeaderCell title='Service' />
								<BoldTableHeaderCell title='Created At' />
								<BoldTableHeaderCell title='Visit ID' />
								<BoldTableHeaderCell title='Visit Start' />
								<BoldTableHeaderCell title='Visit End' />
							</TableRow>
						</TableHead>
						<TableBody>
							{modifiedDatas.map((data, index) => {
								return <Row key={data.id + ' ' + index} data={data} />;
							})}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Box>
	);
}

PaymentsTable.propTypes = {
	datas: PropTypes.any.isRequired,
	loadingGet: PropTypes.bool.isRequired,
};

export default PaymentsTable;
