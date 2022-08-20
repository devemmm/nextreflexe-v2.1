import PropTypes from 'prop-types';
import { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Box,
  Collapse,
  IconButton,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';

import BoldTableHeaderCell from '../BoldTableHeaderCell';
import Loading from '../Loading';
import ThinTableBodyCell from '../ThinTableBodyCell';
import { formatName_surname } from '../../utils/formatName_surname';
import PatientsDetails from './PatientsDetails';
import formatDateRow from '../../utils/formatDate_hourFirst';

const Row = ({ data, ...props }) => {
  const { fname, lname, email, phone, status, dob, nid, createdAt } = data;
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
        <ThinTableBodyCell text={formatName_surname(fname, lname)} />
        <ThinTableBodyCell text={email.trim()} />
        <ThinTableBodyCell text={phone} />
        <ThinTableBodyCell text={status} />
        <ThinTableBodyCell text={formatDateRow(dob, false)} />
        <ThinTableBodyCell text={nid} />
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
              <PatientsDetails data={data} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function PatientsTable({ datas, loadingGet, ...props }) {
  return (
    <Box
      sx={{
        paddingX: '10px',
        paddingBottom: '10px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        position: 'relative',
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
                <TableCell />
                <BoldTableHeaderCell title="Name" />
                <BoldTableHeaderCell title="Email" />
                <BoldTableHeaderCell title="Phone" />
                <BoldTableHeaderCell title="Status" />
                <BoldTableHeaderCell title="Birth Date" />
                <BoldTableHeaderCell title="National ID" />
                <BoldTableHeaderCell title="Created At" />
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map((data, index) => {
                return <Row key={data.id} data={data} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

PatientsTable.propTypes = {
  datas: PropTypes.any.isRequired,
  loadingGet: PropTypes.bool.isRequired,
};

export default PatientsTable;

