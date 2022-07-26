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
import formatDateRow from '../../utils/formatDate_hourFirst';
import BoldTableHeaderCell from '../BoldTableHeaderCell';
import Loading from '../Loading';
import ThinTableBodyCell from '../ThinTableBodyCell';

const Row = ({
  data: {
    startTime,
    endTime,
    status,
    patientId: patient,
    userId: Doctor,
    branchId: branch,
    serviceId: service,
    createdAt,
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
        }}
      >
        <ThinTableBodyCell text={formatDateRow(startTime)} />
        <ThinTableBodyCell text={formatDateRow(endTime)} />
        <ThinTableBodyCell text={status} />
        <ThinTableBodyCell text={patient} />
        <ThinTableBodyCell text={Doctor} />
        <ThinTableBodyCell text={branch} />
        <ThinTableBodyCell text={service} />
        <ThinTableBodyCell text={formatDateRow(createdAt, false)} />
      </TableRow>
    </>
  );
};

function AppointmentsTable({ datas, loadingGet, ...props }) {
  let modifiedDatas = [];
  console.log(datas);
  if (datas?.length) {
    modifiedDatas = [
      ...datas,
      ...datas,
      ...datas,
      ...datas,
      ...datas,
      ...datas,
      ...datas,
      ...datas,
    ];
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
      }}
    >
      {loadingGet ? (
        <Loading />
      ) : (
        <TableContainer
          sx={{
            background: 'white',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <BoldTableHeaderCell title="Start Time" />
                <BoldTableHeaderCell title="End Time" />
                <BoldTableHeaderCell title="Status" />
                <BoldTableHeaderCell title="Patient Name" />
                <BoldTableHeaderCell title="Doctor Name" />
                <BoldTableHeaderCell title="Branch" />
                <BoldTableHeaderCell title="Service" />
                <BoldTableHeaderCell title="Created At" />
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

AppointmentsTable.propTypes = {
  datas: PropTypes.any.isRequired,
  loadingGet: PropTypes.bool.isRequired,
};

export default AppointmentsTable;

