import PropTypes from 'prop-types';
import { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';

import formatDateRow from '../../utils/formatDate_hourFirst';
import BoldTableHeaderCell from '../BoldTableHeaderCell';
import Loading from '../Loading';
import ThinTableBodyCell from '../ThinTableBodyCell';
import { formatName_surname } from '../../utils/formatName_surname';
import Search from '../Search';

const Row = ({
  data: {
    sessionPrice,
    pay,
    remainsSession,
    paymentMethod,
    status,
    patient,
    service,
    createdAt,
  },
}) => {
  let fname;
  let lname;
  let serviceName;

  if (patient) ({ lname, fname } = patient);
  if (service) ({ name: serviceName } = service);

  const theme = useTheme();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <TableRow
        sx={{
          background: '#FFFFFF',
          borderTop: `1.1px solid ${theme.palette.primary.light}`,
          borderRadius: '30px',
        }}
      >
        <TableCell align="center">
          <IconButton
            size="small"
            color="primary"
            onClick={() => {
              setShowDetails(!showDetails);
            }}
          >
            {showDetails ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <ThinTableBodyCell text={sessionPrice} />
        <ThinTableBodyCell text={pay} />
        <ThinTableBodyCell text={remainsSession} />
        <ThinTableBodyCell text={paymentMethod} />
        <ThinTableBodyCell text={status} />
        <ThinTableBodyCell text={formatName_surname(fname, lname)} />
        <ThinTableBodyCell text={serviceName} />
        <ThinTableBodyCell text={formatDateRow(createdAt, false)} />
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            border: '0px',
          }}
          colSpan={10}
        >
          <Collapse in={showDetails} unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body1" gutterBottom component="div">
                "Details
              </Typography>
              <Box
                sx={{
                  background: '#F4F4F4',
                  paddingX: { xs: '20px', md: '35px' },
                  paddingY: '15px',
                  width: '100%',
                  height: '300px',
                }}
              ></Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function PaymentsTable({ datas, loadingGet, ...props }) {
  const [filteredData, setFilteredData] = useState([]);

  function searchFunc(searchKey) {
    let result = datas.filter(
      (item) =>
        item.patient.nid.includes(searchKey) ||
        item.patient.fname.includes(searchKey) ||
        item.patient.lname.includes(searchKey) ||
        item.patient.email.includes(searchKey) ||
        item.patient.phone.includes(searchKey),
    );
    setFilteredData(result);
  }

  return (
    <>
      <Box
        sx={{
          paddingX: '10px',
          paddingBottom: '10px',
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'auto',
        }}
        {...props}
      >
        {loadingGet ? (
          <Loading />
        ) : (
          <>
            <Search searchFunc={searchFunc} />
            <TableContainer
              sx={{
                background: 'white',
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <BoldTableHeaderCell title="Session Price" />
                    <BoldTableHeaderCell title="Amount Paid" />
                    <BoldTableHeaderCell title="Remaining Session" />
                    <BoldTableHeaderCell title="Payment Method" />
                    <BoldTableHeaderCell title="Status" />
                    <BoldTableHeaderCell title="Patient" />
                    <BoldTableHeaderCell title="Service" />
                    <BoldTableHeaderCell title="Created At" />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.length === 0
                    ? datas?.map((data, index) => {
                        return <Row key={data.id + ' ' + index} data={data} />;
                      })
                    : filteredData.map((data: any, index) => {
                        return <Row key={data.id + ' ' + index} data={data} />;
                      })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Box>
    </>
  );
}

PaymentsTable.propTypes = {
  datas: PropTypes.any.isRequired,
  loadingGet: PropTypes.bool.isRequired,
};

export default PaymentsTable;

